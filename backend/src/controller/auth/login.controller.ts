import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import { loginValidation } from "../../validations/user";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "../../services/user";
import { checkPass } from "../../lib";
import ApiResponse from "../../utils/ApiResponse";

async function login(req: Request, res: Response, next: NextFunction) {
  const reqData = req.body;

  const { success, data, error } = loginValidation.safeParse(reqData);

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

  if (!result.success) {
    res.status(403).json(new ApiResponse(403,{}, "User does not exist"));
    return;
  }

  const isValidPass = await checkPass(
    data.password,
    result.data?.password || ""
  );

  if (!isValidPass) {
    res.status(403).json(new ApiResponse(403,{}, "Invalid Password"));
    return;
  }

  const userData = result.data;

  const payload = {
    id: userData?._id,
    name: userData?.name,
    email: userData?.email,
  };

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    res.status(403).json(new ApiResponse(403,{}, "Invalid Jwt secret"));
    return;
  }

  const token = jwt.sign(payload, secret);

  res.status(200).json(
    new ApiResponse(200, {
      token,
    })
  );
}

const loginController = asyncHandler(login);
export default loginController;
