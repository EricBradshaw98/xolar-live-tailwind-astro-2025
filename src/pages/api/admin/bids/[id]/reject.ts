import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Initialize Resend with API key from environment
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const { id } = params;

    if (!id) {
      return new Response(JSON.stringify({ error: 'Bid ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Parse request body for additional data
    const body = await request.json();
    const { installerEmail, installerName, projectTitle, bidAmount, reason } = body;

    // TODO: Update bid status in database
    // In production, you would:
    // 1. Update the bid status to 'Rejected' in your database
    // 2. Optionally store the rejection reason
    // 3. Update related analytics/metrics

    // Send rejection email to installer using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'Xolar <noreply@xolar.ca>',
        to: [installerEmail],
        subject: `Update on your bid - ${projectTitle}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Bid Status Update</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 28px;">Bid Status Update</h1>
              </div>

              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                <p style="font-size: 16px; margin-bottom: 20px;">Dear ${installerName},</p>

                <p style="font-size: 16px; margin-bottom: 20px;">
                  Thank you for submitting your bid for the following project:
                </p>

                <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin-bottom: 25px;">
                  <h2 style="margin: 0 0 15px 0; color: #667eea; font-size: 20px;">${projectTitle}</h2>
                  <p style="margin: 5px 0; font-size: 15px;"><strong>Your Bid Amount:</strong> ${bidAmount}</p>
                  <p style="margin: 5px 0; font-size: 15px;"><strong>Bid ID:</strong> #${id}</p>
                </div>

                <p style="font-size: 16px; margin-bottom: 20px;">
                  After careful consideration, the project owner has decided to move forward with another installer for this project.
                </p>

                ${
                  reason
                    ? `
                <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3; margin-bottom: 25px;">
                  <p style="margin: 0; font-size: 14px; color: #1565c0;">
                    <strong>Feedback:</strong><br>
                    ${reason}
                  </p>
                </div>
                `
                    : ''
                }

                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin-bottom: 25px;">
                  <p style="margin: 0; font-size: 14px; color: #0c4a6e;">
                    <strong>Don't be discouraged!</strong><br>
                    We appreciate your interest and encourage you to continue bidding on other projects. Each project has unique requirements, and we're confident you'll find the perfect match.
                  </p>
                </div>

                <p style="font-size: 16px; margin-bottom: 20px;">
                  Browse more available projects and continue growing your business with Xolar.
                </p>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://xolar.ca/installers/projects"
                     style="background: #667eea; color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold; font-size: 16px;">
                    View Available Projects
                  </a>
                </div>

                <p style="font-size: 16px; margin-top: 25px;">
                  Thank you for being part of the Xolar community. We look forward to working with you on future projects!
                </p>

                <p style="font-size: 16px; margin-top: 20px;">
                  Best regards,<br>
                  <strong>The Xolar Team</strong>
                </p>
              </div>

              <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
                <p style="margin: 5px 0;">© ${new Date().getFullYear()} Xolar. All rights reserved.</p>
                <p style="margin: 5px 0;">
                  <a href="https://xolar.ca" style="color: #667eea; text-decoration: none;">Visit our website</a>
                </p>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error('Resend email error:', error);
        return new Response(
          JSON.stringify({
            success: true,
            message: 'Bid rejected but email notification failed',
            emailError: error,
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Bid rejected and installer notified',
          emailId: data?.id,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Bid rejected but email notification failed',
          emailError: String(emailError),
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error) {
    console.error('Error rejecting bid:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to reject bid',
        details: String(error),
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
