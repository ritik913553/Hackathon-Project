import Post from "../../model/post.model";
import mongoose from "mongoose";

// Get all posts
export const getAllPosts = async () => {
    try {
        const posts = await Post.find();
        return {
            success: true,
            posts,
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
        };
    }
};

// Get a post by its ID
export const getPostById = async (postId: string) => {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return {
                success: false,
                message: "Post not found",
            };
        }
        return {
            success: true,
            post,
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
        };
    }
};

// Get all posts of a specific user
export const getAllPostsOfUser = async (userId: string) => {
    try {
        const posts = await Post.find({ userId });
        if (!posts || posts.length === 0) {
            return {
                success: false,
                message: "No posts found for this user",
            };
        }
        return {
            success: true,
            posts,
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
        };
    }
};

