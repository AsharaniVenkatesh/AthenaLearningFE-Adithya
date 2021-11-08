import React from "react";
import DoctorsList from "./DoctorsList";

const ApptWelcome = () =>{
  const name = "Sharath";
  
    return (
        <div>
       
     <DoctorsList data={name}/>
     
      
      </div>
    )
   
}
export default ApptWelcome