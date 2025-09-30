-- Create installers table (synced with Clerk)
CREATE TABLE IF NOT EXISTS installers (
    id TEXT PRIMARY KEY,  -- Clerk user ID
    company_name TEXT NOT NULL,
    business_number TEXT,
    years_in_business INTEGER,
    company_description TEXT,

    -- Contact Information
    primary_contact_name TEXT NOT NULL,
    contact_title TEXT,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    website TEXT,
    service_area TEXT NOT NULL,
    province TEXT NOT NULL,

    -- Qualifications
    license_number TEXT NOT NULL,
    insurance_provider TEXT NOT NULL,
    insurance_coverage TEXT NOT NULL,
    insurance_expiry DATE NOT NULL,
    certifications TEXT,  -- JSON array

    -- Performance
    completed_projects INTEGER DEFAULT 0,
    rating REAL DEFAULT 4.5 CHECK(rating >= 0 AND rating <= 5),
    status TEXT NOT NULL DEFAULT 'Active' CHECK(status IN ('Active', 'Pending Approval', 'Suspended', 'Inactive')),

    -- Flags
    flagged INTEGER DEFAULT 0 CHECK(flagged IN (0, 1)),
    flagged_reason TEXT,

    -- Metadata
    notes TEXT,
    join_date DATE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_installers_email ON installers(email);
CREATE INDEX IF NOT EXISTS idx_installers_province ON installers(province);
CREATE INDEX IF NOT EXISTS idx_installers_status ON installers(status);
CREATE INDEX IF NOT EXISTS idx_installers_flagged ON installers(flagged);
CREATE INDEX IF NOT EXISTS idx_installers_rating ON installers(rating DESC);
