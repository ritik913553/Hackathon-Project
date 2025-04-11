import mongoose, { Schema, Document } from 'mongoose';

// Define the Project interface
export interface IProject extends Document {
  title: string;
  description: string;
  techSkills: string[]; // Array of technologies used in the project
  links: string[]; // Array of links (e.g., GitHub, live demo)
}

// Define the Project schema
const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techSkills: { type: [String], default: [] }, // Array of tech skills
    links: { type: [String], default: [] }, // Array of links
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the Project model
export default mongoose.model<IProject>('Project', ProjectSchema);