import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

// Define routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/installers/projects(.*)',
  '/installers/project/(.*)',
]);

export const onRequest = clerkMiddleware((auth, context) => {
  // Protect routes that match the matcher
  if (isProtectedRoute(context.request)) {
    auth().protect();
  }
});