import { useState } from 'react';

const VideoSection = ({thumbnail, id}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const videoId = id;

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="video-section">
      <div className="container">

        <div className="video-container">
          <div className="video-card">
            {!isVideoPlaying ? (
              <div 
                className="video-thumbnail" 
                onClick={playVideo}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={thumbnail} 
                  alt="Product Video" 
                  className="thumbnail-image"
                />
                <div className="video-overlay">
                  <button className="play-button" onClick={playVideo}>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle 
                        cx="40" 
                        cy="40" 
                        r="38" 
                        fill="#2563eb9c" 
                        fillOpacity="0.9" 
                        stroke="white" 
                        strokeWidth="2" 
                      />
                      <path d="M34 28L50 40L34 52V28Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="video-player">
                <iframe 
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title="YouTube Video"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;