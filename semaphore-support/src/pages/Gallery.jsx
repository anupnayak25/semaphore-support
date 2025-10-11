import React, { useEffect, useState, useCallback, useRef } from 'react';
import { db } from '../context/firebase';
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import './Gallery.css';

const days = ['All', '1st', '2nd'];
const years = ['All', '1st year', '2nd year'];
const sections = ['All', 'a', 'b', 'c', 'mixed'];
const ITEMS_PER_PAGE = 15;
const INITIAL_PREFETCH_COUNT = 50; // preload first 50 thumbnails before showing grid

const Gallery = () => {
  const { user } = useAuth();
  const [images, setImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [day, setDay] = useState('All');
  const [year, setYear] = useState('All');
  const [section, setSection] = useState('All');
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  // use an explicit loadingMore flag to prevent concurrent loads
  const [loadingMore, setLoadingMore] = useState(false);
  const loadingMoreRef = useRef(false); // immediate guard against fast multiple triggers
  // multi-select state
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const observerTarget = useRef(null);
  const masterCheckboxRef = useRef(null);
  const [initialPrefetching, setInitialPrefetching] = useState(true); // gate UI until first N are cached

  const ALLOWED_EMAILS = [
    'mrnayak27@gmail.com',
    'nnm24mc014@nmamit.in',
    'nnm24mc015@nmamit.in',
  ];
  const isAdmin = !!(user && ALLOWED_EMAILS.includes(user.email));

  // Generate thumbnail URL for Cloudinary images
  const getThumbnailUrl = (url, type) => {
    if (!url) return url;
    
    // Check if it's a Cloudinary URL
    if (url.includes('cloudinary.com')) {
      try {
        // For images: add transformation parameters for thumbnail
        if (type === 'image') {
          // Replace /upload/ with /upload/w_400,h_400,c_limit,q_auto:low,f_auto/
          return url.replace('/upload/', '/upload/w_400,h_400,c_limit,q_auto:low,f_auto/');
        } else if (type === 'video') {
          // For videos: get a thumbnail image instead
          return url.replace('/upload/', '/upload/w_400,h_400,c_fill,q_auto:low,so_0/').replace(/\.[^.]+$/, '.jpg');
        }
      } catch (error) {
        console.error('Error generating thumbnail:', error);
        return url;
      }
    }
    
    // Return original URL if not Cloudinary
    return url;
  };

  // Fetch all images from Firestore
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        let data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  // Filter images based on day and section
  const filtered = images.filter(img =>
    (day === 'All' || img.day === day) &&
    (year === 'All' || img.year === year) &&
    (section === 'All' || img.section === section)
  );

  // Build a stable key for the first N items to prefetch so the effect doesn't thrash
  const filteredPrefetchKey = filtered
    .slice(0, INITIAL_PREFETCH_COUNT)
    .map((i) => i.id)
    .join('|');

  // Load more images when scrolling
  const loadMore = useCallback(() => {
    if (loadingMoreRef.current || loadingMore) return; // guard against concurrent calls
    loadingMoreRef.current = true;
    setLoadingMore(true);

    const startIndex = displayedImages.length; // offset-based
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newImages = filtered.slice(startIndex, endIndex);

    if (newImages.length > 0) {
      setDisplayedImages(prev => {
        const seen = new Set(prev.map((i) => i.id));
        const toAdd = newImages.filter((i) => !seen.has(i.id));
        return [...prev, ...toAdd];
      });
      setHasMore(endIndex < filtered.length);
    } else {
      setHasMore(false);
    }

    // release guards after state updates are queued
    setLoadingMore(false);
    loadingMoreRef.current = false;
  }, [displayedImages.length, filtered, loadingMore]);

  // Reset displayed images when filters change
  useEffect(() => {
    setDisplayedImages([]);
    setHasMore(true);
    // clear selections when filters/data change to avoid stale selections
    setSelectedIds(new Set());
    // restart prefetch gate when data or filters change
    setInitialPrefetching(true);
    // also reset the immediate guard
    loadingMoreRef.current = false;
  }, [day, year, section, images]);

  // Load initial images
  useEffect(() => {
    if (initialPrefetching) return; // wait until first thumbnails prefetch
    if (displayedImages.length === 0 && filtered.length > 0 && !loadingMore) {
      loadMore();
    }
  }, [displayedImages.length, filtered.length, loadMore, loadingMore, initialPrefetching]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (initialPrefetching) return; // don't start observing during gate
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading && !loadingMore && !loadingMoreRef.current) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: '200px 0px' }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, loading, loadingMore, loadMore, initialPrefetching]);

  // Prefetch first N thumbnails before showing the grid
  useEffect(() => {
    let cancelled = false;
    const count = Math.min(INITIAL_PREFETCH_COUNT, filtered.length);
    if (count === 0) {
      setInitialPrefetching(false);
      return;
    }
    setInitialPrefetching(true);
    const urls = filtered.slice(0, count).map((i) => getThumbnailUrl(i.url, i.type));
    let remaining = urls.length;
    urls.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        if (cancelled) return;
        remaining -= 1;
        if (remaining <= 0) {
          setInitialPrefetching(false);
        }
      };
      img.src = src;
    });
    return () => {
      cancelled = true;
    };
  }, [filteredPrefetchKey]);

  // Master checkbox indeterminate state (some but not all visible selected)
  useEffect(() => {
    const visibleIds = new Set(displayedImages.map(i => i.id));
    const selectedVisibleCount = [...selectedIds].filter(id => visibleIds.has(id)).length;
    const allVisibleSelected = visibleIds.size > 0 && selectedVisibleCount === visibleIds.size;
    const someVisibleSelected = selectedVisibleCount > 0 && !allVisibleSelected;
    if (masterCheckboxRef.current) {
      masterCheckboxRef.current.indeterminate = someVisibleSelected;
    }
  }, [displayedImages, selectedIds]);

  const toggleSelect = (id) => {
    setSelectedIds(prev => {
      const s = new Set(prev);
      if (s.has(id)) s.delete(id); else s.add(id);
      return s;
    });
  };

  const toggleSelectAllVisible = () => {
    const visibleIds = displayedImages.map(i => i.id);
    const allSelected = visibleIds.every(id => selectedIds.has(id));
    setSelectedIds(prev => {
      if (allSelected) {
        const s = new Set(prev);
        visibleIds.forEach(id => s.delete(id));
        return s;
      } else {
        const s = new Set(prev);
        visibleIds.forEach(id => s.add(id));
        return s;
      }
    });
  };

  const handleDownloadMultiple = async () => {
    const selected = images.filter(i => selectedIds.has(i.id));
    if (selected.length === 0) return;
    const toastId = toast.loading(`Preparing ${selected.length} download(s)...`);
    try {
      for (const img of selected) {
        // reuse single download logic but without toasting each one
        try {
          const response = await fetch(img.url);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          const extension = img.type === 'video' ? 'mp4' : 'jpg';
          const yearPart = img.year ? `-${img.year.replace(/\s+/g, '-')}` : '';
          link.download = `semaphore-${img.day}${yearPart}-${img.section}-${Date.now()}.${extension}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        } catch (e) {
          console.error('Bulk download item failed:', e);
          // fallback open in new tab for this item
          try { window.open(img.url, '_blank'); } catch {}
        }
        // slight delay to avoid overwhelming the browser
        await new Promise(r => setTimeout(r, 100));
      }
      toast.success(`Started downloads for ${selected.length} file(s).`, { id: toastId });
    } catch (err) {
      toast.error('Bulk download failed. Try again.', { id: toastId });
    }
  };

  const openLightbox = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleDownload = async (img) => {
    try {
      const response = await fetch(img.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const extension = img.type === 'video' ? 'mp4' : 'jpg';
      const yearPart = img.year ? `-${img.year.replace(/\s+/g, '-')}` : '';
      link.download = `semaphore-${img.day}${yearPart}-${img.section}-${Date.now()}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success('Download started!');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Download failed. Opening in new tab...');
      window.open(img.url, '_blank');
    }
  };

  const handleShare = async (img) => {
    const shareData = {
      title: 'Semaphore Gallery',
      text: `Check out this ${img.type} from Semaphore Day ${img.day}, Section ${img.section}`,
      url: img.url,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        toast.success('Shared successfully!');
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(img.url);
        toast.success('Link copied to clipboard!');
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Share error:', error);
        // Fallback: Copy to clipboard
        try {
          await navigator.clipboard.writeText(img.url);
          toast.success('Link copied to clipboard!');
        } catch (clipboardError) {
          toast.error('Failed to share. Please try again.');
        }
      }
    }
  };

  const handleDelete = async (img) => {
    if (!isAdmin) return;
    if (!img?.cloudinary?.public_id || !img?.cloudName) {
      toast.error('Cannot delete: missing Cloudinary info.');
      return;
    }

    const confirmMsg = `Delete this ${img.type || 'media'}? This will remove it from Cloudinary and the gallery.`;
    if (!window.confirm(confirmMsg)) return;

    setDeletingId(img.id);
    try {
      const payload = {
        public_id: img.cloudinary.public_id,
        resource_type: img.cloudinary.resource_type || (img.type === 'video' ? 'video' : 'image'),
        cloudName: img.cloudName,
      };

      const token = user && (await user.getIdToken());
      const res = await fetch('/api/delete-media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to delete from Cloudinary');
      }

      // Remove from Firestore
      await deleteDoc(doc(db, 'gallery', img.id));

      // Update local state
      setImages(prev => prev.filter(i => i.id !== img.id));
      setDisplayedImages(prev => prev.filter(i => i.id !== img.id));
      if (selectedImage?.id === img.id) setSelectedImage(null);

      toast.success('Deleted successfully');
    } catch (err) {
      console.error('Delete error:', err);
      toast.error(err.message || 'Delete failed');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-5">
      {/* Header with filters */}
      <div className="max-w-[1400px] mx-auto mb-6 md:mb-8 bg-white p-4 md:p-6 lg:p-8 border-[3px] border-black rounded-2xl">
        {/* Title Row */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black m-0">Gallery</h2>
        </div>

        {/* Filters and Actions Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Filter Controls */}
          <div className="flex flex-wrap gap-2 md:gap-3 items-center">
            <div className="flex items-center gap-1.5">
              <label className="text-xs md:text-sm font-semibold text-black">Day:</label>
              <select 
                value={day} 
                onChange={e => setDay(e.target.value)} 
                className="px-2 md:px-3 py-1 md:py-1.5 border-2 border-black rounded-lg text-xs md:text-sm cursor-pointer transition-all bg-white hover:bg-gray-100 focus:bg-gray-100 focus:outline-none min-w-[60px] md:min-w-[80px]"
              >
                {days.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-1.5">
              <label className="text-xs md:text-sm font-semibold text-black">Year:</label>
              <select 
                value={year} 
                onChange={e => setYear(e.target.value)} 
                className="px-2 md:px-3 py-1 md:py-1.5 border-2 border-black rounded-lg text-xs md:text-sm cursor-pointer transition-all bg-white hover:bg-gray-100 focus:bg-gray-100 focus:outline-none min-w-[60px] md:min-w-[80px]"
              >
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-1.5">
              <label className="text-xs md:text-sm font-semibold text-black">Section:</label>
              <select 
                value={section} 
                onChange={e => setSection(e.target.value)} 
                className="px-2 md:px-3 py-1 md:py-1.5 border-2 border-black rounded-lg text-xs md:text-sm cursor-pointer transition-all bg-white hover:bg-gray-100 focus:bg-gray-100 focus:outline-none min-w-[60px] md:min-w-[80px]"
              >
                {sections.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {/* Selection Actions */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-black">
              <input 
                type="checkbox" 
                ref={masterCheckboxRef}
                onChange={toggleSelectAllVisible}
                className="w-4 h-4 border-1 border-black rounded-md cursor-pointer bg-white checked:bg-black checked:border-black appearance-none checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:items-center checked:after:justify-center checked:after:w-full checked:after:h-full"
              />
              <span className="hidden md:inline">Select All</span>
              <span className="md:hidden">Select</span>
            </label>
            <button 
              onClick={handleDownloadMultiple}
              disabled={selectedIds.size === 0}
              className={`flex-1 md:flex-none px-4 py-2 border-2 border-black rounded-lg text-sm font-semibold transition-all ${selectedIds.size === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300' : 'bg-black text-white md:hover:bg-white md:hover:text-black'}`}
            >
              📥 Download ({selectedIds.size})
            </button>
          </div>
        </div>
      </div>

      {/* Loading state (include prefetch gate) */}
      {loading || initialPrefetching ? (
        <div className="flex flex-col justify-center items-center py-16 gap-4">
          <div className="spinner"></div>
          <p className="text-gray-600 text-lg">Loading gallery...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-24 text-gray-600 text-xl">
          <p>No images found. Try adjusting the filters!</p>
        </div>
      ) : (
        <>
          {/* Masonry Grid */}
          <div className="masonry-grid max-w-[1400px] mx-auto">
            {displayedImages.map((img, index) => (
              <div 
                key={img.id} 
                className="masonry-item break-inside-avoid mb-3 md:mb-4 rounded-2xl overflow-hidden bg-white border-2 border-black cursor-pointer transition-all md:hover:-translate-y-1 md:hover:shadow-lg"
                style={{ animationDelay: `${(index % ITEMS_PER_PAGE) * 0.05}s` }}
                onClick={() => openLightbox(img)}
              >
                {/* Selection checkbox */}
                <div className="absolute top-2 left-2 z-10">
                  <input
                    type="checkbox"
                    checked={selectedIds.has(img.id)}
                    onChange={(e) => { e.stopPropagation(); toggleSelect(img.id); }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-5 h-5 border-1 border-black rounded-md cursor-pointer bg-white checked:bg-black checked:border-black appearance-none checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center checked:after:w-full checked:after:h-full"
                    title="Select"
                  />
                </div>
                {img.type === 'image' ? (
                  <img 
                    src={getThumbnailUrl(img.url, img.type)} 
                    alt="gallery" 
                    className="w-full block object-cover"
                    loading="lazy"
                  />
                ) : (
                  <img 
                    src={getThumbnailUrl(img.url, img.type)} 
                    alt="video thumbnail" 
                    className="w-full block object-cover"
                    loading="lazy"
                  />
                )}
                <div className="masonry-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 md:hover:opacity-100 transition-opacity pointer-events-none md:pointer-events-auto">
                  <div className="text-white">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      {img.uploadedBy?.photoURL && (
                        <img 
                          src={img.uploadedBy.photoURL} 
                          alt={img.uploadedBy.name}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      )}
                      <span className="font-semibold text-sm">{img.uploadedBy?.name || 'Anonymous'}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap mb-2.5">
                      <span className="bg-white/20 backdrop-blur-lg px-2.5 py-1 rounded-xl text-xs font-medium">Day {img.day}</span>
                      {img.year && <span className="bg-white/20 backdrop-blur-lg px-2.5 py-1 rounded-xl text-xs font-medium">{img.year}</span>}
                      <span className="bg-white/20 backdrop-blur-lg px-2.5 py-1 rounded-xl text-xs font-medium">Section {img.section}</span>
                      {img.cloudName && (
                        <span className="bg-white/20 backdrop-blur-lg px-2.5 py-1 rounded-xl text-xs font-medium">Cloud {img.cloudName}</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        className="bg-white/30 backdrop-blur-lg border border-white/50 px-3 py-2 rounded-lg text-lg cursor-pointer transition-all md:hover:bg-white/50 md:hover:scale-110 flex items-center justify-center"
                        onClick={(e) => { e.stopPropagation(); handleDownload(img); }}
                        title="Download"
                      >
                        📥
                      </button>
                      <button 
                        className="bg-white/30 backdrop-blur-lg border border-white/50 px-3 py-2 rounded-lg text-lg cursor-pointer transition-all md:hover:bg-white/50 md:hover:scale-110 flex items-center justify-center"
                        onClick={(e) => { e.stopPropagation(); handleShare(img); }}
                        title="Share"
                      >
                        🔗
                      </button>
                      {isAdmin && (
                        <button
                          className="bg-red-500/80 backdrop-blur-lg border border-white/50 px-3 py-2 rounded-lg text-lg cursor-pointer transition-all md:hover:bg-red-500 md:hover:scale-110 flex items-center justify-center disabled:opacity-60"
                          onClick={(e) => { e.stopPropagation(); handleDelete(img); }}
                          title="Delete"
                          disabled={deletingId === img.id}
                        >
                          {deletingId === img.id ? '⏳' : '🗑️'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Infinite scroll trigger */}
          {hasMore && (
            <div ref={observerTarget} className="flex flex-col justify-center items-center py-12 gap-4">
              <div className="spinner-small"></div>
              <p className="text-gray-600 text-base">Loading more...</p>
            </div>
          )}

          {/* End message */}
          {!hasMore && displayedImages.length > 0 && (
            <div className="text-center py-10 text-gray-600 text-base">
              <p>You've reached the end! 🎉</p>
            </div>
          )}
        </>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox fixed inset-0 bg-black/95 flex justify-center items-center z-[9999] p-5 overflow-auto" onClick={closeLightbox}>
          <button 
            className="absolute top-5 right-5 bg-white border-none w-12 h-12 rounded-full text-3xl cursor-pointer flex items-center justify-center transition-all z-[10001] text-gray-800 font-light leading-none md:hover:bg-[#667eea] md:hover:text-white md:hover:rotate-90" 
            onClick={closeLightbox}
          >
            ×
          </button>
          <div className="lightbox-content max-w-[95vw] max-h-[90vh] flex flex-col md:flex-row items-stretch gap-5 md:gap-6" onClick={(e) => e.stopPropagation()}>
            {selectedImage.type === 'image' ? (
              <img 
                src={selectedImage.url} 
                alt="gallery" 
                className="max-w-full md:max-w-[65vw] max-h-[70vh] md:max-h-[85vh] object-contain rounded-xl md:flex-[2]" 
              />
            ) : (
              <video 
                src={selectedImage.url} 
                controls 
                className="max-w-full md:max-w-[65vw] max-h-[70vh] md:max-h-[85vh] object-contain rounded-xl md:flex-[2]" 
                autoPlay 
              />
            )}
            <div className="bg-white p-5 rounded-xl w-full md:w-[420px] md:flex-[1] max-h-[85vh]">
              <div className="flex items-center gap-4 mb-4">
                {selectedImage.uploadedBy?.photoURL && (
                  <img 
                    src={selectedImage.uploadedBy.photoURL} 
                    alt={selectedImage.uploadedBy.name}
                    className="w-12 h-12 rounded-full border-[3px] border-black"
                  />
                )}
                <div>
                  <p className="m-0 font-semibold text-lg text-black">{selectedImage.uploadedBy?.name || 'Anonymous'}</p>
                  <p className="mt-1 mb-0 text-gray-600 text-sm">{selectedImage.uploadedBy?.email || ''}</p>
                </div>
              </div>
              <div className="flex gap-2.5 flex-wrap mb-5">
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Day: {selectedImage.day}</span>
                {selectedImage.year && <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Year: {selectedImage.year}</span>}
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Section: {selectedImage.section}</span>
                {selectedImage.cloudName && (
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Cloud: {selectedImage.cloudName}</span>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <button 
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border-2 border-black rounded-xl text-base font-semibold cursor-pointer transition-all bg-black text-white md:hover:bg-white md:hover:text-black md:hover:-translate-y-0.5 active:translate-y-0"
                  onClick={() => handleDownload(selectedImage)}
                >
                  <span className="text-xl">📥</span>
                  <span>Download</span>
                </button>
                <button 
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border-2 border-black rounded-xl text-base font-semibold cursor-pointer transition-all bg-white text-black md:hover:bg-black md:hover:text-white md:hover:-translate-y-0.5 active:translate-y-0"
                  onClick={() => handleShare(selectedImage)}
                >
                  <span className="text-xl">🔗</span>
                  <span>Share</span>
                </button>
                {isAdmin && (
                  <button
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border-2 border-red-600 rounded-xl text-base font-semibold cursor-pointer transition-all bg-red-600 text-white md:hover:bg-white md:hover:text-red-600 md:hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                    onClick={() => handleDelete(selectedImage)}
                    disabled={deletingId === selectedImage.id}
                  >
                    <span className="text-xl">{deletingId === selectedImage.id ? '⏳' : '🗑️'}</span>
                    <span>{deletingId === selectedImage.id ? 'Deleting...' : 'Delete'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
