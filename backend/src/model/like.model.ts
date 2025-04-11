import mongoose, { Schema, Document, Model } from "mongoose";

// Define the Like interface
export interface ILike extends Document {
    post?: mongoose.Schema.Types.ObjectId; // Reference to the Post model
    comment?: mongoose.Schema.Types.ObjectId; // Reference to the Comment model
    likedBy: mongoose.Schema.Types.ObjectId; // Reference to the User model
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the Like schema
const likeSchema: Schema = new Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
        comment: {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        },
        likedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Export the Like model
const Like: Model<ILike> = mongoose.model<ILike>("Like", likeSchema);
export default Like;