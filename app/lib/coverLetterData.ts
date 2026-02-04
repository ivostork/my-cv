export interface CoverLetterContent {
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
}

export const COVER_LETTER: CoverLetterContent = {
    salutation: 'Dear Hiring Manager,',
    paragraphs: [
        'I am writing to express my strong interest in the Technical Support Specialist position at your esteemed organization. With over 10 years of experience in the software industry and a proven track record of resolving complex technical challenges, I am confident in my ability to deliver exceptional support to your clients and internal teams.',
        'Throughout my career, I have developed a comprehensive skill set that directly aligns with your requirements. At IDEA StatiCa, I specialized in analyzing complex software behavior, defining technical specifications, and troubleshooting production issues for engineering teams. My tenure at FNZ provided extensive experience with financial platform implementation and data interface logic, while my time at Konica Minolta and Kentico reinforced my ability to bridge technical complexity with clear communication to diverse stakeholders.',
        'What sets me apart is my commitment to continuous learning and adaptability. I hold a Master\'s Degree in Economic Informatics from Mendel University, combining technical depth with business acumen. My fluent English and rapidly improving German enable me to work effectively in international environments. I excel in technical documentation, requirement management, and translating complex system behavior into actionable insights for both technical teams and business stakeholders.',
        'I am particularly attracted to this opportunity because of your organization\'s commitment to innovation and technical excellence. I am eager to contribute my problem-solving skills, attention to detail, and customer-centric mindset to your team. I am confident that my experience and dedication will enable me to make a meaningful impact from day one.',
        'Thank you for considering my application. I would welcome the opportunity to discuss how my background, skills, and enthusiasm can contribute to your team\'s success. Please feel free to contact me at your convenience.',
    ],
    closing: 'Sincerely,',
    signature: 'Ivo Štork',
};
