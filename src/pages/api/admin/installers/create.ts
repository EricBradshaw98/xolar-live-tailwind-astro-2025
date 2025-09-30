import type { APIRoute } from 'astro';
import { clerkClient } from '@clerk/astro/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const installerData = await request.json();

    // Validate required fields
    if (!installerData.email || !installerData.companyName || !installerData.primaryContactName) {
      return new Response(
        JSON.stringify({
          error: 'Missing required fields',
          message: 'Email, company name, and primary contact name are required',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log(`Creating Clerk account for installer: ${installerData.email}`);

    // Create Clerk user
    let clerkUser;
    try {
      // Generate a temporary password (installer will be prompted to set their own on first login)
      const tempPassword = Math.random().toString(36).slice(-12) + 'A1!';

      clerkUser = await clerkClient().users.createUser({
        emailAddress: [installerData.email],
        password: tempPassword,
        firstName: installerData.primaryContactName.split(' ')[0] || installerData.primaryContactName,
        lastName:
          installerData.primaryContactName.split(' ').slice(1).join(' ') ||
          installerData.companyName,
        publicMetadata: {
          role: 'installer',
          companyName: installerData.companyName,
          companyId: `installer-${Date.now()}`,
        },
        privateMetadata: {
          installerData: {
            businessNumber: installerData.businessNumber,
            yearsInBusiness: installerData.yearsInBusiness,
            phone: installerData.phone,
            address: installerData.address,
            serviceArea: installerData.serviceArea,
            licenseNumber: installerData.licenseNumber,
            insuranceProvider: installerData.insuranceProvider,
            insuranceCoverage: installerData.insuranceCoverage,
            insuranceExpiry: installerData.insuranceExpiry,
            certifications: installerData.certifications || [],
            completedProjects: parseInt(installerData.completedProjects) || 0,
            rating: parseFloat(installerData.rating) || 4.5,
            status: installerData.status,
            joinDate: installerData.joinDate,
          },
        },
      });

      console.log(`✅ Clerk user created: ${clerkUser.id}`);
    } catch (clerkError: any) {
      console.error('❌ Clerk user creation error:', clerkError);

      // Check if user already exists
      if (
        clerkError.errors &&
        clerkError.errors.some((e: any) => e.code === 'form_identifier_exists')
      ) {
        return new Response(
          JSON.stringify({
            error: 'Email already exists',
            message: `An installer with email ${installerData.email} already exists in the system.`,
          }),
          {
            status: 409,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      throw clerkError;
    }

    // TODO: Save installer to database
    // In production, you would:
    // 1. Save installer profile to database
    // 2. Link Clerk user ID to installer profile
    // 3. Store additional installer data

    // Send welcome email to new installer
    try {
      const { data, error } = await resend.emails.send({
        from: 'Xolar <noreply@xolar.ca>',
        to: [installerData.email],
        subject: '🎉 Welcome to Xolar - Your Installer Account is Ready!',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Welcome to Xolar</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 32px;">🎉 Welcome to Xolar!</h1>
              </div>

              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                <p style="font-size: 16px; margin-bottom: 20px;">Dear ${installerData.primaryContactName},</p>

                <p style="font-size: 16px; margin-bottom: 20px;">
                  Congratulations! Your installer account for <strong>${installerData.companyName}</strong> has been successfully created on the Xolar platform.
                </p>

                <div style="background: white; padding: 25px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 25px;">
                  <h2 style="margin: 0 0 15px 0; color: #10b981; font-size: 20px;">✅ Account Created Successfully</h2>
                  <div style="font-size: 14px; color: #555;">
                    <p style="margin: 5px 0;"><strong>Company:</strong> ${installerData.companyName}</p>
                    <p style="margin: 5px 0;"><strong>Email:</strong> ${installerData.email}</p>
                    <p style="margin: 5px 0;"><strong>Service Area:</strong> ${installerData.serviceArea}</p>
                    <p style="margin: 5px 0;"><strong>Account Status:</strong> <span style="color: #10b981; font-weight: bold;">${installerData.status}</span></p>
                  </div>
                </div>

                <div style="background: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 25px;">
                  <h3 style="margin: 0 0 15px 0; color: #856404; font-size: 18px;">🔐 Next Steps: Set Up Your Password</h3>
                  <p style="margin: 0; font-size: 14px; color: #856404;">
                    A temporary password has been set for your account. <strong>You must set your own password on first login</strong> for security purposes.
                  </p>
                </div>

                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                  <h3 style="margin: 0 0 15px 0; color: #0369a1; font-size: 18px;">🚀 What You Can Do Now</h3>
                  <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px; color: #555;">
                    <li style="margin: 8px 0;">Browse available solar installation projects in your area</li>
                    <li style="margin: 8px 0;">Submit competitive bids on projects that match your expertise</li>
                    <li style="margin: 8px 0;">Track your bid status and communicate with project owners</li>
                    <li style="margin: 8px 0;">Build your reputation with completed projects and ratings</li>
                    <li style="margin: 8px 0;">Update your company profile and certifications</li>
                  </ul>
                </div>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://xolar.ca/installers/login"
                     style="background: #667eea; color: white; padding: 14px 35px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold; font-size: 16px;">
                    Sign In to Your Account
                  </a>
                </div>

                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin-bottom: 25px;">
                  <h4 style="margin: 0 0 10px 0; color: #374151; font-size: 14px;">📋 Your Profile Information</h4>
                  <div style="font-size: 13px; color: #6b7280; line-height: 1.8;">
                    <p style="margin: 3px 0;"><strong>License:</strong> ${installerData.licenseNumber}</p>
                    <p style="margin: 3px 0;"><strong>Insurance:</strong> ${installerData.insuranceProvider} (${installerData.insuranceCoverage})</p>
                    ${installerData.certifications && installerData.certifications.length > 0 ? `<p style="margin: 3px 0;"><strong>Certifications:</strong> ${installerData.certifications.join(', ')}</p>` : ''}
                    <p style="margin: 3px 0;"><strong>Years in Business:</strong> ${installerData.yearsInBusiness}</p>
                  </div>
                </div>

                <p style="font-size: 16px; margin-bottom: 20px; color: #555;">
                  Our platform connects you with homeowners and businesses looking for quality solar installations. Start browsing projects today and grow your business with Xolar!
                </p>

                <p style="font-size: 14px; margin-top: 25px; color: #666;">
                  If you have any questions or need assistance, our support team is here to help.
                </p>

                <p style="font-size: 16px; margin-top: 20px;">
                  Welcome aboard!<br>
                  <strong>The Xolar Team</strong>
                </p>
              </div>

              <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
                <p style="margin: 5px 0;">© ${new Date().getFullYear()} Xolar. All rights reserved.</p>
                <p style="margin: 5px 0;">
                  <a href="https://xolar.ca/installers/projects" style="color: #667eea; text-decoration: none;">Browse Projects</a> |
                  <a href="https://xolar.ca" style="color: #667eea; text-decoration: none;">Visit Website</a>
                </p>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error('❌ Failed to send welcome email:', error);
        // Don't fail the request if email fails
      } else {
        console.log(`✅ Welcome email sent to ${installerData.email}`);
      }
    } catch (emailError) {
      console.error('❌ Error sending welcome email:', emailError);
      // Don't fail the request if email fails
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Installer account created successfully and welcome email sent',
        clerkUserId: clerkUser.id,
        email: installerData.email,
        companyName: installerData.companyName,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('❌ Error creating installer:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to create installer account',
        details: error?.message || String(error),
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
