import type { MiddlewareNext } from 'astro';
import type { APIContext } from 'astro';
import { clerkClient } from '@clerk/astro/server';

const ADMIN_EMAIL = 'eric@techcreationslabs.com';

export async function adminMiddleware(context: APIContext, next: MiddlewareNext) {
  // Check if the route is an admin route
  if (context.url.pathname.startsWith('/admin')) {
    try {
      const auth = context.locals.auth();

      // Check if user is signed in
      if (!auth.userId) {
        return context.redirect('/installers/login?redirect=/admin');
      }

      // Fetch the full user object from Clerk
      const user = await clerkClient().users.getUser(auth.userId);
      const userEmail = user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)
        ?.emailAddress;

      console.log('Admin check - User ID:', auth.userId);
      console.log('Admin check - User email:', userEmail);
      console.log('Admin check - Expected email:', ADMIN_EMAIL);
      console.log('Admin check - Full user object:', JSON.stringify(user, null, 2));

      // Check if user's email matches admin email
      if (userEmail !== ADMIN_EMAIL) {
        // Return a more informative error page
        return new Response(
          `
          <!DOCTYPE html>
          <html>
            <head><title>Access Denied</title></head>
            <body style="font-family: system-ui; padding: 2rem; max-width: 600px; margin: 0 auto;">
              <h1>Access Denied</h1>
              <p>Only administrators can access this area.</p>
              <p>Your email: <code>${userEmail || 'Not found'}</code></p>
              <p>User ID: <code>${auth.userId}</code></p>
              <p><a href="/installers/projects">Return to Projects</a></p>
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

      console.log('Admin access granted for:', userEmail);
    } catch (error) {
      console.error('Admin middleware error:', error);
      return new Response(
        `
        <!DOCTYPE html>
        <html>
          <head><title>Authentication Error</title></head>
          <body style="font-family: system-ui; padding: 2rem; max-width: 600px; margin: 0 auto;">
            <h1>Authentication Error</h1>
            <p>There was an error verifying your access.</p>
            <p>Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
            <p><a href="/installers/login">Sign in again</a></p>
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

  return next();
}
