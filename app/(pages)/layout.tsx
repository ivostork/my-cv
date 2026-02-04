'use client';

import { CONTACT_INFO, SKILLS, EDUCATION } from '../lib/cvData';

export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="page">
            <table className="layout-table">

                {/* 1. TOP SPACER (The Magic Part) */}
                {/* This creates the white space on Page 2, 3, etc. */}
                <thead className="print-header">
                    <tr>
                        <td colSpan={2}></td>
                    </tr>
                </thead>

                {/* BOTTOM SPACER */}
                <tfoot>
                    <tr>
                        <td colSpan={2} className="footer-spacer"></td>
                    </tr>
                </tfoot>

                <tbody>
                    <tr>
                        {/* --- LEFT COLUMN (SIDEBAR) --- */}
                        <td className="col-sidebar">

                            {/* Profile Image */}
                            <div className="profile-container">
                                <img
                                    src="me3.png"
                                    alt="Ivo Štork"
                                    className="profile-img"
                                />
                            </div>

                            <aside className="sidebar">
                                <section style={{ marginBottom: '3rem' }}>
                                    <h2>Contact</h2>
                                    <div style={{ fontSize: '0.9rem' }}>
                                        <p><strong>Email:</strong><br /><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></p>
                                        <p><strong>Phone:</strong><br />{CONTACT_INFO.phone}</p>
                                        <p><strong>Location:</strong><br />{CONTACT_INFO.location}</p>
                                        <p><strong>Web:</strong><br /><a href={`https://${CONTACT_INFO.web}`} target="_blank" rel="noreferrer">{CONTACT_INFO.web}</a></p>
                                        <p><strong>Github:</strong><br /><a href={`https://${CONTACT_INFO.github}`} target="_blank" rel="noreferrer">{CONTACT_INFO.github}</a></p>
                                    </div>
                                </section>

                                <section>
                                    <h2>Skills</h2>
                                    <ul style={{ paddingLeft: '1rem' }}>
                                        {SKILLS.map((skill, index) => <li key={index}>{skill}</li>)}
                                    </ul>
                                </section>

                                <section style={{ marginTop: '3rem' }}>
                                    <h2>Education</h2>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <strong>{EDUCATION.degree}</strong><br />
                                        <span className="sidebar-color" style={{ fontSize: '0.8rem' }}>{EDUCATION.school}, {EDUCATION.year}</span>
                                    </div>
                                </section>

                                <nav className="no-print" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--accent)' }}>
                                    <h2>Pages</h2>
                                    <ul style={{ paddingLeft: '1rem' }}>
                                        <li><a href="/cv">CV</a></li>
                                        <li><a href="/cover-letter">Cover Letter</a></li>
                                    </ul>
                                </nav>
                            </aside>
                        </td>

                        {/* --- RIGHT COLUMN (MAIN) --- */}
                        <td className="col-main">
                            <main className="main-content">
                                <header style={{ marginBottom: '3rem' }}>
                                    <h1>Ivo Štork</h1>
                                    <p style={{ fontSize: '1.2rem', color: 'var(--accent)' }}>IT Professional</p>
                                </header>

                                {children}
                            </main>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
