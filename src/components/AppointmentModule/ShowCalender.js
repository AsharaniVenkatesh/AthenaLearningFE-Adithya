import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import {Link} from 'react-router-dom'
import Header from "../Header/Header";
import ShowDoctorsList from "./ShowDoctorsList";

const ShowCalender = () =>{
  const name = "Sharath";
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
      setDateState(e)
    }
    const userSelectedDate=0;
   

    const handleRoute = () =>{

    }
    return (
        <div>
        <Header />
        
      
         <h1>Welcome to Online Appointment Module</h1>
             
        <Calendar 
        value={dateState}
        onChange={changeDate}
        minDate={new Date()}
        />
      userSelectedDate= {moment(dateState).format("yyyy-MM-DD")}<br/><br/><br/>
      <ShowDoctorsList data={name}/>
      <button><Link to="/showDoctorsList" >Submit</Link></button>
      
      </div>
    )
   
}
export default ShowCalender