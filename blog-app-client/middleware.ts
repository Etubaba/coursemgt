import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const token = request.cookies.get("_user")?.value;

  const pathname = request.nextUrl.pathname;

  const loginPath = pathname.startsWith("/auth");
  if (pathname.includes("/admin")) {
    if (token !== "true") {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
  if (loginPath || pathname.includes("/auth")) {
    if (token === "true") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
}
export const config = {
  matcher: ["/auth", "/admin/:path*"],
};
