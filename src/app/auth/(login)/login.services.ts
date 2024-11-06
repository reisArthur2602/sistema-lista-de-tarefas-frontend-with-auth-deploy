"use server";

import { HttpResponse } from "@/types/http";
import { LoginRequest, LoginResponse } from "./login.types";
import { apiConnection } from "@/lib/axios";
import { USER_ENDPOINT, USER_MESSAGES } from "@/constants/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const deleteSessionUser = () => {
  cookies().delete("session-access-token");
  redirect("/auth");
};

const sessionUser = async (
  credentials: LoginRequest,
): Promise<HttpResponse<string>> => {
  try {
    const { data } = await apiConnection.post<LoginResponse>(
      USER_ENDPOINT + "/session",
      credentials,
    );

    const month = 24 * 60 * 60 * 1000 * 30;

    const configCookie = {
      maxAge: month,
      httpOnly: false,
      path: "/",
      secure: false,
    };

    cookies().set("session-access-token", data.accessToken, configCookie);

    return {
      success: true,
      body: USER_MESSAGES.LOGIN_SUCCESS,
    };
  } catch {
    return {
      success: false,
      error: USER_MESSAGES.LOGIN_ERROR,
    };
  }
};

export { sessionUser, deleteSessionUser };
