import multer, { StorageEngine } from "multer";
import path from "path";

// Define the absolute path to the temp folder
const tempDir = path.join(__dirname, "../../public/temp");

// Define the disk storage engine
const storage: StorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir); // Save to the correct temp folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep original file name
  },
});

// Create and export the multer upload middleware
export const upload = multer({ storage });