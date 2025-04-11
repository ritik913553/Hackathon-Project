import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import { updateUserProfile } from "../../services/profile";

async function updateProfile(req: Request, res: Response, next: NextFunction) {
  const userId = req.user?._id;

  if (!userId) {
    // If user is not authenticated
    throw new ApiError(401, "Unauthorized: No user found in request");
  }

  const profileData = req.body;

  const result = await updateUserProfile(userId, profileData);

  if (!result?.success) {
    // If update failed
    throw new ApiResponse(400,{}, result?.message);
  }

  // If successful, return structured response
  return res
    .status(200)
    .json(new ApiResponse(200, result?.data, "Profile updated successfully"));
}

const updateProfileController = asyncHandler(updateProfile);
export default updateProfileController;