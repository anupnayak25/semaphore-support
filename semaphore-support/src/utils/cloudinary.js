import axios from 'axios';

// Configure these via environment variables in Vite
export const CLOUDINARY_CLOUD_1 = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '';
export const CLOUDINARY_CLOUD_2 = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME2 || '';
export const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '';

// Upload to a specific Cloudinary cloud; resource_type auto detects image vs video
export const uploadToCloudinary = async (file, folder, cloudName = CLOUDINARY_CLOUD_1) => {
  const cloud = cloudName || CLOUDINARY_CLOUD_1;
  const url = `https://api.cloudinary.com/v1_1/${cloud}/auto/upload`;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);
  if (folder) formData.append('folder', folder);
  try {
    const response = await axios.post(url, formData);
    // Return full response so caller can get public_id, resource_type, etc.
    return response.data;
  } catch (e) {
    console.error('Cloudinary upload failed', e);
    throw e;
  }
};
