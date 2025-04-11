import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";
import User from "../model/user.model";

// Extend Express Request to include `user`
declare module "express" {
  interface Request {
    user?: any; // You can replace `any` with a proper `IUser` interface if defined
  }
}

interface DecodedToken extends JwtPayload {
  _id: string;
}

// JWT verification middleware
const authMiddleware = asyncHandler(
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      // Extract token from cookies or Authorization header
      const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

      if (!token) {
        throw new ApiError(401, "Unauthorized request");
      }

      // Verify token
      const decodedToken = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as string
      ) as DecodedToken;

      // Find the user from token payload
      const user = await User.findById(decodedToken?._id).select(
        "-password -refreshToken"
      );

      if (!user) {
        throw new ApiError(401, "Invalid Access Token");
      }

      // Attach user to request
      req.user = user;

      next();
    } catch (error: any) {
      throw new ApiError(401, error?.message || "Invalid Access Token");
    }
  }
);

export default authMiddleware;
