import { List, ListItem,  ListItemText} from '@material-ui/core';
import React, { memo, useEffect, useState } from 'react';
import basic from '../../api/basic';
import {useHistory } from 'react-router-dom';

const AvailableDoctors = memo((props) =>{

const[doctors, availableDoctors] = useState([]);

const [selectedEmployee, setSelectedEmployee] = useState('');
useEffect(() => {
    setSelectedEmployee(doctors.employee_id);
    console.log(selectedEmployee)
}, []) 


const onChangeCap = (e) =>{
    setSelectedEmployee(e.target.value)
    console.log(selectedEmployee)
  
}
const history = useHistory();
const rndr =  () =>{ 
    props.setempId(selectedEmployee)
    history.push('slotAvailability')
  }

useEffect(() => {
const getEmp = async () => {
        try{ 
            const response = await basic.get('/getAvailableEmployeeByDate',{
                params:{
                    "date":props.selDate,
                    "locationid":props.locaId,
                    "companyid":props.cmpId,
                },
              });
            console.log(response);
            availableDoctors(response.data);
           
        }catch(error){
            console.log(error);
        }
    };
    getEmp();
},[])

return(
    <div><center>
        <h1>Doctors</h1>
        <h3>Selected ComapnyId = {props.cmpId}</h3>
        <h3>Selected LocationId = {props.locaId}</h3>
        <h3>Selected Date = {props.selDate}</h3>
        <ul onClick={onChangeCap} >
        {
          doctors.map((x, index)=>(
            <li value={x.employee_id}>{x.employee_fname}</li>
       ))
          }
          </ul>


           <button onClick={rndr}> Click Me </button>
          </center>
    </div>
)

}
)
export default AvailableDoctors;