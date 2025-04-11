import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import { registerValidation } from "../../validations/user";
import { createUser, getUserByEmail } from "../../services/user";
import ApiResponse from "../../utils/ApiResponse";

async function register(req: Request, res: Response, next: NextFunction) {
  const reqData = req.body;

  const { success, data, error } = registerValidation.safeParse(reqData);

  if (!success) {
    res.status(403).json(
      new ApiResponse(
        403,
        error.issues.map((issue) => {
          return {
            path: issue.path[0],
            message: issue.message,
          };
        })
      )
    );
    return;
  }

  const result = await getUserByEmail(data.email);

  if (result.success) {
    res.status(401).json(new ApiResponse(403, "User already exists"));
    return;
  }

  const finalResult = await createUser(data);

  if (!finalResult.success) {
    res.status(403).json(new ApiResponse(403, finalResult.message));
    return;
  }

  res
    .status(201)
    .json(new ApiResponse(201, finalResult.data, "User created successfully"));
}

const registerController = asyncHandler(register);
export default registerController;
