-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    project_type TEXT NOT NULL CHECK(project_type IN ('Residential', 'Commercial')),
    location TEXT NOT NULL,
    province TEXT NOT NULL,
    estimated_value TEXT NOT NULL,
    deadline DATE NOT NULL,
    status TEXT NOT NULL DEFAULT 'Open' CHECK(status IN ('Open', 'In Progress', 'Closed')),

    -- Technical Specifications
    system_size TEXT NOT NULL,
    panel_count INTEGER NOT NULL,
    roof_type TEXT NOT NULL,
    roof_pitch TEXT NOT NULL,
    utility_company TEXT NOT NULL,
    electrical_panel_size TEXT NOT NULL,

    -- Equipment Details
    panels TEXT NOT NULL,
    inverter TEXT NOT NULL,
    mounting TEXT NOT NULL,
    battery TEXT,
    monitoring TEXT NOT NULL,

    -- Requirements (stored as JSON array)
    requirements TEXT,

    -- Metadata
    archived INTEGER DEFAULT 0 CHECK(archived IN (0, 1)),
    bid_count INTEGER DEFAULT 0,
    posted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create index on status and archived for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_archived ON projects(archived);
CREATE INDEX IF NOT EXISTS idx_projects_province ON projects(province);
CREATE INDEX IF NOT EXISTS idx_projects_posted_date ON projects(posted_date DESC);
