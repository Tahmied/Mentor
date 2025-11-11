import { useNavigate } from 'react-router-dom';
import './ctabtn.css';

const Ctabtn = ({ text, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <button onClick={handleClick} className="cta-btn-comp all-cta-btn">
      {text}
      <svg className="arrow-icon" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 3 L13 8 L8 13 M13 8 L3 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Ctabtn;
