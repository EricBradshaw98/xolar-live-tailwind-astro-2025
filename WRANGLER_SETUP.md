# Cloudflare CLI (Wrangler) Setup Guide

## Installation

### Install Wrangler Globally
```bash
npm install -g wrangler
```

### Verify Installation
```bash
wrangler --version
```

You should see something like:
```
 ⛅️ wrangler 3.x.x
```

## Authentication

### Login to Cloudflare
```bash
wrangler login
```

This will:
1. Open your browser
2. Ask you to authorize Wrangler
3. Save credentials automatically

### Verify Login
```bash
wrangler whoami
```

Should show your Cloudflare account email.

## Quick Reference Commands

### D1 Database Commands

#### Create Database
```bash
# Development
wrangler d1 create xolar-db

# Production
wrangler d1 create xolar-db-production
```

#### List Databases
```bash
wrangler d1 list
```

#### Execute SQL
```bash
# Run migration file
wrangler d1 execute xolar-db --file=./migrations/0001_create_projects.sql

# Run single command
wrangler d1 execute xolar-db --command="SELECT * FROM projects"

# Production (requires --remote flag)
wrangler d1 execute xolar-db-production --file=./migrations/0001_create_projects.sql --remote
```

#### Query Database
```bash
# Development (local)
wrangler d1 execute xolar-db --command="SELECT COUNT(*) FROM projects"

# Production
wrangler d1 execute xolar-db-production --command="SELECT COUNT(*) FROM projects" --remote
```

#### Backup Database (Export)
```bash
# Export to SQL file
wrangler d1 export xolar-db --output=backup.sql

# For production
wrangler d1 export xolar-db-production --output=backup-prod.sql --remote
```

### Pages Commands

#### List Pages Projects
```bash
wrangler pages project list
```

#### Deploy Manually (if needed)
```bash
# Build first
npm run build

# Deploy
wrangler pages deploy dist --project-name=xolar-live-tailwind-astro
```

#### View Deployment Logs
```bash
wrangler pages deployment tail
```

### KV Namespace Commands (for Sessions)

#### List KV Namespaces
```bash
wrangler kv:namespace list
```

#### Create KV Namespace
```bash
wrangler kv:namespace create SESSION
```

## Development Workflow

### Local Development with D1

#### Option 1: Wrangler Dev (with D1 access)
```bash
# Build your Astro site first
npm run build

# Run with D1 binding
wrangler pages dev dist --d1=DB=xolar-db
```

#### Option 2: Astro Dev (without D1)
```bash
# Regular dev server
npm run dev

# Will use mock data since D1 not available
```

### Testing D1 Locally

```bash
# Create local D1 database
wrangler d1 execute xolar-db --file=./migrations/0001_create_projects.sql

# Insert test data
wrangler d1 execute xolar-db --command="INSERT INTO projects (title, location, province) VALUES ('Test Project', 'Toronto, ON', 'ON')"

# Query data
wrangler d1 execute xolar-db --command="SELECT * FROM projects"

# Test with local dev server
wrangler pages dev dist --d1=DB=xolar-db
```

## Troubleshooting

### Command Not Found
If you get "wrangler: command not found":

```bash
# Install globally
npm install -g wrangler

# Or use npx (no install needed)
npx wrangler login
npx wrangler d1 list
```

### Authentication Issues
```bash
# Logout and login again
wrangler logout
wrangler login
```

### D1 Database Not Found
Make sure you've:
1. Created the database: `wrangler d1 create xolar-db`
2. Updated the database_id in `wrangler.toml`
3. Run migrations: `wrangler d1 execute ...`

### Local Dev with D1 Not Working
```bash
# Make sure you built first
npm run build

# Then run with D1 binding
wrangler pages dev dist --d1=DB=xolar-db

# Check binding name matches wrangler.toml
```

## Important Notes

### Data Persistence
- ✅ **D1 data persists across deployments**
- ✅ **Safe to push new code** - won't affect database
- ✅ **Safe to redeploy** - data remains intact
- ⚠️ **Only deleted if you explicitly delete it**

### Database Separation
- Development DB: Local testing, can reset anytime
- Production DB: Live data, never reset
- They are completely separate databases
- Changes to one don't affect the other

### Migrations Best Practices
```bash
# Always test migrations on dev first
wrangler d1 execute xolar-db --file=./migrations/0001_create_projects.sql

# Verify migration worked
wrangler d1 execute xolar-db --command="SELECT name FROM sqlite_master WHERE type='table'"

# Only then run on production
wrangler d1 execute xolar-db-production --file=./migrations/0001_create_projects.sql --remote
```

### Environment Variables
Set in Cloudflare Pages dashboard:
- `RESEND_API_KEY` - For email functionality
- `CLERK_SECRET_KEY` - For authentication
- Any other secrets

**Never** commit secrets to git!

## Quick Start Checklist

- [ ] Install Wrangler globally: `npm install -g wrangler`
- [ ] Login to Cloudflare: `wrangler login`
- [ ] Create dev database: `wrangler d1 create xolar-db`
- [ ] Create prod database: `wrangler d1 create xolar-db-production`
- [ ] Update database IDs in `wrangler.toml`
- [ ] Run dev migrations: `wrangler d1 execute xolar-db --file=./migrations/...`
- [ ] Run prod migrations: `wrangler d1 execute xolar-db-production --file=./migrations/... --remote`
- [ ] Configure Pages D1 binding in Cloudflare dashboard
- [ ] Test locally: `wrangler pages dev dist --d1=DB=xolar-db`
- [ ] Deploy: Git push (automatic via Cloudflare Pages)

## Resources

- [Wrangler Docs](https://developers.cloudflare.com/workers/wrangler/)
- [D1 Documentation](https://developers.cloudflare.com/d1/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [D1 Client API](https://developers.cloudflare.com/d1/platform/client-api/)
