# Solar Installer Platform - Technical Implementation Plan

## 🏗️ Architecture Overview

**Current Status:** Static prototype with mock data
**Next Phase:** Full-stack implementation with real authentication and database

### Tech Stack Decision

```
Frontend: Astro (Cloudflare Pages) ✅ Already built
Database: Cloudflare D1 (SQLite)
Authentication: Clerk
File Storage: Cloudflare R2 ✅ Already set up
API: Astro API routes + Cloudflare Workers
```

## 📊 Database Schema (Cloudflare D1)

### Tables Structure

```sql
-- Users (Installers)
CREATE TABLE installers (
  id TEXT PRIMARY KEY,
  clerk_user_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  business_license TEXT,
  years_in_business TEXT,
  service_areas TEXT, -- JSON array: ["ON", "BC", "AB"]
  certifications TEXT, -- JSON array: ["electrical", "solar", "tesla"]
  insurance_coverage TEXT,
  team_size TEXT,
  status TEXT DEFAULT 'pending', -- pending, approved, rejected
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Solar Projects
CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  system_size TEXT NOT NULL,
  panel_count INTEGER,
  project_type TEXT NOT NULL, -- residential, commercial
  estimated_value TEXT,
  deadline DATE,
  description TEXT,
  requirements TEXT, -- JSON array
  status TEXT DEFAULT 'open', -- open, closed, in_progress, completed
  customer_info TEXT, -- JSON object (hidden until login)
  specifications TEXT, -- JSON object
  equipment TEXT, -- JSON object
  timeline TEXT, -- JSON object
  posted_date DATE DEFAULT CURRENT_DATE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Installer Bids
CREATE TABLE bids (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  installer_id TEXT NOT NULL,
  bid_amount TEXT,
  proposal_text TEXT,
  estimated_completion DATE,
  status TEXT DEFAULT 'submitted', -- submitted, accepted, rejected
  submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects (id),
  FOREIGN KEY (installer_id) REFERENCES installers (id)
);

-- Project Files (stored in R2)
CREATE TABLE project_files (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  filename TEXT NOT NULL,
  r2_key TEXT NOT NULL, -- R2 object key
  file_size TEXT,
  file_type TEXT,
  uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects (id)
);
```

## 🔐 Authentication with Clerk

### Setup & Configuration

**Clerk Features to Use:**

- User registration with approval workflow
- Organization support (installer companies)
- Custom user metadata for certifications
- Admin dashboard for installer approval
- File upload for licenses/certifications

**User Metadata Structure:**

```json
{
  "installerStatus": "approved", // pending, approved, rejected
  "certifications": ["electrical", "solar", "tesla"],
  "serviceAreas": ["ON", "BC", "AB"],
  "companySize": "3-5",
  "businessLicense": "ON-123456",
  "insuranceCoverage": "2M"
}
```

**Pricing:** FREE up to 10,000 users, then $25/month up to 100k users

## 💾 File Storage (Cloudflare R2)

**Already Set Up** ✅

**File Types to Store:**

- Site survey reports (PDF)
- Electrical panel photos (ZIP)
- Building plans (PDF)
- Permit documents (PDF)
- Installer certifications (PDF)
- Bid proposals (PDF)

**R2 Structure:**

```
bucket-name/
├── projects/
│   ├── 1/
│   │   ├── site-survey.pdf
│   │   ├── electrical-photos.zip
│   │   └── permits.pdf
│   └── 2/
│       └── commercial-plans.pdf
└── installers/
    ├── user_123/
    │   ├── business-license.pdf
    │   └── certifications.pdf
    └── user_456/
        └── insurance.pdf
```

## 🚀 Implementation Phases

### Phase 1: Database Setup

1. Install Wrangler CLI: `npm install wrangler`
2. Create D1 database: `wrangler d1 create installer-platform`
3. Run schema migrations
4. Seed with mock data for testing

### Phase 2: Authentication

1. Set up Clerk account and app
2. Install Clerk Astro integration
3. Replace mock login pages with Clerk components
4. Implement installer approval workflow
5. Add protected routes for bidding

### Phase 3: Dynamic Data

1. Replace mock data with D1 queries
2. Create API routes for CRUD operations
3. Implement real bidding functionality
4. Add file upload/download with R2

### Phase 4: Advanced Features

1. Email notifications for new bids
2. Real-time bid updates
3. Installer dashboard with analytics
4. Admin panel for project management

## 💰 Cost Estimates

**Monthly Operating Costs:**

```
Cloudflare D1:
  - 25B reads/month: $5
  - 50M writes/month: $5
  - 5GB storage: FREE
  - Estimated: $0-10/month

Cloudflare R2:
  - Storage: $4.50/TB/month
  - Zero egress fees
  - Estimated: $5-20/month

Clerk Authentication:
  - Up to 10k users: FREE
  - Up to 100k users: $25/month
  - Estimated: $0-25/month

Cloudflare Pages: FREE

Total: $5-55/month (scales with usage)
```

## 🔄 Multi-Client Expansion

### Agency/SaaS Model

**Single Codebase, Multiple Deployments:**

- Each solar company gets their own subdomain
- Tenant-based data isolation
- Custom branding per client
- Shared authentication system

**Database Schema Addition:**

```sql
-- Add tenant_id to all tables
ALTER TABLE projects ADD COLUMN tenant_id TEXT;
ALTER TABLE installers ADD COLUMN tenant_id TEXT;
ALTER TABLE bids ADD COLUMN tenant_id TEXT;

-- Tenant configuration
CREATE TABLE tenants (
  id TEXT PRIMARY KEY,
  company_name TEXT NOT NULL,
  domain TEXT UNIQUE,
  brand_color TEXT,
  logo_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Revenue Model:**

- $500-2000 setup fee per solar company
- $200-500/month SaaS subscription
- Scale Clerk costs across multiple clients
- High profit margins (80-95%)

## 📁 Current File Structure

```
src/
├── data/
│   └── mockProjects.js       ← Replace with D1 queries
├── pages/
│   └── installers/
│       ├── projects.astro    ← Main project listing
│       ├── project/
│       │   └── [id].astro    ← Project details
│       ├── login.astro       ← Replace with Clerk
│       └── register.astro    ← Replace with Clerk
├── layouts/
│   └── Layout.astro
└── components/
    └── [various components]
```

## 🎯 Next Steps When Ready

1. **Set up D1 database** - Create and configure
2. **Integrate Clerk** - Replace mock auth
3. **Connect R2** - Enable file uploads
4. **Test with real data** - Replace mock projects
5. **Deploy and iterate** - Launch with first client

## 📞 Business Opportunities

**Potential Clients:**

- Solar installation companies
- HVAC contractors
- Roofing companies
- General contractors
- Any service business with subcontractors

**Expansion Ideas:**

- Wealth manager client portals
- Restaurant staff scheduling
- Medical practice patient portals
- Law firm case management
- Real estate agent platforms

---

**Status:** Documentation complete - Ready for implementation when you are! 🚀
