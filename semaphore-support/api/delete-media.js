import { v2 as cloudinary } from 'cloudinary';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

async function parseBody(req) {
  if (req.body) return req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  try {
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // AuthN: Verify Firebase ID token
    const authHeader = req.headers?.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!token) {
      return res.status(401).json({ error: 'Missing auth token' });
    }

    // Initialize Firebase Admin using service account from env
    if (!getApps().length) {
      const saJson = process.env.FIREBASE_SERVICE_ACCOUNT || (process.env.FIREBASE_SERVICE_ACCOUNT_BASE64 ? Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64').toString('utf8') : null);
      if (!saJson) {
        return res.status(500).json({ error: 'Server auth not configured' });
      }
      const serviceAccount = JSON.parse(saJson);
      initializeApp({ credential: cert(serviceAccount) });
    }

    const decoded = await getAuth().verifyIdToken(token);
    const email = decoded?.email || '';
    const allowedEmails = (process.env.ALLOWED_DELETE_EMAILS || 'mrnayak27@gmail.com,nnm24mc014@nmamit.in,nnm24mc015@nmamit.in')
      .split(',')
      .map(e => e.trim().toLowerCase())
      .filter(Boolean);

    if (!email || !allowedEmails.includes(email.toLowerCase())) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const body = await parseBody(req);
    const { public_id, resource_type = 'image', cloudName } = body || {};

    if (!public_id || !cloudName) {
      return res.status(400).json({ error: 'public_id and cloudName are required' });
    }

    // Choose proper credentials for the specified cloud
    let apiKey = process.env.CLOUDINARY_API_KEY;
    let apiSecret = process.env.CLOUDINARY_API_SECRET;
    const cloud1 = process.env.CLOUDINARY_CLOUD_NAME || process.env.VITE_CLOUDINARY_CLOUD_NAME;
    const cloud2 = process.env.CLOUDINARY_CLOUD_NAME2 || process.env.VITE_CLOUDINARY_CLOUD_NAME2;

    if (cloud2 && cloudName === cloud2) {
      apiKey = process.env.CLOUDINARY_API_KEY2 || apiKey;
      apiSecret = process.env.CLOUDINARY_API_SECRET2 || apiSecret;
    } else if (cloud1 && cloudName === cloud1) {
      apiKey = process.env.CLOUDINARY_API_KEY || apiKey;
      apiSecret = process.env.CLOUDINARY_API_SECRET || apiSecret;
    }

    if (!apiKey || !apiSecret) {
      return res.status(500).json({ error: 'Cloudinary API credentials missing on server' });
    }

    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
    });

    const result = await cloudinary.uploader.destroy(public_id, { resource_type });
    return res.status(200).json({ result });
  } catch (err) {
    console.error('Cloudinary delete error:', err);
    return res.status(500).json({ error: 'Failed to delete media' });
  }
}
