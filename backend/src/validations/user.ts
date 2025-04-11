import z from "zod";

export const loginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(3, "minimum 3").max(20, "maximum 20"),
});

export const registerValidation = z
  .object({
    name: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(16),
    confirmPass: z.string().min(16),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Passwords do not match",
    path: ["confirmPass"], // This will point to the confirmPass field in case of an error
  });
