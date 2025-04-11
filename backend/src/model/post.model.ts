import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
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
    { timestamps: true }
);

 const Post = mongoose.model("Post", postSchema);
export default Post;