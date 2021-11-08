import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CourseCatalog from '../CourseCatalog/CourseCatalog'
import basic from '../../api/basic'
import CourseCatalogHeading from '../CourseCatalogHeading/CourseCatalogHeading'

const Courses = () => {

    const [courses, setCourses] = useState([])
    const [Categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    useEffect(() => {
        // async and await
        const getCoursesDetails = async () => {
            const response = await basic.get('/getCourseDetails')
            setCourses(response.data)
        }
        getCoursesDetails()
        const getAllCategories = async () => {
            const response = await basic.get('/getAllCategories')
            setCategories(response.data)
        }
        getAllCategories()

    }, [])
    useEffect(() => {
        setSelectedCategory(Categories.categoryName)
        console.log(selectedCategory)
    }, [])
    const onChangeDropdown = (e) => {
        setSelectedCategory(e.target.value)
        console.log(selectedCategory)
    }
    
    return (
        <div>
            <Header />
            <CourseCatalogHeading name="Top Courses" searchNeeded={false} dropDownNeeded={true} categories={Categories} onChangeDropdown={onChangeDropdown} />
            {Categories.map((category, index) => {
                const course = courses.filter(courses => courses.categoryName === category.categoryName)
                if (course.length > 0) {
                    return (
                        <CourseCatalog key={index}
                            loadMore={false}
                            subHeading={`Courses on ${category.categoryName}`}
                            searchNeeded={true}
                            courses={course}
                            slider={false}
                        />
                    )
                } else {
                    return null
                }
            })}


            <Footer />
        </div>
    )
}

export default Courses
