// Example of how to update the project creation API to use D1
// Replace the content of create.ts with this after setting up D1

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { createProject, getInstallersByProvince } from '../../../../lib/db';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Helper to extract province abbreviation from location string
function extractProvince(location: string): string | null {
  const provinceMap: { [key: string]: string } = {
    ON: ['ontario', 'toronto', 'ottawa', 'mississauga', 'hamilton', 'london', 'kitchener', 'windsor'],
    BC: ['british columbia', 'vancouver', 'victoria', 'surrey', 'burnaby', 'richmond', 'kelowna'],
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

  for (const province of Object.keys(provinceMap)) {
    if (locationLower.includes(province.toLowerCase())) {
      return province;
    }
  }

  for (const [province, cities] of Object.entries(provinceMap)) {
    for (const city of cities) {
      if (locationLower.includes(city)) {
        return province;
      }
    }
  }

  return null;
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Access D1 database from runtime
    const db = locals.runtime.env.DB;

    if (!db) {
      return new Response(
        JSON.stringify({
          error: 'Database not available',
          message: 'D1 database binding is not configured. Please check your wrangler.toml configuration.',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Parse request body
    const projectData = await request.json();

    // Extract province from location
    const projectProvince = extractProvince(projectData.location);

    if (!projectProvince) {
      return new Response(
        JSON.stringify({
          error: 'Could not determine province from location',
          message: 'Please include province abbreviation in location (e.g., "Toronto, ON" or "Vancouver, BC")',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Prepare project data for database
    const project = {
      title: projectData.title,
      description: projectData.description,
      project_type: projectData.projectType,
      location: projectData.location,
      province: projectProvince,
      estimated_value: projectData.estimatedValue,
      deadline: projectData.deadline,
      status: projectData.status || 'Open',
      system_size: projectData.systemSize,
      panel_count: parseInt(projectData.panelCount),
      roof_type: projectData.roofType,
      roof_pitch: projectData.roofPitch,
      utility_company: projectData.utilityCompany,
      electrical_panel_size: projectData.electricalPanelSize,
      panels: projectData.panels,
      inverter: projectData.inverter,
      mounting: projectData.mounting,
      battery: projectData.battery,
      monitoring: projectData.monitoring,
      requirements: projectData.requirements ? JSON.stringify(projectData.requirements) : null,
    };

    // Save project to D1 database
    const projectId = await createProject(db, project);

    console.log(`✅ Project created in D1 with ID: ${projectId}`);

    // Get all active installers in the same province from D1
    const installersInProvince = await getInstallersByProvince(db, projectProvince);

    console.log(`Found ${installersInProvince.length} installers in ${projectProvince} for new project`);

    // Send email notifications to all installers in the province
    const emailPromises = installersInProvince.map(async (installer) => {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Xolar <noreply@xolar.ca>',
          to: [installer.email],
          subject: `🌟 New Project Available in ${projectProvince} - ${projectData.title}`,
          html: `
            <!-- Email template here (same as before) -->
            <p>New project: ${projectData.title}</p>
            <p>Location: ${projectData.location}</p>
            <p><a href="https://xolar.ca/installers/project/${projectId}">View Project</a></p>
          `,
        });

        if (error) {
          console.error(`Failed to send email to ${installer.company_name}:`, error);
          return { success: false, installer: installer.company_name, error };
        }

        return { success: true, installer: installer.company_name, emailId: data?.id };
      } catch (error) {
        console.error(`Error sending email to ${installer.company_name}:`, error);
        return { success: false, installer: installer.company_name, error: String(error) };
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
