import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import EmptyState from '../Utilis/EmptyState';
import Loader from '../Utilis/Loader';
import './mycourses.css';

const MyCourses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [deletingCourseId, setDeletingCourseId] = useState(null);
  const navigate = useNavigate();


  const handleDeleteCourse = async (courseId, e) => {
    e.stopPropagation();
    // storing confirmation in a variable here
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    });
    // check the value of the variable to confirm it
    if (result.isConfirmed) {
      setDeletingCourseId(courseId);
      try {
        await axios.delete(`${import.meta.env.VITE_BACKEND}/api/v1/course/delete/${courseId}`, {
          withCredentials: true
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your course has been deleted.',
          icon: 'success',
          showConfirmButton: true,
          timer: 1000
        });
        setCourses(courses.filter(course => course._id !== courseId));
      } catch (error) {
        console.error('Error deleting course:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete course. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } finally {
        setDeletingCourseId(null);
      }
    }
  };


  useEffect(() => {
    async function getCourses() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND}/api/v1/course/my-courses`, {
          withCredentials: true
        });
        setCourses(res.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCourses();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>

      <Helmet>
        <title>My Courses | Mentor</title>
      </Helmet>
    
      <div className="instructor-courses-page">
        <div className="instructor-page-header">
          <div className="instructor-header-content">
            <h1 className="instructor-page-title">My Courses</h1>
            <p className="instructor-page-subtitle">Manage your published courses</p>
          </div>
          <button onClick={() => navigate('/create-course')} className="instructor-create-btn">
            <svg className="instructor-plus-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Create New Course
          </button>
        </div>

        {courses.length === 0 ? (
          <EmptyState title={'No courses yet'} text={'Start sharing your knowledge with the world by creating your first course.'} navigateBtnTxt={'Create Your First Course'} navigationLink={'/create-course'}></EmptyState>
        ) : (
          <div className="instructor-courses-grid">
            {courses.map((course) => (
              <div onClick={() => navigate(`/course/${course._id}`)} key={course._id} className="instructor-course-card">
                <div className="instructor-card-thumbnail">
                  <img src={course.thumbnail} alt={course.title} />
                  <button
                    className={`instructor-thumbnail-delete-btn ${deletingCourseId === course._id ? 'deleting' : ''}`}
                    onClick={(e) => handleDeleteCourse(course._id, e)}
                    disabled={deletingCourseId === course._id}
                    title="Delete course"
                  >
                    {deletingCourseId === course._id ? (
                      <div className="delete-spinner-small"></div>
                    ) : (
                      <svg className="instructor-delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="instructor-card-body">
                  <span className="instructor-card-category">{course.category}</span>
                  <h3 className="instructor-card-title">{course.title}</h3>
                  <div className="instructor-card-meta">
                    <div className="instructor-meta-item">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>Lessons {course.lessons.length}</span>
                    </div>
                  </div>
                </div>
                <div className="instructor-card-footer">
                  <div className="instructor-card-price">${course.price}</div>
                  <div className="instructor-card-actions">
                    <Link to={`/course/${course._id}`}>
                      <button className="instructor-view-btn" onClick={(e) => e.stopPropagation()}>
                        View
                      </button>
                    </Link>
                    <Link to={`/edit-course/${course._id}`}>
                      <button className="instructor-edit-btn" onClick={(e) => e.stopPropagation()}>
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>

  );
};

export default MyCourses;