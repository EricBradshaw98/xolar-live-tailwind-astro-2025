# Cloudflare D1 Database Setup Guide

This guide will help you set up Cloudflare D1 for storing projects, bids, and installers.

## Prerequisites

- Cloudflare account
- Wrangler CLI installed (`npm install -g wrangler`)
- Logged into Wrangler (`wrangler login`)

## Step 1: Create D1 Databases

### Development Database
```bash
wrangler d1 create xolar-db
```

This will output something like:
```
✅ Successfully created DB 'xolar-db'!

[[d1_databases]]
binding = "DB"
database_name = "xolar-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

Copy the `database_id` and update it in `wrangler.toml` on line 10.

### Production Database
```bash
wrangler d1 create xolar-db-production
```

Copy the production `database_id` and update it in `wrangler.toml` on line 27.

## Step 2: Run Migrations

### Development
```bash
# Run all migrations
wrangler d1 execute xolar-db --file=./migrations/0001_create_projects.sql
wrangler d1 execute xolar-db --file=./migrations/0002_create_bids.sql
wrangler d1 execute xolar-db --file=./migrations/0003_create_installers.sql
```

### Production
```bash
# Run migrations on production (when ready to deploy)
wrangler d1 execute xolar-db-production --file=./migrations/0001_create_projects.sql --remote
wrangler d1 execute xolar-db-production --file=./migrations/0002_create_bids.sql --remote
wrangler d1 execute xolar-db-production --file=./migrations/0003_create_installers.sql --remote
```

## Step 3: Verify Tables

### Check Development Database
```bash
wrangler d1 execute xolar-db --command="SELECT name FROM sqlite_master WHERE type='table'"
```

You should see:
- projects
- bids
- installers

## Step 4: Configure Cloudflare Pages

In your Cloudflare Pages dashboard:

1. Go to **Settings** > **Functions**
2. Add **D1 database bindings**:
   - **Variable name**: `DB`
   - **D1 database**: Select `xolar-db-production`

## Step 5: Test Local Development

### Option 1: Use Wrangler Dev (Recommended)
```bash
# This will use local D1 database
wrangler pages dev dist --d1=DB=xolar-db
```

### Option 2: Use Astro Dev (with mocks)
```bash
npm run dev
# Will continue to use mock data until you update the API endpoints
```

## Database Schema

### Projects Table
```sql
- id (INTEGER, PRIMARY KEY)
- title, description, project_type
- location, province
- estimated_value, deadline, status
- Technical specs (system_size, panel_count, etc.)
- Equipment details (panels, inverter, etc.)
- requirements (JSON array)
- archived, bid_count
- Timestamps
```

### Bids Table
```sql
- id (INTEGER, PRIMARY KEY)
- project_id (FOREIGN KEY)
- installer_id (Clerk user ID)
- Installer details (name, email, phone, etc.)
- Bid details (amount, timeline, warranty, notes)
- status (Pending, Accepted, Rejected)
- Timestamps
```

### Installers Table
```sql
- id (TEXT, PRIMARY KEY - Clerk user ID)
- Company info (name, business_number, etc.)
- Contact details
- Qualifications (license, insurance, certifications)
- Performance (completed_projects, rating)
- Flags and metadata
- Timestamps
```

## Useful D1 Commands

### Query the database
```bash
# List all projects
wrangler d1 execute xolar-db --command="SELECT * FROM projects"

# Count projects
wrangler d1 execute xolar-db --command="SELECT COUNT(*) FROM projects"

# Get project with bids
wrangler d1 execute xolar-db --command="SELECT p.*, COUNT(b.id) as bid_count FROM projects p LEFT JOIN bids b ON p.id = b.project_id GROUP BY p.id"
```

### Delete all data (for testing)
```bash
wrangler d1 execute xolar-db --command="DELETE FROM bids"
wrangler d1 execute xolar-db --command="DELETE FROM projects"
wrangler d1 execute xolar-db --command="DELETE FROM installers"
```

### Drop tables (to start over)
```bash
wrangler d1 execute xolar-db --command="DROP TABLE IF EXISTS bids"
wrangler d1 execute xolar-db --command="DROP TABLE IF EXISTS projects"
wrangler d1 execute xolar-db --command="DROP TABLE IF EXISTS installers"
```

## Accessing D1 in Your API Routes

In your Astro API routes, access D1 via the runtime:

```typescript
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  const db = locals.runtime.env.DB;

  const { results } = await db.prepare(
    "SELECT * FROM projects WHERE archived = 0 ORDER BY posted_date DESC"
  ).all();

  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' }
  });
};
```

## Next Steps

1. ✅ Create D1 databases (dev + production)
2. ✅ Update database IDs in `wrangler.toml`
3. ✅ Run migrations
4. ✅ Configure Cloudflare Pages bindings
5. 🔄 Update API endpoints to use D1 instead of mock data
6. 🔄 Test locally with `wrangler pages dev`
7. 🔄 Deploy to production

## Migration Strategy

To migrate from mock data to D1:

1. Keep mock data files for development/testing
2. Create a seed script to populate D1 with mock data
3. Gradually update API endpoints to use D1
4. Add fallback to mock data if D1 is not available (for local dev)

## Resources

- [Cloudflare D1 Docs](https://developers.cloudflare.com/d1/)
- [D1 Client API](https://developers.cloudflare.com/d1/platform/client-api/)
- [Astro with Cloudflare D1](https://docs.astro.build/en/guides/integrations-guide/cloudflare/#d1-databases)
