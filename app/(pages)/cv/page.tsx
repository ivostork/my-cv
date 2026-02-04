import { SKILLS, EXPERIENCE, EDUCATION } from '../../lib/cvData';

export default function CVPage() {
    return (
        <>
            <section>
                <h2>Summary</h2>
                <p>
                    IT professional with over 10 years of experience in the software industry, combining technical expertise
                    with strong problem-solving skills. Background in web technologies (HTML/CSS) and deep understanding
                    of software development life cycles. Currently transitioning to a technical support role to leverage
                    fluent English and rapidly improving German.
                </p>
            </section>

            <section>
                <h2>Work Experience</h2>
                {EXPERIENCE.map((job, index) => (
                    <article className="job-card" key={index}>
                        <div className="job-meta">
                            <h3>{job.company}</h3>
                            <span className="date">{job.period}</span>
                        </div>
                        <div className="job-title">{job.role}</div>
                        <ul>
                            {job.bullets.map((bullet, bIndex) => <li key={bIndex}>{bullet}</li>)}
                        </ul>
                    </article>
                ))}
            </section>
        </>
    );
}
