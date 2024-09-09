import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ['/'], // Add any additional public routes here
});

export const config = {
  matcher: [
    // Skip Next.js internals and static assets
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:js|css|json|jpg|jpeg|png|gif|svg|ico|txt|woff|woff2|ttf|eot|otf)).*)',
    // Always run middleware for API routes
    '/api/(.*)',
  ],
};
