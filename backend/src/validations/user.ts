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

export const profileValidation = z.object({
  description: z.string().min(10),
  projects: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      skills: z.string(),
      links: z.array(z.string()),
    })
  ),
  skills: z.array(z.string()),
  interests: z.array(z.string()),
});
