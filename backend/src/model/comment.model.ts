import mongoose, { Schema, Document } from 'mongoose';

// Define the Comment interface
export interface IComment extends Document {
  description: string;
  likes: number;
  userId: mongoose.Schema.Types.ObjectId; // Reference to the User model
  postId: mongoose.Schema.Types.ObjectId; // Reference to the Post model
}

// Define the Comment schema
const CommentSchema: Schema = new Schema(
  {
    description: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true }, // Reference to the Post model
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the Comment model
export default mongoose.model<IComment>('Comment', CommentSchema);