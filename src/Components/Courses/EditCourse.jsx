import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from '../Utilis/Loader';
import './course.css';

export default function EditCourse() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    console.log(courseId)

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

    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND}/api/v1/course/${courseId}`);
                const course = response.data.data;

                setCourseData({
                    title: course.title || '',
                    thumbnail: course.thumbnail || '',
                    price: course.price || '',
                    duration: course.duration || '',
                    category: course.category || '',
                    description: course.description || ''
                });

                if (course.lessons && course.lessons.length > 0) {
                    setLessons(course.lessons.map(lesson => ({
                        title: lesson.title || '',
                        videoUrl: lesson.videoUrl || ''
                    })));
                }

                setIsLoading(false);
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to load course data',
                    icon: 'error',
                    showConfirmButton: true
                });
                setIsLoading(false);
            }
        };

        if (courseId) {
            fetchCourse();
        }
    }, [courseId]);

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

            await axios.put(`${import.meta.env.VITE_BACKEND}/api/v1/course/updateCourse/${courseId}`, payload, { withCredentials: true });

            Swal.fire({
                title: 'Course Updated',
                text: 'Your course has been updated successfully',
                icon: 'success',
                showConfirmButton: true,
                timer: 2000
            });

        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.response?.data?.message || 'Failed to update course',
                icon: 'error',
                showConfirmButton: true
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="course-form-container">
                <Loader></Loader>
            </div>
        );
    }

    return (
        <div className="course-form-container">
            <div style={{maxWidth:'900px',width:'80%',margin:'0 auto'}} className="profile-header">
                <h1></h1>
                <div className="profile-header-actions">
                    <button onClick={() => navigate('/my-courses')} className="cancel-btn">
                        Cancel
                    </button>
                </div>
            </div>

            <div className="course-form-wrapper">
                <div className="course-form-header">
                    <h1 className="course-form-title">Edit Course</h1>
                    <p className="course-form-subtitle">Update your course details and content</p>
                </div>

                <form onSubmit={handleSubmit} className="course-form">
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

                    <div className="form-actions">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-submit"
                        >
                            {isSubmitting ? 'Updating Course...' : 'Update Course'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}