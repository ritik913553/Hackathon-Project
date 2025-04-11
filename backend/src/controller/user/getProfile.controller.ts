import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import { getUserProfile } from "../../services/profile";

async function getProfile(req: Request, res: Response, next: NextFunction) {
    const userId = req.user?._id;

    
  if (!userId) {
    // If user is not authenticated
    throw new ApiResponse(401, "Unauthorized: No user found in request");
  }

  const result = await getUserProfile(userId);

  if (!result.success) {
    // If profile not found or other issue
    throw new ApiError(404, result.message);
  }

  // If successful, return structured response
  return res
    .status(200)
    .json(new ApiResponse(200, result.data, "Profile fetched successfully"));
}

const getProfileController = asyncHandler(getProfile);
export default getProfileController;