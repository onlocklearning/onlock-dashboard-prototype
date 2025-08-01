import { auth } from "./lib/auth"

export default auth((req) => {
  // Add any additional middleware logic here if needed
  const isLoggedIn = !!req.auth
  
  // Protect routes
  if (!isLoggedIn) {
    return Response.redirect(new URL("/auth/signin", req.url))
  }
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/lesson/:path*",
    // Add other protected routes here
  ]
} 