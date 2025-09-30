// Helper functions for D1 database operations
import type { D1Database } from '@cloudflare/workers-types';

// Type definitions
export interface Project {
  id?: number;
  title: string;
  description: string;
  project_type: 'Residential' | 'Commercial';
  location: string;
  province: string;
  estimated_value: string;
  deadline: string;
  status: 'Open' | 'In Progress' | 'Closed';
  system_size: string;
  panel_count: number;
  roof_type: string;
  roof_pitch: string;
  utility_company: string;
  electrical_panel_size: string;
  panels: string;
  inverter: string;
  mounting: string;
  battery?: string;
  monitoring: string;
  requirements?: string; // JSON array as string
  archived?: number;
  bid_count?: number;
  posted_date?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Bid {
  id?: number;
  project_id: number;
  installer_id: string;
  installer_name: string;
  installer_email: string;
  installer_phone: string;
  installer_rating: number;
  installer_completed_projects: number;
  bid_amount: string;
  bid_amount_numeric: number;
  timeline: string;
  warranty: string;
  notes?: string;
  status: 'Pending' | 'Accepted' | 'Rejected';
  submitted_date?: string;
  updated_at?: string;
}

export interface Installer {
  id: string; // Clerk user ID
  company_name: string;
  business_number?: string;
  years_in_business?: number;
  company_description?: string;
  primary_contact_name: string;
  contact_title?: string;
  email: string;
  phone: string;
  address: string;
  website?: string;
  service_area: string;
  province: string;
  license_number: string;
  insurance_provider: string;
  insurance_coverage: string;
  insurance_expiry: string;
  certifications?: string; // JSON array as string
  completed_projects?: number;
  rating?: number;
  status: 'Active' | 'Pending Approval' | 'Suspended' | 'Inactive';
  flagged?: number;
  flagged_reason?: string;
  notes?: string;
  join_date: string;
  created_at?: string;
  updated_at?: string;
}

// Project operations
export async function createProject(db: D1Database, project: Project): Promise<number> {
  const result = await db
    .prepare(
      `INSERT INTO projects (
        title, description, project_type, location, province, estimated_value, deadline, status,
        system_size, panel_count, roof_type, roof_pitch, utility_company, electrical_panel_size,
        panels, inverter, mounting, battery, monitoring, requirements, posted_date
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`
    )
    .bind(
      project.title,
      project.description,
      project.project_type,
      project.location,
      project.province,
      project.estimated_value,
      project.deadline,
      project.status,
      project.system_size,
      project.panel_count,
      project.roof_type,
      project.roof_pitch,
      project.utility_company,
      project.electrical_panel_size,
      project.panels,
      project.inverter,
      project.mounting,
      project.battery || null,
      project.monitoring,
      project.requirements || null
    )
    .run();

  return result.meta.last_row_id;
}

export async function getActiveProjects(db: D1Database): Promise<Project[]> {
  const { results } = await db
    .prepare('SELECT * FROM projects WHERE archived = 0 ORDER BY posted_date DESC')
    .all<Project>();

  return results || [];
}

export async function getProjectById(db: D1Database, id: number): Promise<Project | null> {
  const result = await db
    .prepare('SELECT * FROM projects WHERE id = ?')
    .bind(id)
    .first<Project>();

  return result;
}

export async function updateProject(
  db: D1Database,
  id: number,
  updates: Partial<Project>
): Promise<void> {
  const fields = Object.keys(updates)
    .map((key) => `${key} = ?`)
    .join(', ');

  const values = Object.values(updates);

  await db
    .prepare(`UPDATE projects SET ${fields}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`)
    .bind(...values, id)
    .run();
}

export async function archiveProject(db: D1Database, id: number): Promise<void> {
  await db.prepare('UPDATE projects SET archived = 1, updated_at = CURRENT_TIMESTAMP WHERE id = ?').bind(id).run();
}

// Bid operations
export async function createBid(db: D1Database, bid: Bid): Promise<number> {
  const result = await db
    .prepare(
      `INSERT INTO bids (
        project_id, installer_id, installer_name, installer_email, installer_phone,
        installer_rating, installer_completed_projects, bid_amount, bid_amount_numeric,
        timeline, warranty, notes, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      bid.project_id,
      bid.installer_id,
      bid.installer_name,
      bid.installer_email,
      bid.installer_phone,
      bid.installer_rating,
      bid.installer_completed_projects,
      bid.bid_amount,
      bid.bid_amount_numeric,
      bid.timeline,
      bid.warranty,
      bid.notes || null,
      bid.status
    )
    .run();

  // Update project bid_count
  await db
    .prepare('UPDATE projects SET bid_count = bid_count + 1 WHERE id = ?')
    .bind(bid.project_id)
    .run();

  return result.meta.last_row_id;
}

export async function getBidsByProject(db: D1Database, projectId: number): Promise<Bid[]> {
  const { results } = await db
    .prepare('SELECT * FROM bids WHERE project_id = ? ORDER BY bid_amount_numeric ASC')
    .bind(projectId)
    .all<Bid>();

  return results || [];
}

export async function updateBidStatus(
  db: D1Database,
  bidId: number,
  status: 'Pending' | 'Accepted' | 'Rejected'
): Promise<void> {
  await db
    .prepare('UPDATE bids SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
    .bind(status, bidId)
    .run();
}

// Installer operations
export async function createInstaller(db: D1Database, installer: Installer): Promise<void> {
  await db
    .prepare(
      `INSERT INTO installers (
        id, company_name, business_number, years_in_business, company_description,
        primary_contact_name, contact_title, email, phone, address, website, service_area,
        province, license_number, insurance_provider, insurance_coverage, insurance_expiry,
        certifications, completed_projects, rating, status, join_date
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      installer.id,
      installer.company_name,
      installer.business_number || null,
      installer.years_in_business || null,
      installer.company_description || null,
      installer.primary_contact_name,
      installer.contact_title || null,
      installer.email,
      installer.phone,
      installer.address,
      installer.website || null,
      installer.service_area,
      installer.province,
      installer.license_number,
      installer.insurance_provider,
      installer.insurance_coverage,
      installer.insurance_expiry,
      installer.certifications || null,
      installer.completed_projects || 0,
      installer.rating || 4.5,
      installer.status,
      installer.join_date
    )
    .run();
}

export async function getInstallersByProvince(db: D1Database, province: string): Promise<Installer[]> {
  const { results } = await db
    .prepare('SELECT * FROM installers WHERE province = ? AND flagged = 0 AND status = ?')
    .bind(province, 'Active')
    .all<Installer>();

  return results || [];
}

export async function getInstallerById(db: D1Database, id: string): Promise<Installer | null> {
  const result = await db
    .prepare('SELECT * FROM installers WHERE id = ?')
    .bind(id)
    .first<Installer>();

  return result;
}

export async function updateInstaller(
  db: D1Database,
  id: string,
  updates: Partial<Installer>
): Promise<void> {
  const fields = Object.keys(updates)
    .map((key) => `${key} = ?`)
    .join(', ');

  const values = Object.values(updates);

  await db
    .prepare(`UPDATE installers SET ${fields}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`)
    .bind(...values, id)
    .run();
}
