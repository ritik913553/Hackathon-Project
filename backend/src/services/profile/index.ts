import { z } from "zod";
import Profile from "../../model/profile.model";
import { profileValidation } from "../../validations/user";
import { getUserByEmail, getUserById } from "../user";

// Get user profile by userId
export const getUserProfile = async (userId: string) => {
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
      data: profile,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export const updateUserProfile = async (
  userId: string,
  data: z.infer<typeof profileValidation>
) => {
  try {
    const { success, data, message } = await getUserById(userId);

    if (!success) {
      return {
        success,
        message,
      };
    }

    

  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Internal server error",
    };
  }
};
