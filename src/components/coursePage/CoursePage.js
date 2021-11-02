import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './CoursePage.css'
// import { useParams } from 'react-router-dom'
const CoursePage = (props) => {
    // const { courseId } = useParams();
    // console.log(props.location.state)
    const course = props.location.state;
    return (

        <>
            <Header />
            <div className="coursepage">
                <div className="coursepage-header">
                    <div className="coursepage-header-left">
                        <h1>{course.courseName}</h1>
                        <p>Created by {course.courseTeacher}</p>
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                    <div className="coursepage-header-right">
                        <div className="coursepage-header-right-1">
                            <div className="coursepage-header-right-1-img">
                                <img src={course.courseImage} alt={course.courseName} />
                            </div>
                            <div className="coursepage-header-right-1-amt">
                                Rs.{course.courseFeesInr}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="coursepage-links">
                <ul className="nav-menu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#instructor">Instructors</a></li>
                    <li><a href="#syllabus">Syllabus</a></li>


                </ul>
            </div>
            <div className="about" id="about">
                <div className="about-header">
                    <h2>About this course</h2>
                </div>
                <div className="about-content">
                    <p>
                        {course.courseDescription}
                    </p>
                </div>
            </div>
            <div className="instructor" id="instructor">
                <div className="instructor-header">
                    <h2>Instructors</h2>
                </div>
                <div className="instructor-content">
                    <div className="instructor-content-1">
                        <div className="instructor-content-1-img">
                            <img src="../../assets/images/s.jpeg" alt={course.courseTeacher} />
                        </div>
                        <div className="instructor-content-1-right">
                            <div className="instructor-content-1-name">
                                <h3>{course.courseTeacher}</h3>
                            </div>
                            <div className="instructor-content-1-desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec eget ex vitae nunc tincidunt egestas.
                                    Sed euismod, urna eu tincidunt efficitur,
                                    nisl nunc maximus nisi, eu tincidunt nisl nunc euismod nisi.
                                    Sed euismod, urna eu tincidunt efficitur,
                                    nisl nunc maximus nisi, eu tincidunt nisl
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="syllabus" id="syllabus">
                <div className="instructor-header">
                    <h2>Syllabus</h2>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default CoursePage
