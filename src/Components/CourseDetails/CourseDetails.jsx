import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import EmptyState from '../Utilis/EmptyState';
import './courseDetails.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND}/api/v1/course/${courseId}`,
          { withCredentials: true }
        );
        setCourse(response.data.data);
        setIsLoading(false);
      } catch (err) {
        <EmptyState title={'Course Not Found'} text={'Your reuqested course is not available'} navigateBtnTxt={'Check Other Courses'} navigationLink={'/courses'}></EmptyState>
        setIsLoading(false);
      }
    };

    if (courseId) {
      fetchCourseDetails();
    }
  }, [courseId]);

  async function enrollCourse() {
    try {
      const accessToken = localStorage.getItem('accessToken');
      await axios.post(`${import.meta.env.VITE_BACKEND}/api/v1/course/${courseId}/enroll`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }, withCredentials: true
      })
      Swal.fire({
        title: 'Course enrolled',
        text: 'You can access this course in My enrollment page',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000
      }).then(() => navigate('/my-enrollments'))
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const checkIfEnrolled = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND}/api/v1/course/check-enrollment/${courseId}`,
          { withCredentials: true }
        );
        setIsEnrolled(res.data.data.isEnrolled);
        
      } catch (error) {
        
      }
    };

    if (courseId) checkIfEnrolled();
  }, [courseId]);


  if (isLoading) {
    return (
      <div className="course-details-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <>
        <Helmet>
          <title> Error Getting Course | Mentor</title>
        </Helmet>
        <div className="course-details-container">
          <div className="error-message">
            <EmptyState title={'Course Not Found'} text={'Your reuqested course is not available'} navigateBtnTxt={'Check Other Courses'} navigationLink={'/courses'}></EmptyState>
          </div>
        </div>
      </>

    );
  }

  return (
    <>
      <Helmet>
        <title> {course.title} | Mentor</title>
      </Helmet>

      <div className="course-details-container">
        <div className="course-details-wrapper">
          <div className="course-header">
            <div className="course-header-content">
              <div className="breadcrumb">
                <span className="breadcrumb-item">{course.category}</span>
              </div>

              <h1 className="course-title-detail">{course.title}</h1>

              <p className="course-description">{course.description}</p>

              <div className="course-meta">
                <div className="meta-item">
                  <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>{course.duration}</span>
                </div>

                <div className="meta-item">
                  <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                    <circle cx="9" cy="7" r="4" strokeWidth="2" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
                  </svg>
                  <span>{course.lessons?.length || 0} Lessons</span>
                </div>
              </div>

              <div className="instructor-info">
                <img
                  src={course.instructor.dpPath}
                  alt={course.instructor.fullName}
                  className="instructor-avatar"
                />
                <div className="instructor-details">
                  <span className="instructor-label">Instructor</span>
                  <span className="instructor-name">{course.instructor.fullName}</span>
                </div>
              </div>
            </div>

            <div className="course-sidebar">
              <div className="course-details-thumbnail-wrapper">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="course-details-thumbnail"
                />
              </div>

              <div className="course-price-card">
                <div className="price-section">
                  <span className="price-label">Course Price</span>
                  <span className="price-amount">${course.price}</span>
                </div>

                <button
                  className="enroll-button"
                  onClick={() => {
                    if (isEnrolled) {
                      navigate(`/watch/${courseId}`);
                    } else {
                      enrollCourse();
                    }
                  }}
                >
                  {isEnrolled === null ? (
                    <span className="spinner"></span>
                  ) : isEnrolled ? (
                    'Watch Lectures'
                  ) : (
                    'Enroll Now'
                  )}
                </button>


                <div className="course-includes">
                  <h3 className="includes-title">This course includes:</h3>
                  <ul className="includes-list">
                    <li className="includes-item">
                      <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{course.lessons?.length || 0} video lessons</span>
                    </li>
                    <li className="includes-item">
                      <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Lifetime access</span>
                    </li>
                    <li className="includes-item">
                      <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Certificate of completion</span>
                    </li>
                    <li className="includes-item">
                      <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Access on mobile and desktop</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="course-details-section">
            <h2 className="section-title">What You'll Learn</h2>
            <div className="learning-outcomes">
              <p className="learning-description">{course.description}</p>
            </div>
          </div>

          <div className="course-details-section">
            <h2 className="section-title">Course Details</h2>
            <div className="details-grid">
              <div className="detail-card">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
                    <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="detail-title">Duration</h3>
                <p className="detail-value">{course.duration}</p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="detail-title">Lessons</h3>
                <p className="detail-value">{course.lessons?.length || 0} Videos</p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="7" r="4" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="detail-title">Level</h3>
                <p className="detail-value">All Levels</p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="detail-title">Category</h3>
                <p className="detail-value">{course.category}</p>
              </div>
            </div>
          </div>

          <div className="course-details-section">
            <h2 className="section-title">About the Instructor</h2>
            <div className="instructor-card">
              <img
                src={course.instructor.dpPath}
                alt={course.instructor.fullName}
                className="instructor-card-avatar"
              />
              <div className="instructor-card-content">
                <h3 className="instructor-card-name">{course.instructor.fullName}</h3>
                <p className="instructor-card-description">
                  Expert instructor with years of experience in {course.category}.
                  Dedicated to helping students achieve their learning goals through
                  practical, hands-on teaching methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default CourseDetails;