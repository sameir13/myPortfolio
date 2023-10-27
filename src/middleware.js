import { NextResponse } from "next/server";
import { JWTVerify } from "@/helper/jwt";

export async function middleware(req, res) {
  var AccessToken =
    req.cookies.get("AccessToken")?.value &&
    (await JWTVerify(req.cookies.get("AccessToken")?.value));

  var pathname = req.nextUrl.pathname;

  var publicRoutes = ["/login"];

  if (!AccessToken && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (AccessToken && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
}

export const config = {
  matcher: ["/login", "/dashboard", "/dashboard/:path*"],
};
