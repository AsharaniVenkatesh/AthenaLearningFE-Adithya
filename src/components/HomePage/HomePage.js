import React, { useState, useEffect } from 'react'
import Banner from '../Banner/Banner'
import CourseCatalog from '../CourseCatalog/CourseCatalog'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import basic from '../../api/basic'
import CourseCatalogHeading from '../CourseCatalogHeading/CourseCatalogHeading'

const HomePage = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        //asyn and await
        const getCourses = async () => {
            const courses = await basic.get('/getCourseDetails')
            setCourses(courses.data)
        }
        getCourses()
    }, [])
    return (
        <>
            <Header />
            <Banner />
            <CourseCatalogHeading name="Course Catalog" searchNeeded={true} dropDownNeeded={false} />
            <CourseCatalog loadMore={true} subHeading="Popular Courses" courses={courses} slider={true} />
            <Footer />
        </>
    )
}

export default HomePage
