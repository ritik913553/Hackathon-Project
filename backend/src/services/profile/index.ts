import Profile from '../../model/profile.model';

// Get user profile by userId
export const getUserProfile = async (userId:String) => {
    try {
        const profile = await Profile.findOne({ _id: userId });
        if (!profile) {
            return {
                success: false,
                message: "Profile not found",
            };
        }
        return {
            success: true,
            profile,
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
        };
    }
};