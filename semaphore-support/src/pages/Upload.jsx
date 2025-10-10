import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { uploadToCloudinary, CLOUDINARY_CLOUD_1, CLOUDINARY_CLOUD_2 } from '../utils/cloudinary';
import { db } from '../context/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';
import './Upload.css';

const days = ['All', '1st', '2nd'];
const years = ['All', '1st year', '2nd year'];
const sections = ['All', 'a', 'b', 'c', 'mixed'];

const Upload = () => {
  const { user, login, logout } = useAuth();
  const [files, setFiles] = useState([]);
  const [day, setDay] = useState('All');
  const [year, setYear] = useState('All');
  const [section, setSection] = useState('All');
  // Cloud selection removed; uploads auto-distribute between available clouds
  const [uploading, setUploading] = useState(false);

  const handleFilesChange = (e) => {
    const selectedFiles = [...e.target.files];
    setFiles(selectedFiles);
    if (selectedFiles.length > 0) {
      toast.success(`${selectedFiles.length} file(s) selected!`);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please login first.');
      return;
    }
    if (!files.length) {
      toast.error('Please select files to upload.');
      return;
    }

    setUploading(true);
    const uploadPromise = new Promise(async (resolve, reject) => {
      try {
        const urls = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          toast.loading(`Uploading ${i + 1} of ${files.length}...`, { id: 'upload-progress' });
          
          const folder = import.meta.env.VITE_CLOUDINARY_FOLDER || 'semaphore-gallery';
          // Auto-distribute: alternate between Cloud 1 and Cloud 2; fallback to whichever is defined
          const targetCloud = (i % 2 === 0)
            ? (CLOUDINARY_CLOUD_1 || CLOUDINARY_CLOUD_2)
            : (CLOUDINARY_CLOUD_2 || CLOUDINARY_CLOUD_1);

          const uploadRes = await uploadToCloudinary(file, folder, targetCloud);
          const url = uploadRes.secure_url;
          const publicId = uploadRes.public_id;
          const resourceType = uploadRes.resource_type; // image or video
          const originalFilename = uploadRes.original_filename;
          urls.push(url);
          
          await addDoc(collection(db, 'gallery'), {
            url,
            type: resourceType === 'video' || file.type.startsWith('video') ? 'video' : 'image',
            day,
            year,
            section,
            cloudName: targetCloud,
            cloudinary: {
              public_id: publicId,
              resource_type: resourceType,
              original_filename: originalFilename,
            },
            uploadedBy: {
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              uid: user.uid,
            },
            createdAt: Timestamp.now(),
          });
        }
        
        toast.dismiss('upload-progress');
        setFiles([]);
        // Reset file input
        const fileInput = document.getElementById('file-input');
        if (fileInput) fileInput.value = '';
        resolve();
      } catch (err) {
        console.error('Upload error:', err);
        toast.dismiss('upload-progress');
        reject(err);
      }
    });

    toast.promise(uploadPromise, {
      loading: 'Uploading...',
      success: `Successfully uploaded ${files.length} file(s)!`,
      error: 'Upload failed. Please try again.',
    });

    try {
      await uploadPromise;
    } catch (err) {
      // Error already handled by toast
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white p-6 md:p-10 border-[3px] border-black rounded-2xl shadow-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 text-center">Upload Images/Videos</h2>
        
        {!user ? (
          <div className="text-center py-8">
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">Authentication Required</h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">Please sign in with Google to upload images and videos</p>
            <button 
              onClick={login} 
              className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-black rounded-xl font-semibold text-base transition-all hover:bg-black hover:text-white hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.8789 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4"/>
                <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9465L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z" fill="#34A853"/>
                <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05"/>
                <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335"/>
              </svg>
              Sign in with Google
            </button>
          </div>
        ) : (
          <>
            {/* <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 mb-6">
              <img src={user.photoURL} alt="profile" className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black" />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-black text-sm md:text-base truncate">{user.displayName}</div>
                <div className="text-gray-600 text-xs md:text-sm truncate">{user.email}</div>
              </div>
              <button 
                onClick={logout} 
                className="px-4 py-2 bg-black text-white rounded-lg font-medium text-sm transition-all hover:bg-gray-800 active:scale-95"
              >
                Logout
              </button>
            </div> */}

            <form onSubmit={handleUpload} className="space-y-6">
              <div className="relative">
                <input 
                  type="file" 
                  id="file-input"
                  multiple 
                  accept="image/*,video/*" 
                  onChange={handleFilesChange}
                  className="hidden"
                />
                <label 
                  htmlFor="file-input" 
                  className="flex flex-col items-center justify-center p-8 md:p-12 border-[3px] border-dashed border-black rounded-2xl cursor-pointer transition-all hover:bg-gray-50 hover:border-gray-600 bg-white"
                >
                  <span className="text-5xl mb-4">📁</span>
                  <span className="text-base md:text-lg font-semibold text-black mb-2">
                    {files.length > 0 
                      ? `${files.length} file(s) selected` 
                      : 'Choose Files or Drag & Drop'}
                  </span>
                  <span className="text-xs md:text-sm text-gray-500">Images and Videos supported</span>
                </label>
              </div>

              {files.length > 0 && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                  <div className="font-semibold text-green-800 mb-2 text-sm md:text-base">Selected Files:</div>
                  <ul className="space-y-1.5 text-sm text-green-700 max-h-40 overflow-y-auto">
                    {Array.from(files).map((file, idx) => (
                      <li key={idx} className="truncate">✓ {file.name}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-black text-sm">Day:</label>
                  <select 
                    value={day} 
                    onChange={e => setDay(e.target.value)}
                    className="px-3 py-2.5 border-2 border-black rounded-lg text-sm font-medium cursor-pointer transition-all bg-white hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/20"
                  >
                    {days.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-black text-sm">Year:</label>
                  <select 
                    value={year} 
                    onChange={e => setYear(e.target.value)}
                    className="px-3 py-2.5 border-2 border-black rounded-lg text-sm font-medium cursor-pointer transition-all bg-white hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/20"
                  >
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-black text-sm">Section:</label>
                  <select 
                    value={section} 
                    onChange={e => setSection(e.target.value)}
                    className="px-3 py-2.5 border-2 border-black rounded-lg text-sm font-medium cursor-pointer transition-all bg-white hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/20"
                  >
                    {sections.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={uploading || files.length === 0}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-black text-white rounded-xl font-bold text-base md:text-lg transition-all hover:bg-gray-800 hover:-translate-y-0.5 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none active:translate-y-0"
              >
                {uploading && <span className="uploading-spinner"></span>}
                {uploading ? 'Uploading...' : 'Upload Files'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Upload;
