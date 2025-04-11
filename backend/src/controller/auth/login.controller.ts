import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";

async function login(req: Request, res: Response, next: NextFunction) {
    
}

const loginController = asyncHandler(login);
export default loginController;
