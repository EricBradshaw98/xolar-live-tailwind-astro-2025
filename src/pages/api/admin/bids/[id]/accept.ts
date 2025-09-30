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
    const { installerEmail, installerName, projectTitle, bidAmount } = body;

    // TODO: Update bid status in database
    // In production, you would:
    // 1. Update the bid status to 'Accepted' in your database
    // 2. Reject all other bids for the same project
    // 3. Update project status if needed

    // Send acceptance email to installer using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'Xolar <noreply@xolar.ca>',
        to: [installerEmail],
        subject: `Congratulations! Your bid has been accepted - ${projectTitle}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Bid Accepted</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Bid Accepted!</h1>
              </div>

              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                <p style="font-size: 16px; margin-bottom: 20px;">Dear ${installerName},</p>

                <p style="font-size: 16px; margin-bottom: 20px;">
                  Great news! Your bid has been <strong style="color: #10b981;">accepted</strong> for the following project:
                </p>

                <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 25px;">
                  <h2 style="margin: 0 0 15px 0; color: #667eea; font-size: 20px;">${projectTitle}</h2>
                  <p style="margin: 5px 0; font-size: 15px;"><strong>Your Bid Amount:</strong> ${bidAmount}</p>
                  <p style="margin: 5px 0; font-size: 15px;"><strong>Bid ID:</strong> #${id}</p>
                </div>

                <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 25px;">
                  <p style="margin: 0; font-size: 14px; color: #856404;">
                    <strong>Next Steps:</strong><br>
                    The project owner will contact you shortly to discuss project details, timeline, and next steps. Please ensure you're available to respond promptly.
                  </p>
                </div>

                <p style="font-size: 16px; margin-bottom: 20px;">
                  You can view the complete project details and update your bid information by logging into your dashboard.
                </p>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://xolar.ca/installers/projects"
                     style="background: #667eea; color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold; font-size: 16px;">
                    View Project Dashboard
                  </a>
                </div>

                <p style="font-size: 16px; margin-top: 25px;">
                  Congratulations on winning this project! We look forward to seeing your excellent work.
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
            message: 'Bid accepted but email notification failed',
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
          message: 'Bid accepted and installer notified',
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
          message: 'Bid accepted but email notification failed',
          emailError: String(emailError),
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error) {
    console.error('Error accepting bid:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to accept bid',
        details: String(error),
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
