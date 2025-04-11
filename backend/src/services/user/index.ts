import User from "../../model/user.model";
export const getUserByEmail = async (email: string) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return {
                success: false,
                message: "User not found",
            };
        }
        return {
            success: true,
            user,
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
        };
    }
};
