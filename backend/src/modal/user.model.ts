import mongoose, { Schema, Document } from 'mongoose';

// Define the User interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isVerified:boolean
 
}

// Define the User schema
const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified:{type:Boolean,default:false}
    
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the User model
export default mongoose.model<IUser>('User', UserSchema);