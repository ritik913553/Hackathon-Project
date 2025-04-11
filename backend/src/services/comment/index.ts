import Comment from '../../model/comment.model';

// Get all comments of a specific post with user details
export const getAllCommentOfPost = async (postId: string) => {
    try {
        const comments = await Comment.find({ postId })
            .populate('userId', 'name') // Populate the user's name from the User model
            .select('description likes'); // Select only the description and likes fields

        if (!comments || comments.length === 0) {
            return {
                success: false,
                message: "No comments found for this post",
            };
        }

        return {
            success: true,
            data: comments,
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
        };
    }
};