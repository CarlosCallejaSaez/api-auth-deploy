const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

const initializeCloudinary = () => {
  
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'mobile-store-api',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
  }
});

const uploadImageToCloudinary = multer({ storage });

const deleteImageFromCloudinary = async (imgUrl) => {
  try {
    const imgSplitted = imgUrl.split('/');
    const nameSplitted = imgSplitted[imgSplitted.length - 1].split('.');
    const folderSplitted = imgSplitted[imgSplitted.length - 2];
    const public_id = `${folderSplitted}/${nameSplitted[0]}`;

    await cloudinary.uploader.destroy(public_id);
    console.log('Image deleted');
  } catch (error) {
    console.error('Error deleting image from Cloudinary:', error.message);
    throw new Error('Error deleting image from Cloudinary');
  }
};

module.exports = {
  initializeCloudinary,
  uploadImageToCloudinary,
  deleteImageFromCloudinary
};
