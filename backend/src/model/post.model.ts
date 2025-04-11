import mongoose, { Schema, Document, Model } from "mongoose";

// Define the Post interface
export interface IPost extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    title: string;
    media: {
        url: string;
        type: "image" | "video";
    }[];
    postDescription: string;
    tags: string[];
    isMentorPost: boolean;
    comments: mongoose.Schema.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the Post schema
const postSchema: Schema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        media: [
            {
                url: {
                    type: String, // URL or path to the media file
                    required: true,
                },
                type: {
                    type: String, // Type of media: "image" or "video"
                    enum: ["image", "video"],
                    required: true,
                },
            },
        ],
        postDescription: {
            type: String,
            required: true,
        },
        tags: {
            type: [String], // Tags for skills, technologies, or goals
            default: [],
        },
        isMentorPost: {
            type: Boolean, // True if the post is from a mentor
            default: false,
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment", // Reference to the Comment schema
            },
        ],
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Export the Post model
const Post: Model<IPost> = mongoose.model<IPost>("Post", postSchema);
export default Post;