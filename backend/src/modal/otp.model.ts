import mongoose, { Schema, Document } from 'mongoose';

// Define the OTP interface
export interface IOTP extends Document {
  code: string;
  expiry: Date;
  userId: mongoose.Schema.Types.ObjectId; // Reference to the User model
}

// Define the OTP schema
const OTPSchema: Schema = new Schema(
  {
    code: { type: String, required: true },
    expiry: { type: Date, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the OTP model
export default mongoose.model<IOTP>('OTP', OTPSchema);