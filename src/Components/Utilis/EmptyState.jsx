import { useNavigate } from "react-router-dom";

const EmptyState = ({title, text, navigateBtnTxt, navigationLink}) => {
    const navigate = useNavigate()
    return (
        <div className="empty-state">
            <div className="empty-state-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
            </div>
            <h2 className="empty-state-title">{title}</h2>
            <p className="empty-state-description">
                {text}
            </p>
            <button onClick={() => navigate(`${navigationLink}`)} className="empty-state-btn">
                <svg className="empty-state-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                {navigateBtnTxt}
            </button>
        </div>
    );
};

export default EmptyState;