import mongoose, { Schema, Document } from 'mongoose';

// Define the Profile interface
export interface IProfile extends Document {
  profileImage: string;
  projects: string[]; // Array of project IDs or names
  skills: string[];
  experience: string; // Could be a description or years of experience
  interests: string[];
  isMentor: boolean;
  description: string;
  likesInComments: number;
  likesInPosts: number;
  likesInProjects: number;
}

// Define the Profile schema
const ProfileSchema: Schema = new Schema(
  {
    profileImage: { type: String, default: '' },
    projects: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    experience: { type: String, default: '' },
    interests: { type: [String], default: [] },
    isMentor: { type: Boolean, default: false },
    description: { type: String, default: '' },
    likesInComments: { type: Number, default: 0 },
    likesInPosts: { type: Number, default: 0 },
    likesInProjects: { type: Number, default: 0 },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the Profile model
export default mongoose.model<IProfile>('Profile', ProfileSchema);