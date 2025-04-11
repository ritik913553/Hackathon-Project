import mongoose, { Schema, Document } from 'mongoose';

// Define the Chat interface
export interface IChat extends Document {
  participants: mongoose.Schema.Types.ObjectId[]; // Array of User IDs
  messages: mongoose.Schema.Types.ObjectId[]; // Array of Message IDs
}

// Define the Chat schema
const ChatSchema: Schema = new Schema(
  {
    participants: [
      { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
    ],
    messages: [
      { type: Schema.Types.ObjectId, ref: 'Message', required: true }, // Reference to Message model
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the Chat model
export default mongoose.model<IChat>('Chat', ChatSchema);