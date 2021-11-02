import React from 'react'
import Coursecard from '../Course-card/Coursecard'
import { Link } from 'react-router-dom'


import Slider from "react-slick";
import './CourseCatalog.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CourseCatalog = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const courseCat = () => {
        if (props.slider) {
            return (
                <Slider {...settings}>
                    {props.courses.map((course, index) => {
                        return (
                            <Coursecard
                                key={index}
                                page={`coursepage/${course.courseId}`}
                                imageSrc={course.imageSrc}
                                courseName={course.courseName}
                                courseId={course.courseId}
                                courseFeesInr={course.courseFeesInr}
                                courseDpimage={course.courseDpimage}
                                coursePublishedDate={course.coursePublishedDate}
                                teacherName={course.teacherName}
                                courseDescription={course.courseDescription}
                                courseShortnote1={course.courseShortnote1}
                                courseShortnote2={course.courseShortnote2}
                                courseShortnote3={course.courseShortnote3}
                            />
                        )
                    })}
                </Slider>
            )
        } else {
            return (
                props.courses.map((course, index) => {
                    return (
                        <Coursecard
                            key={index}
                            page={`coursepage/${course.courseId}`}
                            imageSrc={course.imageSrc}
                            courseName={course.courseName}
                            courseId={course.courseId}
                            courseFeesInr={course.courseFeesInr}
                            courseDpimage={course.courseDpimage}
                            coursePublishedDate={course.coursePublishedDate}
                            teacherName={course.teacherName}
                            courseDescription={course.courseDescription}
                            courseShortnote1={course.courseShortnote1}
                            courseShortnote2={course.courseShortnote2}
                            courseShortnote3={course.courseShortnote3}
                        />
                    )
                })
            )
        }
    }
    return (

        <>
            <div className="course-catalog">
                <h3 className="course-topic">{props.subHeading}</h3>
                <div className="wrap">
                    {courseCat()}
                </div>
                {props.loadMore ? <button className="load-more "><Link className="button-link" to="/courses">Load More</Link></button> : ''}

            </div>

        </>
    )
}

export default CourseCatalog
