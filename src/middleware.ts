import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("PSI@T")?.value;
  const loginUrl = new URL("/auth/login", request.url);

  const pathname = request.nextUrl.pathname;
  const isLoginPage = pathname.startsWith("/auth/login");

  if (token) {
    if (isLoginPage) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }
  return NextResponse.redirect(loginUrl);
}
export const config = {
  matcher: [
    "/dashboard",
    "/onboarding",
    "/dashboard/:path*",
    "/onboarding/:path*",
    "/(private)/:path*",
    "/((?!_next/static|favicon.ico|login|).*)",
  ],
};
