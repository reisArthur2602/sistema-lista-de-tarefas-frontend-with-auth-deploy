"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { RegisterRequest } from "./register.types";
import { RegisterUserSchema } from "./register.schema";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { registerUser } from "./register.services";

export const useRegisterModel = () => {
  const { replace } = useRouter();
  const registerForm = useForm<RegisterRequest>({
    resolver: zodResolver(RegisterUserSchema),
  });

  const handleRegister = registerForm.handleSubmit(async (credentials) => {
    const result = await registerUser(credentials);

    if (result.success) {
      toast.success(result.body);
      replace("/auth");
    } else {
      toast.error(result.error);
    }
  });

  return { registerForm, handleRegister };
};
