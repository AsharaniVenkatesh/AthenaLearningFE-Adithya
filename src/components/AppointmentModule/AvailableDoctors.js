import { List, ListItem,  ListItemText} from '@material-ui/core';
import React, { memo, useEffect, useState } from 'react';
import basic from '../../api/basic';
import {useHistory } from 'react-router-dom';

const AvailableDoctors = memo((props) =>{

const[doctors, availableDoctors] = useState([]);

const [selectedEmployee, setSelectedEmployee] = useState(doctors.employee_id);
useEffect(() => {
    setSelectedEmployee(doctors.employee_id);
    console.log(selectedEmployee)
}, []) 
const history = useHistory();

const onChangeCap = (e) =>{
    setSelectedEmployee(e.target.value)
    console.log(selectedEmployee)
   return
   (
       <h1>{selectedEmployee}</h1>
   )
}

const rndr =  () =>{ 
    props.setEmpId(selectedEmployee)
    history.push('slotAvailability')
  }

useEffect(() => {
const getEmp = async () => {
        try{ 
            const response = await basic.get('/getAvailableEmployeeByDate',{
                params:{
                    "date":'2021-11-25',
                    "locationid":61,
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
},[props.cmpId])

return(
    <div><center>
        <h1>Doctors</h1>
        <h3>{props.cmpId}</h3>
        {
          doctors.map((x, index)=>(
        <ul onClick={onChangeCap} key={index} >
           
            <li value={x.employee_id}>{x.employee_fname}</li>
            
        </ul>
       ))
          }


           <button onClick={rndr}> Click Me </button>
          </center>
    </div>
)

}
)
export default AvailableDoctors;