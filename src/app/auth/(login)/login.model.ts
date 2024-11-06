"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginRequest } from "./login.types";
import { SessionUserSchema } from "./login.schema";
import { useForm } from "react-hook-form";
import { sessionUser } from "./login.services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useLoginModel = () => {
  const { replace } = useRouter();

  const loginForm = useForm<LoginRequest>({
    resolver: zodResolver(SessionUserSchema),
  });

  const handleLogin = loginForm.handleSubmit(async (credentials) => {
    const result = await sessionUser(credentials);

    if (result.success) {
      replace("/task");
      toast.success(result.body);
    } else {
      toast.error(result.error);
    }
  });

  return { loginForm, handleLogin };
};
