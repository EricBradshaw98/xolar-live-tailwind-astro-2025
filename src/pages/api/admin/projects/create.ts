import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { mockInstallerFlags } from '../../../../data/mockInstallers.js';

// Initialize Resend with API key from environment
const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Helper to extract province abbreviation from location string
function extractProvince(location: string): string | null {
  const provinceMap: { [key: string]: string } = {
    ON: ['ontario', 'toronto', 'ottawa', 'mississauga', 'hamilton', 'london', 'kitchener', 'windsor'],
    BC: [
      'british columbia',
      'vancouver',
      'victoria',
      'surrey',
      'burnaby',
      'richmond',
      'kelowna',
    ],
    AB: ['alberta', 'calgary', 'edmonton', 'red deer', 'lethbridge'],
    QC: ['quebec', 'montreal', 'laval', 'gatineau', 'sherbrooke', 'trois-rivieres'],
    MB: ['manitoba', 'winnipeg', 'brandon'],
    SK: ['saskatchewan', 'regina', 'saskatoon'],
    NS: ['nova scotia', 'halifax', 'dartmouth'],
    NB: ['new brunswick', 'moncton', 'saint john', 'fredericton'],
    PE: ['prince edward island', 'charlottetown'],
    NL: ['newfoundland', 'labrador', "st. john's"],
  };

  const locationLower = location.toLowerCase();

  // Check if location contains province abbreviation (e.g., "Toronto, ON")
  for (const province of Object.keys(provinceMap)) {
    if (locationLower.includes(province.toLowerCase())) {
      return province;
    }
  }

  // Check if location contains city/region name
  for (const [province, cities] of Object.entries(provinceMap)) {
    for (const city of cities) {
      if (locationLower.includes(city)) {
        return province;
      }
    }
  }

  return null;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const projectData = await request.json();

    // Extract province from location
    const projectProvince = extractProvince(projectData.location);

    if (!projectProvince) {
      return new Response(
        JSON.stringify({
          error: 'Could not determine province from location',
          message:
            'Please include province abbreviation in location (e.g., "Toronto, ON" or "Vancouver, BC")',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // TODO: Save project to database
    // In production, you would:
    // 1. Validate project data
    // 2. Save project to database
    // 3. Generate project ID

    // For now, generate a mock project ID
    const projectId = Math.floor(Math.random() * 10000);

    // Get all installers in the same province
    const installersInProvince = Object.entries(mockInstallerFlags)
      .filter(([_, installer]) => installer.province === projectProvince && !installer.flagged)
      .map(([installerId, installer]) => ({
        id: installerId,
        email: installer.email,
        name: installer.name,
      }));

    console.log(
      `Found ${installersInProvince.length} installers in ${projectProvince} for new project`
    );

    // Send email notifications to all installers in the province
    const emailPromises = installersInProvince.map(async (installer) => {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Xolar <noreply@xolar.ca>',
          to: [installer.email],
          subject: `🌟 New Project Available in ${projectProvince} - ${projectData.title}`,
          html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Project Available</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 28px;">🌟 New Project Available!</h1>
              </div>

              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                <p style="font-size: 16px; margin-bottom: 20px;">Dear ${installer.name},</p>

                <p style="font-size: 16px; margin-bottom: 20px;">
                  A new solar installation project has been posted in your area! This is a great opportunity to expand your business.
                </p>

                <div style="background: white; padding: 25px; border-radius: 8px; border-left: 4px solid #667eea; margin-bottom: 25px;">
                  <h2 style="margin: 0 0 20px 0; color: #667eea; font-size: 22px;">${projectData.title}</h2>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                    <div>
                      <p style="margin: 0; font-size: 13px; color: #666; text-transform: uppercase; font-weight: bold;">Project Type</p>
                      <p style="margin: 5px 0 0 0; font-size: 15px; color: #333;">${projectData.projectType}</p>
                    </div>
                    <div>
                      <p style="margin: 0; font-size: 13px; color: #666; text-transform: uppercase; font-weight: bold;">Location</p>
                      <p style="margin: 5px 0 0 0; font-size: 15px; color: #333;">${projectData.location}</p>
                    </div>
                    <div>
                      <p style="margin: 0; font-size: 13px; color: #666; text-transform: uppercase; font-weight: bold;">System Size</p>
                      <p style="margin: 5px 0 0 0; font-size: 15px; color: #333;">${projectData.systemSize}</p>
                    </div>
                    <div>
                      <p style="margin: 0; font-size: 13px; color: #666; text-transform: uppercase; font-weight: bold;">Estimated Value</p>
                      <p style="margin: 5px 0 0 0; font-size: 15px; color: #10b981; font-weight: bold;">${projectData.estimatedValue}</p>
                    </div>
                  </div>

                  <div style="padding-top: 15px; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 13px; color: #666; text-transform: uppercase; font-weight: bold;">Description</p>
                    <p style="margin: 10px 0 0 0; font-size: 14px; color: #555; line-height: 1.6;">${projectData.description}</p>
                  </div>
                </div>

                <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 25px;">
                  <p style="margin: 0; font-size: 14px; color: #856404;">
                    <strong>⏰ Bid Deadline:</strong> ${new Date(projectData.deadline).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}<br>
                    <strong>Don't miss this opportunity!</strong> Submit your bid before the deadline to be considered for this project.
                  </p>
                </div>

                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                  <h3 style="margin: 0 0 15px 0; color: #0369a1; font-size: 16px;">Project Details</h3>
                  <div style="display: grid; gap: 10px; font-size: 14px;">
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: #666;">Panel Count:</span>
                      <span style="color: #333; font-weight: bold;">${projectData.panelCount} panels</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: #666;">Roof Type:</span>
                      <span style="color: #333; font-weight: bold;">${projectData.roofType}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: #666;">Utility Company:</span>
                      <span style="color: #333; font-weight: bold;">${projectData.utilityCompany}</span>
                    </div>
                  </div>
                </div>

                <p style="font-size: 16px; margin-bottom: 20px;">
                  Review the complete project details and submit your competitive bid through the Xolar platform.
                </p>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://xolar.ca/installers/project/${projectId}"
                     style="background: #667eea; color: white; padding: 14px 35px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold; font-size: 16px;">
                    View Project & Submit Bid
                  </a>
                </div>

                <p style="font-size: 16px; margin-top: 25px; color: #555;">
                  This project matches your service area. Early bids often have a competitive advantage, so don't delay!
                </p>

                <p style="font-size: 16px; margin-top: 20px;">
                  Best of luck,<br>
                  <strong>The Xolar Team</strong>
                </p>
              </div>

              <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
                <p style="margin: 5px 0;">© ${new Date().getFullYear()} Xolar. All rights reserved.</p>
                <p style="margin: 5px 0;">
                  <a href="https://xolar.ca/installers/projects" style="color: #667eea; text-decoration: none;">Browse All Projects</a> |
                  <a href="https://xolar.ca" style="color: #667eea; text-decoration: none;">Visit Website</a>
                </p>
              </div>
            </body>
          </html>
        `,
        });

        if (error) {
          console.error(`Failed to send email to ${installer.name}:`, error);
          return { success: false, installer: installer.name, error };
        }

        return { success: true, installer: installer.name, emailId: data?.id };
      } catch (error) {
        console.error(`Error sending email to ${installer.name}:`, error);
        return { success: false, installer: installer.name, error: String(error) };
      }
    });

    // Wait for all emails to be sent
    const emailResults = await Promise.all(emailPromises);

    // Count successes and failures
    const successCount = emailResults.filter((r) => r.success).length;
    const failureCount = emailResults.filter((r) => !r.success).length;

    console.log(`Email notifications: ${successCount} sent, ${failureCount} failed`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Project created successfully! Notified ${successCount} installer(s) in ${projectProvince}.`,
        projectId,
        province: projectProvince,
        emailResults: {
          sent: successCount,
          failed: failureCount,
          total: installersInProvince.length,
        },
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error creating project:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to create project',
        details: String(error),
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
