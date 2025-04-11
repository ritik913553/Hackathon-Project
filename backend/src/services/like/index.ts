import Like from "../../model/like.model";

// Get all likes of a specific post
export const getAllLikeOfPost = async (postId: string) => {
    try {
        const likes = await Like.find({ post: postId })
            .populate('likedBy', 'name') // Populate the user's name from the User model
            .select('likedBy'); // Select only the likedBy field

        if (!likes || likes.length === 0) {
            return {
                success: false,
                message: "No likes found for this post",
            };
        }

        return {
            success: true,
            data:likes,
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
        };
    }
};

