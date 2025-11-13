import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Watch.css';

const Watch = () => {
  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(new Set());

  useEffect(() => {
    getCourseData();
  }, [courseId]);

  async function getCourseData() {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/v1/course/${courseId}`,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
      setLessons(res.data.data.lessons);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching course data:', error);
      setLoading(false);
    }
  }

  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const handleLessonClick = (index) => {
    setCurrentLessonIndex(index);
    setCourseCompleted(false);
  };

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      setCourseCompleted(false);
    }
  };

  const handleNext = () => {
    const newCompleted = new Set(completedLessons);
    newCompleted.add(currentLessonIndex);
    setCompletedLessons(newCompleted);

    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else {
      setCourseCompleted(true);
    }
  };

  const markAsComplete = () => {
    const newCompleted = new Set(completedLessons);
    newCompleted.add(currentLessonIndex);
    setCompletedLessons(newCompleted);
  };

  if (loading) {
    return (
      <div className="watch-container">
        <div className="loading">Loading course...</div>
      </div>
    );
  }

  if (lessons.length === 0) {
    return (
      <div className="watch-container">
        <div className="no-lessons">No lessons available for this course.</div>
      </div>
    );
  }

  const currentLesson = lessons[currentLessonIndex];
  return (
    <div className="watch-container">
      <div className="watch-content">
        <div className="video-section-course">
          {!courseCompleted ? (
            <>
              <div className="video-wrapper">
                <iframe
                  src={getYoutubeEmbedUrl(currentLesson.videoUrl)}
                  title={currentLesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="video-info">
                <div className="video-header">
                  <h1 className="video-title">{currentLesson.title}</h1>
                  <span className="lesson-number">
                    Lesson {currentLessonIndex + 1} of {lessons.length}
                  </span>
                </div>
                
                <div className="video-controls">
                  <button
                    className="control-btn"
                    onClick={handlePrevious}
                    disabled={currentLessonIndex === 0}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Previous
                  </button>
                  
                  <button className="mark-complete-btn" onClick={markAsComplete}>
                    {completedLessons.has(currentLessonIndex) ? '✓ Completed' : 'Mark as Complete'}
                  </button>
                  
                  <button
                    className="control-btn primary"
                    onClick={handleNext}
                  >
                    {currentLessonIndex === lessons.length - 1 ? 'Complete Course' : 'Next'}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="completion-card">
              <h2>Course Completed!</h2>
              <p>Congratulations! You've completed all {lessons.length} lessons.</p>
              <button 
                className="review-btn"
                onClick={() => {
                  setCurrentLessonIndex(0);
                  setCourseCompleted(false);
                }}
              >
                Review Lessons
              </button>
            </div>
          )}
        </div>

        <div className="lessons-sidebar">
          <div className="sidebar-header">
            <h2>Course Content</h2>
            <div className="progress-info">
              <span>{completedLessons.size}/{lessons.length} Completed</span>
            </div>
          </div>
          
          <div className="lessons-list">
            {lessons.map((lesson, index) => (
              <div
                key={lesson._id}
                className={`lesson-item-watch ${
                  index === currentLessonIndex ? 'active' : ''
                } ${completedLessons.has(index) ? 'completed' : ''}`}
                onClick={() => handleLessonClick(index)}
              >
                <div className="lesson-number-badge">{index + 1}</div>
                <div className="lesson-details">
                  <h3>{lesson.title}</h3>
                  {completedLessons.has(index) && (
                    <span className="completed-badge">Completed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;