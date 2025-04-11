import bcryptjs from "bcryptjs";

export const hashPass = async (password: string) => {
  return await bcryptjs.hash(password, 10);
};

export const checkPass = async (data: string, correctPassword: string) => {
  return await bcryptjs.compare(data, correctPassword);
};
