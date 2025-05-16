import React, { useState } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';

const GeminiSummary = ({ search }) => {
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);

    const getSummary = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/api/gemini-summary', {
                title: search,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setSummary(response.data.summary);
        } catch (error) {
            console.error("Error fetching Gemini summary", error.message);
            setSummary("Could not fetch summary.");
        }
        setLoading(false);
    };

    const renderFormattedSummary = () => {
        if (!summary) return null;

        const sections = summary.split(/\n(?=\*\*|Pros|Cons|Predicted|Possible|Because|In Conclusion)/g).filter(sec => sec.trim());

        return (
            <div className="mt-4">
                {sections.map((section, idx) => {
                    const titleMatch = section.match(/^\*\*(.+?)\*\*/);
                    const title = titleMatch ? titleMatch[1] : null;
                    const content = title ? section.replace(titleMatch[0], '').trim() : section.trim();

                    let icon = <FaInfoCircle className="text-secondary me-2" />;
                    if (/pros/i.test(title)) icon = <FaCheckCircle className="text-success me-2" />;
                    if (/cons/i.test(title)) icon = <FaTimesCircle className="text-danger me-2" />;

                    return (
                        <div key={idx} className="mb-4">
                            {title && <h6 className="d-flex align-items-center fw-bold">{icon}{title}</h6>}
                            <div className="ps-3">
                                {content.split('\n').map((line, i) => (
                                    <p key={i} className="mb-1">{line.replace(/^[-•]/, '•')}</p>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <div className="p-4 border rounded shadow-sm bg-white my-3 w-75 mx-auto h-75">
                <h5 className="mb-3">Suggestions BY AI On {search}</h5>
                <button
                    className="btn btn-primary"
                    onClick={getSummary}
                    disabled={loading}
                >
                    {loading ? 'Loading Results...' : 'Get AI Feedback'}
                </button>

                {summary && (
                    <div className="mt-4 p-4 border rounded bg-light">
                        <h5 className="mb-3 text-primary">Gemini Summary</h5>
                        {renderFormattedSummary()}
                    </div>
                )}
            </div>
            <button
                className="btn btn-secondary position-fixed bottom-0 end-0 m-4"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑ Top
            </button>
        </>
    );
};

export default GeminiSummary;
