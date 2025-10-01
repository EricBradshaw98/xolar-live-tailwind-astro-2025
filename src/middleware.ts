import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';
import { clerkClient } from '@clerk/astro/server';
import { sequence } from 'astro:middleware';

const isProtectedRoute = createRouteMatcher([
  '/installers/my-bids(.*)',
  '/admin(.*)',
]);

const isPublicRoute = createRouteMatcher([
  '/',
  '/residential(.*)',
  '/commercial(.*)',
  '/solar-panels(.*)',
  '/quote(.*)',
  '/contact(.*)',
  '/news(.*)',
  '/about(.*)',
  '/privacy-policy(.*)',
  '/terms-of-service(.*)',
  '/sitemap(.*)',
]);

const ADMIN_EMAIL = 'eric@techcreationslabs.com';

// Only apply Clerk middleware to non-public routes
const authMiddleware = clerkMiddleware(async (auth, context) => {
  const requestUrl = new URL(context.request.url);

  // Protect installer routes
  if (isProtectedRoute(context.request) && !auth().userId) {
    return auth().redirectToSignIn();
  }

  // Protect admin routes with email check
  if (requestUrl.pathname.startsWith('/admin')) {
    const authObj = auth();

    if (!authObj.userId) {
      return auth().redirectToSignIn();
    }

    try {
      // Fetch user from Clerk
      const user = await clerkClient(context).users.getUser(authObj.userId);
      const userEmail = user.emailAddresses.find(
        (email) => email.id === user.primaryEmailAddressId
      )?.emailAddress;

      console.log('Admin check - User email:', userEmail);
      console.log('Admin check - Expected:', ADMIN_EMAIL);

      if (userEmail !== ADMIN_EMAIL) {
        return new Response(
          `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Access Denied</title>
            </head>
            <body style="font-family: system-ui, -apple-system, sans-serif; padding: 2rem; max-width: 600px; margin: 0 auto; text-align: center;">
              <h1 style="color: #dc2626;">Access Denied</h1>
              <p>Only administrators can access this area.</p>
              <p>Your email: <code style="background: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 0.25rem;">${userEmail || 'Not found'}</code></p>
              <p style="margin-top: 2rem;">
                <a href="/installers/projects" style="color: #2563eb; text-decoration: none; font-weight: 500;">← Return to Projects</a>
              </p>
            </body>
          </html>
          `,
          {
            status: 403,
            headers: {
              'Content-Type': 'text/html',
            },
          }
        );
      }

      console.log('✅ Admin access granted for:', userEmail);
    } catch (error) {
      console.error('❌ Admin middleware error:', error);
      return new Response(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Authentication Error</title>
          </head>
          <body style="font-family: system-ui, -apple-system, sans-serif; padding: 2rem; max-width: 600px; margin: 0 auto; text-align: center;">
            <h1 style="color: #dc2626;">Authentication Error</h1>
            <p>There was an error verifying your access.</p>
            <p><code style="background: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 0.25rem; display: block; margin: 1rem 0; font-size: 0.875rem;">${error instanceof Error ? error.message : 'Unknown error'}</code></p>
            <p style="margin-top: 2rem;">
              <a href="/installers/login" style="color: #2563eb; text-decoration: none; font-weight: 500;">← Sign in again</a>
            </p>
          </body>
        </html>
        `,
        {
          status: 500,
          headers: { 'Content-Type': 'text/html' },
        }
      );
    }
  }
});

// Conditional middleware - only apply clerk to protected routes
export const onRequest = async (context, next) => {
  const { request } = context;

  // For public routes, skip Clerk entirely
  if (isPublicRoute(request)) {
    return next();
  }

  // For protected routes, use Clerk middleware
  return authMiddleware(context, next);
};
