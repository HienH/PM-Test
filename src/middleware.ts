import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { DEFAULT_LOCALE } from "./config/localization";
import { routing } from "./i18n/routing";

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LOCALE}/personal`, req.url)
    );
  }

  return createMiddleware(routing)(req);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|flags/|images/|stock/|account/|fonts/|.*\\..*).+)",
  ],
};
