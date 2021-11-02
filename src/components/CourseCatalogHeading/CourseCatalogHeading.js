import React from 'react'
import './CourseCatalogueHeading.css'
const CourseCatalogHeading = (props) => {

    if (props.name === '') {
        return null;
    } else
        return (

            <div className="course-catalog-header">
                <div className="course-catalog-title">
                    <h1>{props.name}</h1>
                </div>
                {props.dropDownNeeded && <div className="course-catalog-dropdown">
                    <span className="course-catalog-dropdown-header">Categories:</span>
                    <select onChange={props.onChangeDropdown}>
                        <option value="">All</option>
                        {props.categories.map((category, index) => {
                            return <option key={index} value={category.categoryName}>{category.categoryName}</option>
                        })}
                    </select>
                </div>
                }
                <div className="course-catalog-search">
                    {props.searchNeeded &&
                        <div className="container-1">
                            <input type="search" id="search" placeholder="Search..." disabled />
                        </div>}

                </div>
            </div>


        )


}

export default CourseCatalogHeading


CourseCatalogHeading.defaultProps = {
    name: 'Courses',
    searchNeeded: true,
    dropDownNeeded: true,
}