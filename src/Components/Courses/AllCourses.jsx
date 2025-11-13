import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Course from '../Utilis/Course';
import Headings from '../Utilis/Headings';
import './allcourse.css';

function getRandomRating() {
    const rating = Math.random() * (5 - 3) + 3;
    return Math.round(rating * 10) / 10;
}

const AllCourses = () => {
    const fetchData = useLoaderData();
    const coursesData = fetchData.data;
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(coursesData.map(course => course.category))];
        return ['All', ...uniqueCategories.sort()];
    }, [coursesData]);

    const filteredCourses = useMemo(() => {
        if (selectedCategory === 'All') {
            return coursesData;
        }
        return coursesData.filter(course => course.category === selectedCategory);
    }, [coursesData, selectedCategory]);

    return (
        <>
            <Helmet>
                <title> All Courses | Mentor</title>
            </Helmet>
            <section className="courses">
                <Headings
                    sectionName={'Popular Courses'}
                    Title={'Top Class Courses'}
                    Desc={'Discover Courses Trusted By Thousands of Learners Worldwide'}
                />

                <div className="filter-container">
                    <div className="filter-wrapper">
                        <label htmlFor="category-filter" className="filter-label">
                            Filter by Category:
                        </label>
                        <div className="select-wrapper">
                            <select
                                id="category-filter"
                                className="category-select"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <svg className="select-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="results-count">
                            {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'}
                        </span>
                    </div>
                </div>

                <div className="courses-container">
                    {filteredCourses && filteredCourses.length > 0 ? (
                        filteredCourses.map(course => (
                            <Course
                                key={course._id}
                                thumbnail={course.thumbnail}
                                category={course.category}
                                title={course.title}
                                lessons={course.lessons}
                                instructorName={course.instructor?.fullName || "Unknown Instructor"}
                                instructorImg={course.instructor?.dpPath || "/default-avatar.png"}
                                instructorBio={course.instructor?.title || ""}
                                ratings={getRandomRating()}
                                price={course.price}
                                link={`/course/${course._id}`}
                            />
                        ))
                    ) : (
                        <p className="no-courses-message">No courses available in this category.</p>
                    )}
                </div>
            </section>
        </>

    );
};

export default AllCourses;