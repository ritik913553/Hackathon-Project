import User from "../../model/user.model";
import z from "zod";
import { registerValidation } from "../../validations/user";
import { hashPass } from "../../lib";

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
      data: user,
    };
  } catch (error) {
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export const createUser = async (data: z.infer<typeof registerValidation>) => {
  try {
    const user = await User.create({
      email: data.email,
      name: data.name,
      password: hashPass(data.password),
    });

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "failed to create user",
    };
  }
};
