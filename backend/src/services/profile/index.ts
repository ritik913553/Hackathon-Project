import { z } from "zod";
import Profile from "../../model/profile.model";
import { profileValidation } from "../../validations/user";

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
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export const createProfile = async (data: z.infer<typeof profileValidation>) => {
  try {
    const profile = await Profile.create({
        
    })
  } catch (error) {

  }
};
