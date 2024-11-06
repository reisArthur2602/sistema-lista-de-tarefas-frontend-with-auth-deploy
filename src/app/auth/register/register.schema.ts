import { z } from "zod";
import { USER_SCHEMA_MESSAGES } from "@/constants/user";

export const RegisterUserSchema = z.object({
  email: z
    .string()
    .min(1, { message: USER_SCHEMA_MESSAGES.EMAIL_REQUIRED })
    .email({ message: USER_SCHEMA_MESSAGES.EMAIL_INVALID })
    .trim(),
  password: z.string().min(6, {
    message: USER_SCHEMA_MESSAGES.PASSWORD_MIN_LENGTH,
  }),
});
