import React, { useState,memo } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import {Link} from 'react-router-dom'
import Header from "../Header/Header";
import ShowDoctorsList from "./ShowDoctorsList";
import dayjs from "dayjs";
import {useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

const ShowCalender = memo((props) =>{
  
    const [dateState, setDateState] = useState(new Date())
    

    const changeDate = (e) => {
      setDateState(e)
      console.log(dateState);
    }

    var formattedDate = format(dateState, "yyyy-MM-dd");

    console.log(formattedDate);

    const history = useHistory();
const rndr =  () =>{ 
  props.setDate(formattedDate);
  history.push('availableDoctors')
  }
  
    return (
        <div>
        <center>
        
      
         <h1>Welcome to Online Appointment Module</h1>
             
        <Calendar 
        value={dateState}
        onChange={changeDate}
        minDate={new Date()}
        />
        
    <button onClick={rndr}> Click Me </button>
    </center>
      </div>
    )
   
}
)
export default ShowCalender