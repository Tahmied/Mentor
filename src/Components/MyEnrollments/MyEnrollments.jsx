import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import EmptyState from "../Utilis/EmptyState";
import EnrolledCourse from "./EnrolledCourse";
import './myenrollments.css';

function getRandomRating() {
    const rating = Math.random() * (5 - 3) + 3;
    return Math.round(rating * 10) / 10;
}

const MyEnrollments = () => {
    const data = useLoaderData()
    const enrollmentsData = data.data
    console.log(enrollmentsData)
    return (
        <>

            <Helmet>
                <title>My Enrollments | Mentor</title>
            </Helmet>
            <section className="courses">

                {enrollmentsData.length === 0 ? (
                    <EmptyState title={'No Enrolled Courses Found'} text={'Start Learning by enrolling our courses'} navigateBtnTxt={'Enroll Your first Course'} navigationLink={'/courses'}></EmptyState>
                ) : (
                    <div className="courses-container">
                        {

                            enrollmentsData.map(course => {
                                return <EnrolledCourse
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
                                    link={course._id}
                                />
                            })

                        }
                    </div>
                )}


            </section>
        </>
    );
};

export default MyEnrollments;