import { useLoaderData } from 'react-router-dom';
import Course from '../Utilis/Course';
import Headings from '../Utilis/Headings';


function getRandomRating() {
    const rating = Math.random() * (5 - 3) + 3;
    return Math.round(rating * 10) / 10;
}

const AllCourses = () => {
    const fetchData = useLoaderData()
    const coursesData = fetchData.data
    return (
        <section className="courses">
            <Headings sectionName={'Popular Courses'} Title={'Top Class Courses'} Desc={'Discover Courses Trusted By Thousands of Learners Worldwide'}></Headings>
            <div className="courses-container">
                {coursesData && coursesData.length > 0 ? (
                    coursesData.map(course => (
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
                    <p>No courses available.</p>
                )}
            </div>

        </section>
    );
};

export default AllCourses;