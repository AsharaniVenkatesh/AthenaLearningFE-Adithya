import React from 'react';
import { Link } from 'react-router-dom';

import DoctorDetails from './DoctorsDetails';

function DoctorCard(props){


    return (
       <Link to={`/doctor/${props.doctor.courseId}`}>
        <div>
          {props.doctor.courseName}
        </div>
        </Link>
    )
}

export default DoctorCard;