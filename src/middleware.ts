import { NextRequest, NextResponse } from "next/server";

import { apiConnection } from "./lib/axios";
import { USER_ENDPOINT } from "./constants/user";

const getUser = async () => {
  try {
    await apiConnection.get(USER_ENDPOINT);
    return { authorized: true };
  } catch {
    return { authorized: false };
  }
};

export const middleware = async (request: NextRequest) => {
  const unauthorizedURL = new URL("/auth", request.url);

  const authorizedURL = new URL("/task", request.url);

  const token = request.cookies.get("session-access-token")?.value;

  if (!token) {
    if (
      request.nextUrl.pathname !== "/auth" &&
      request.nextUrl.pathname !== "/auth/register"
    ) {
      return NextResponse.redirect(unauthorizedURL);
    }
    return NextResponse.next();
  }

  const response = await getUser();

  if (
    !response?.authorized &&
    request.nextUrl.pathname !== "/auth" &&
    request.nextUrl.pathname !== "/auth/register"
  ) {
    return NextResponse.redirect(unauthorizedURL);
  }

  if (response?.authorized && request.nextUrl.pathname === "/auth") {
    return NextResponse.redirect(authorizedURL);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/auth/:path*", "/task/:path*"],
};
