import mongoose, { Schema, Document } from 'mongoose';
import { IProject } from './project.model'; // Import the Project interface
import mongoose, { Schema, Document } from "mongoose";

// Define the Profile interface
export interface IProfile extends Document {
  profileImage: string;
  projects: mongoose.Schema.Types.ObjectId[]; // Array of references to Project model
  skills: string[];
  experience: string; // Could be a description or years of experience
  interests: string[];
  isMentor: boolean;
  description: string;
}

// Define the Profile schema
const ProfileSchema: Schema = new Schema(
  {
    profileImage: { type: String, default: '' },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project', default: [] }], // Reference to Project model
    profileImage: { type: String, default: "" },
    projects: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    experience: { type: [String], default: "" },
    interests: { type: [String], default: [] },
    isMentor: { type: Boolean, default: false },
    description: { type: String, default: '' },
    description: { type: String, default: "" },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the Profile model
export default mongoose.model<IProfile>("Profile", ProfileSchema);
