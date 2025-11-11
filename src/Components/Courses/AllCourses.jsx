import { useLoaderData } from 'react-router-dom';
import Course from '../Utilis/Course';
import Headings from '../Utilis/Headings';
const AllCourses = () => {
    const courses = useLoaderData()
    return (
        <section className="courses">
            <Headings sectionName={'Popular Courses'} Title={'Top Class Courses'} Desc={'Discover Courses Trusted By Thousands of Learners Worldwide'}></Headings>
            <div className="courses-container">
                {courses && courses.length > 0 ? (
                    courses.map(course => (
                        <Course
                            key={course._id}
                            thumbnail={course.thumbnail}
                            category={course.category}
                            title={course.title}
                            lessons={course.lessons}
                            students={course.students}
                            instructorName={course.instructor.name}
                            instructorImg={course.instructor.avatar}
                            instructorBio={course.instructor.title}
                            ratings={course.rating.average}
                            price={course.price}
                            link={`/courses/${course.slug}`}
                        />
                    ))
                ) : (
                    <p>No courses available.</p>
                )}
            </div>
           
        </section>
    );
};

export default AllCourses;