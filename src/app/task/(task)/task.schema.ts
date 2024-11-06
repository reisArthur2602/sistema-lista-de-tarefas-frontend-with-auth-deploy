import { TASK_SCHEMA_MESSAGES } from "@/constants/task";
import { z } from "zod";

export const CreateTaskSchema = z.object({
  name: z
    .string()
    .min(3, { message: TASK_SCHEMA_MESSAGES.NAME_MIN_LENGTH })
    .toLowerCase()
    .trim(),
  cost: z.coerce
    .number()
    .positive({ message: TASK_SCHEMA_MESSAGES.COST_POSITIVE }),
  limitDate: z
    .string()
    .min(1, {
      message: TASK_SCHEMA_MESSAGES.LIMIT_DATE_REQUIRED,
    })
    .transform((date) => new Date(date)),
});

export const EditTaskSchema = z.object({
  name: z
    .string()
    .min(3, { message: TASK_SCHEMA_MESSAGES.NAME_MIN_LENGTH })
    .toLowerCase()
    .trim(),
  cost: z.coerce
    .number()
    .positive({ message: TASK_SCHEMA_MESSAGES.COST_POSITIVE }),
  limitDate: z
    .string()
    .min(1, {
      message: TASK_SCHEMA_MESSAGES.LIMIT_DATE_REQUIRED,
    })
    .transform((date) => new Date(date)),
});
