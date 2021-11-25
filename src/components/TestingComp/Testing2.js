import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DoctorCard from './DoctorCard';

function Testing2 (){

    const url = 'http://athenabe1-env.eba-sqdwnu7u.us-east-2.elasticbeanstalk.com/api/getAllCourses';
    const[doctors, setDoctors] = useState({
      data:null,
      error: false
    })
        let  content = null;

  useEffect(() =>{
    setDoctors({
      loading:true,
      data:null,
      error:false

    })
    axios.get(url)
    .then(response => {
      setDoctors({
        loading:false,
        data:response.data,
        error:false
      })
    })
    .catch(()=>{
      setDoctors({
        loading:false,
        data:null,
        error:true
      })
    })
  }, [url])
    

  if(doctors.data){
    content = 
    doctors.data.map((doctor, key) => 
      <div>
       <DoctorCard doctor={doctor}/>
      </div>
    )
  }

    return(

        <div>
            <h1>Testing 2</h1>
           <h1>{content}</h1>
               
          
            
           
        </div>
    )

} 

export default Testing2;