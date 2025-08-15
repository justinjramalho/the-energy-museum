-- Exhibits Database Schema for Phase 1 Integration
-- Enhanced tag system with pedagogy-based filtering

-- Create exhibits table with enhanced tag structure
CREATE TABLE exhibits (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    
    -- Learning approach for current filtering system
    learning_approach JSON COMMENT 'Array of pedagogy categories: ["narrative-driven", "virtual", "place-based"]',
    
    -- Enhanced tag system for future filtering
    pedagogy_tags JSON COMMENT 'Array of pedagogy tags: ["Historical Journey", "Virtual Reality"]',
    subject_tags JSON COMMENT 'Array of subject tags: ["Wind Energy", "Quantum Physics"]',
    funding_tags JSON COMMENT 'Array of funding tags: ["NSF Funded", "Title I"]',
    
    -- Visual and UX properties
    icon VARCHAR(10) DEFAULT '⚡',
    gradient VARCHAR(200) DEFAULT 'linear-gradient(135deg, #00d4ff, #0099cc)',
    difficulty ENUM('Beginner', 'Intermediate', 'Advanced') DEFAULT 'Beginner',
    story_type VARCHAR(100),
    duration VARCHAR(50),
    
    -- Engagement metrics
    visitors INT DEFAULT 0,
    comments INT DEFAULT 0,
    
    -- Content management
    status ENUM('draft', 'published', 'archived') DEFAULT 'published',
    sort_order INT DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_status (status),
    INDEX idx_learning_approach ((CAST(learning_approach AS CHAR(500)))),
    INDEX idx_sort_order (sort_order, created_at)
);

-- Insert current 6 exhibits with enhanced tag structure
INSERT INTO exhibits (
    id, title, description, learning_approach, 
    pedagogy_tags, subject_tags, funding_tags,
    icon, gradient, difficulty, story_type, duration, visitors, comments
) VALUES 
(
    'renewable-revolution',
    'Renewable Revolution',
    'Journey through an immersive historical narrative exploring humanity\'s relationship with renewable energy, from ancient windmills to futuristic solar arrays.',
    '["narrative-driven", "virtual", "place-based"]',
    '["Historical Journey", "Interactive Timeline", "Real-World Application"]',
    '["Wind Energy", "Solar Technology"]',
    '[]',
    '🌞',
    'linear-gradient(135deg, #FFD700, #FFA500)',
    'Beginner',
    'Historical Narrative',
    '15-20 min',
    1250,
    89
),
(
    'physics-of-power',
    'The Physics of Power',
    'Embark on a mind-bending interactive journey where abstract physics becomes tangible reality. Manipulate energy fields and witness quantum phenomena in action.',
    '["problem-based", "virtual"]',
    '["Scientific Problem", "Virtual Reality", "Innovation Challenge"]',
    '["Quantum Physics", "Energy Laws"]',
    '[]',
    '⚡',
    'linear-gradient(135deg, #00d4ff, #0099cc)',
    'Advanced',
    'Interactive Discovery',
    '20-25 min',
    987,
    156
),
(
    'energy-society',
    'Energy and Society',
    'Follow the dramatic narrative of how energy transformed human civilization, from steam engines to smart cities, through the eyes of historical figures.',
    '["narrative-driven", "place-based"]',
    '["Historical Drama", "Community Investigation", "Real-World Application"]',
    '["Social Impact", "Urban Planning"]',
    '[]',
    '🏘️',
    'linear-gradient(135deg, #32CD32, #228B22)',
    'Intermediate',
    'Historical Drama',
    '18-22 min',
    1450,
    203
),
(
    'climate-solutions',
    'Climate Solutions',
    'Experience a future-forward simulation where you collaborate with scientists in 2050 to witness breakthrough technologies that solved the climate crisis.',
    '["problem-based", "virtual", "grant-supported"]',
    '["Challenge-Based", "Online Simulation", "Research Investigation"]',
    '["Climate Action"]',
    '["NSF Funded"]',
    '🌍',
    'linear-gradient(135deg, #4169E1, #1E90FF)',
    'Intermediate',
    'Future Simulation',
    '25-30 min',
    2100,
    287
),
(
    'battery-science',
    'The Science of Energy Storage',
    'Dive deep into the molecular world of batteries through a detective story, solving the mystery of how energy gets trapped and released.',
    '["narrative-driven", "problem-based", "virtual", "grant-supported"]',
    '["Scientific Mystery", "Research Investigation", "Virtual Reality"]',
    '["Battery Technology"]',
    '["STEM Grant"]',
    '🔋',
    'linear-gradient(135deg, #FF6347, #FF4500)',
    'Advanced',
    'Scientific Mystery',
    '22-28 min',
    876,
    124
),
(
    'smart-homes',
    'Smart Homes & Energy Efficiency',
    'Experience a day in the life of an AI-powered smart home, learning how intelligent systems optimize energy use through interactive household scenarios.',
    '["place-based", "virtual", "problem-based", "grant-supported"]',
    '["Real-World Application", "Interactive Timeline", "Engineering Design"]',
    '["Smart Technology"]',
    '["Title I"]',
    '🏠',
    'linear-gradient(135deg, #9370DB, #8A2BE2)',
    'Beginner',
    'Interactive Simulation',
    '12-15 min',
    1320,
    167
);

-- Create categories table for dynamic filter management
CREATE TABLE categories (
    id VARCHAR(50) PRIMARY KEY,
    label VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(10),
    color VARCHAR(7) DEFAULT '#00d4ff',
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_active_sort (is_active, sort_order)
);

-- Insert current filter categories
INSERT INTO categories (id, label, description, sort_order) VALUES 
('all', 'All Learning Experiences', 'Show all available exhibits across all learning approaches', 0),
('place-based', 'Place-Based', 'Field experiences and real-world applications', 1),
('virtual', 'Virtual', 'Online simulations and digital experiences', 2),
('problem-based', 'Problem-Based', 'Challenge-based learning and research investigations', 3),
('narrative-driven', 'Narrative-Driven', 'Story-based and historical journey experiences', 4),
('grant-supported', 'Grant Supported', 'Exhibits funded by educational grants', 5);
