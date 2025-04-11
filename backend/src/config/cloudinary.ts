import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configure Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Define the return type from Cloudinary (simplified version)
interface CloudinaryUploadResult {
  url: string;
  secure_url: string;
  public_id: string;
  [key: string]: any; // Allow other properties returned by Cloudinary
}

const uploadOnCloudinary = async (localFilePath: string): Promise<CloudinaryUploadResult | null> => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // Remove the local file after successful upload
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // If upload fails, remove the local file to clean up
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export default uploadOnCloudinary ;


