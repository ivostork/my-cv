// --- Interfaces ---
export interface Job {
    company: string;
    role: string;
    period: string;
    bullets: string[];
}

export interface Education {
    degree: string;
    school: string;
    year: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    web: string;
    github: string;
}

// --- Data ---
export const CONTACT_INFO: ContactInfo = {
    email: 'ivos.stork@gmail.com',
    phone: '+420 728 641 141',
    location: 'Brno, Czechia',
    web: 'www.ivostork.com',
    github: 'github.com/ivostork'
};

export const SKILLS: string[] = [
    'Financial Platform Implementation', // Replaces generic ERP support to fit Capco
    'SQL & Data Analysis', // Stronger wording than "Basics"
    'XML & Interface Logic', // Added as required by Job (Murex relies on XML/interfaces)
    'Software Testing & QA Practices', // Required by JD
    'Business Analysis & workflows',
    'Capital Markets Environment Awareness', // Added based on FNZ experience + Education
    'Technical Documentation & Stakeholder Management',
];

export const EXPERIENCE: Job[] = [
    {
        company: 'IDEA StatiCa - Brno',
        role: 'Technical Product Specialist / Solution Analyst', // "Solution Analyst" sounds better for consulting
        period: '02/2023 - 11/2025',
        bullets: [
            // Aligned with "Delivering solutions to production problems"
            'Analyzed complex software behavior and logic to resolve production issues for engineering teams.',
            'Defined technical specifications for desktop/web applications, ensuring data integrity.',
            'Conducted testing cycles and validated new features before release to ensure system stability.',
        ],
    },
    {
        company: 'Kentico - Brno',
        role: 'System Analyst / Technical Consultant', // Adjusted to fit "Consultant" title
        period: '07/2021 - 12/2022',
        bullets: [
            // Aligned with "Migration and development of interfaces" & Analysis
            'Conducted detailed analysis of system workflows to optimize processes and remove bottlenecks.',
            'Bridged the gap between technical teams and business stakeholders regarding system changes.',
            'Managed requirements documentation and tracked project progress in Jira/Confluence.',
        ],
    },
    {
        company: 'Konica Minolta - Brno',
        role: 'Industrial Software Specialist',
        period: '12/2018 - 07/2021',
        bullets: [
            // Aligned with "Integration" and "Configuration"
            'Configured software solutions to meet specific hardware and production requirements.',
            'Validated system logic and user interactions within a complex manufacturing context.',
            'Troubleshooted interface issues between hardware components and software control units.',
        ],
    },
    {
        company: 'FNZ - Brno',
        role: 'Technical Implementation Consultant', // Strong match for "Murex Consultant"
        period: '01/2010 - 11/2018',
        bullets: [
            // THIS IS KEY: Rewritten to match Banking/Financial/Trading requirements
            'Executed technical implementation of financial wealth management platforms for international banking clients.',
            'Handled data interface logic, code compliance, and configuration of financial instruments.',
            'Resolved technical tickets related to transaction processing and UI/logic on production environments.',
        ],
    },
];

export const EDUCATION: Education = {
    degree: "Master's Degree, Economic Informatics", // HIGHLIGHT: This combines Economics + CS, exactly what they want.
    school: 'Mendel University',
    year: '2011',
};