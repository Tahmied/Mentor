import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import './course.css';

export default function CreateCourse() {
  const [courseData, setCourseData] = useState({
    title: '',
    thumbnail: '',
    price: '',
    duration: '',
    category: '',
    description: ''
  });

  const [lessons, setLessons] = useState([
    { title: '', videoUrl: '' }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLessonChange = (index, field, value) => {
    const updatedLessons = [...lessons];
    updatedLessons[index][field] = value;
    setLessons(updatedLessons);
  };

  const addLesson = () => {
    setLessons([...lessons, { title: '', videoUrl: '' }]);
  };

  const removeLesson = (index) => {
    if (lessons.length > 1) {
      setLessons(lessons.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!courseData.title || !courseData.thumbnail || !courseData.price || 
        !courseData.duration || !courseData.category || !courseData.description) {
      Swal.fire({
        title: 'Incomplete Form',
        text: 'Please fill in all course details',
        icon: 'warning',
        showConfirmButton: true
      });
      return;
    }

    const emptyLesson = lessons.find(lesson => !lesson.title || !lesson.videoUrl);
    if (emptyLesson) {
      Swal.fire({
        title: 'Incomplete Lessons',
        text: 'Please fill in all lesson titles and video URLs',
        icon: 'warning',
        showConfirmButton: true
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        title: courseData.title,
        description: courseData.description,
        thumbnail: courseData.thumbnail,
        price: parseFloat(courseData.price),
        duration: courseData.duration,
        category: courseData.category,
        lessons: lessons
      };

      await axios.post(`${import.meta.env.VITE_BACKEND}/api/v1/course/addCourse`, payload, {withCredentials:true});

      Swal.fire({
        title: 'Course Created',
        text: 'Your course has been created successfully',
        icon: 'success',
        showConfirmButton: true,
        timer: 2000
      });

      // Reset form
      setCourseData({
        title: '',
        thumbnail: '',
        price: '',
        duration: '',
        category: '',
        description: ''
      });
      setLessons([{ title: '', videoUrl: '' }]);

    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'Failed to create course',
        icon: 'error',
        showConfirmButton: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="course-form-container">
      <div className="course-form-wrapper">
        <div className="course-form-header">
          <h1 className="course-form-title">Create New Course</h1>
          <p className="course-form-subtitle">Fill in the details to create a new course for your students</p>
        </div>

        <form onSubmit={handleSubmit} className="course-form">
          {/* Course Details Section */}
          <div className="form-section">
            <h2 className="section-title">Course Details</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="title" className="form-label">Course Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={courseData.title}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., Complete Web Development Bootcamp"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category" className="form-label">Category</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={courseData.category}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., Web Development, AI/ML"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="price" className="form-label">Price (USD)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={courseData.price}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., 49.99"
                  step="0.01"
                  min="0"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="duration" className="form-label">Duration</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={courseData.duration}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., 3 hours 30 minutes"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="thumbnail" className="form-label">Thumbnail URL</label>
              <input
                type="url"
                id="thumbnail"
                name="thumbnail"
                value={courseData.thumbnail}
                onChange={handleInputChange}
                className="form-input"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                id="description"
                name="description"
                value={courseData.description}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Describe what students will learn in this course..."
                rows="4"
                required
              />
            </div>
          </div>

          {/* Lessons Section */}
          <div className="form-section">
            <div className="section-header">
              <h2 className="section-title">Course Lessons</h2>
              <button
                type="button"
                onClick={addLesson}
                className="btn-add-lesson"
              >
                + Add Lesson
              </button>
            </div>

            <div className="lessons-container">
              {lessons.map((lesson, index) => (
                <div key={index} className="lesson-item">
                  <div className="lesson-header">
                    <span className="lesson-number">Lesson {index + 1}</span>
                    {lessons.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeLesson(index)}
                        className="btn-remove"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="lesson-fields">
                    <div className="form-group">
                      <label className="form-label">Lesson Title</label>
                      <input
                        type="text"
                        value={lesson.title}
                        onChange={(e) => handleLessonChange(index, 'title', e.target.value)}
                        className="form-input"
                        placeholder="e.g., Introduction to HTML"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">YouTube Video URL</label>
                      <input
                        type="url"
                        value={lesson.videoUrl}
                        onChange={(e) => handleLessonChange(index, 'videoUrl', e.target.value)}
                        className="form-input"
                        placeholder="https://www.youtube.com/watch?v=..."
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-submit"
            >
              {isSubmitting ? 'Creating Course...' : 'Create Course'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}