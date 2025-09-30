-- Create bids table
CREATE TABLE IF NOT EXISTS bids (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    installer_id TEXT NOT NULL,  -- References Clerk user ID
    installer_name TEXT NOT NULL,
    installer_email TEXT NOT NULL,
    installer_phone TEXT NOT NULL,
    installer_rating REAL NOT NULL DEFAULT 4.5,
    installer_completed_projects INTEGER NOT NULL DEFAULT 0,

    -- Bid Details
    bid_amount TEXT NOT NULL,
    bid_amount_numeric INTEGER NOT NULL,
    timeline TEXT NOT NULL,
    warranty TEXT NOT NULL,
    notes TEXT,

    -- Status
    status TEXT NOT NULL DEFAULT 'Pending' CHECK(status IN ('Pending', 'Accepted', 'Rejected')),

    -- Timestamps
    submitted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    -- Foreign key
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_bids_project_id ON bids(project_id);
CREATE INDEX IF NOT EXISTS idx_bids_installer_id ON bids(installer_id);
CREATE INDEX IF NOT EXISTS idx_bids_status ON bids(status);
CREATE INDEX IF NOT EXISTS idx_bids_submitted_date ON bids(submitted_date DESC);
