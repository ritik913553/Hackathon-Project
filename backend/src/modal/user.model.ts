import mongoose, { Schema, Document } from 'mongoose';

// Define the User interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  profileImage: string;
  likesInComments: number;
  likesInPosts: number;
  likesInProjects: number;
}

// Define the User schema
const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String, default: '' },
    likesInComments: { type: Number, default: 0 },
    likesInPosts: { type: Number, default: 0 },
    likesInProjects: { type: Number, default: 0 },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the User model
export default mongoose.model<IUser>('User', UserSchema);