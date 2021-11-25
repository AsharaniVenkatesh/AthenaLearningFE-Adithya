import React from 'react'

const ShowDoctorsList = (props) =>{
    console.log(props.data);
    return(
        <div>

            <h1>Doctors List</h1>
            <h2>{props.data}</h2>

            <h2>List of Available Doctors</h2>
            
        </div>
    )
}

export default ShowDoctorsList;