import { useLoaderData } from 'react-router-dom';
import Course from '../Utilis/Course';
import Ctabtn from '../Utilis/Ctabtn';
import Headings from '../Utilis/Headings';
import './courses.css';

function getRandomRating() {
  const rating = Math.random() * (5 - 3) + 3; 
  return Math.round(rating * 10) / 10;
}


const Courses = () => {
    const fetchData = useLoaderData()
    const coursesData = fetchData.data
    console.log(coursesData)
    const courses = coursesData.slice(0, 6);
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
                            instructorName={course.instructor.fullName}
                            instructorImg={course.instructor.dpPath}
                            instructorBio={course.instructor.title}
                            ratings={getRandomRating()}
                            price={course.price}
                            link={`/course/${course._id}`}
                        />
                    ))
                ) : (
                    <p>No courses available.</p>
                )}
            </div>
            <Ctabtn text={'View All Courses'} link={'/courses'}></Ctabtn>
        </section>
    );
};

export default Courses;