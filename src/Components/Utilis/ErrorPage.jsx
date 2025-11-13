import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="error-actions">
          <button 
            className="btn-primary" 
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
          <button 
            className="btn-secondary" 
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;