import { COVER_LETTER } from '../../lib/coverLetterData';

export default function CoverLetterPage() {
    return (
        <section>
            <h2>Cover Letter</h2>
            <div style={{ lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
                <p>{COVER_LETTER.salutation}</p>
                <br />
                {COVER_LETTER.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <br />
                <p>{COVER_LETTER.closing}</p>
                <p>{COVER_LETTER.signature}</p>
            </div>
        </section>
    );
}
