"use server";

import { USER_ENDPOINT, USER_MESSAGES } from "@/constants/user";
import { apiConnection } from "@/lib/axios";
import { RegisterRequest, RegisterResponse } from "./register.types";
import { HttpResponse } from "@/types/http";

const registerUser = async (
  credentials: RegisterRequest,
): Promise<HttpResponse<string>> => {
  try {
    await apiConnection.post<RegisterResponse>(USER_ENDPOINT, credentials);

    return {
      success: true,
      body: USER_MESSAGES.SIGNUP_SUCCESS,
    };
  } catch {
    return {
      success: false,
      error: USER_MESSAGES.SIGNUP_ERROR,
    };
  }
};

export { registerUser };
