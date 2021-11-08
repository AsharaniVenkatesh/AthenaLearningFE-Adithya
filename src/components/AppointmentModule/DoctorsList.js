import React from 'react'

const DoctorsList = (props) =>{
    console.log(props.data);
    return(
        <div>

            <h1>Doctors List</h1>
            <h2>{props.data}</h2>
            
        </div>
    )
}

export default DoctorsList;