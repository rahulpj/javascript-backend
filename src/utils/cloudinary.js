import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    console.log("from cloudinary", localFilePath);
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been successfully uploaded
    fs.unlinkSync(localFilePath);
    console.log("file is uploaded", response.url);
    return response;
  } catch (error) {
    console.log("error occurred in cloudinary", error);
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
