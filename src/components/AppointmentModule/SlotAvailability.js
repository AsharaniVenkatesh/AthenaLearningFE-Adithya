import React, {memo,useState, useEffect} from 'react'
import basic from '../../api/basic'

const SlotAvailability = memo((props) =>{
    const[slots, availableSlots] = useState([]);

    useEffect(() => {
       const getSlots = async () =>{
           try{

            const response = await basic.get('/viewAvailableSlots',{
                params:{
                    "date":props.selDate,
                    "location_id":props.locaId,
                    "companyid":props.cmpId,
                    "empid":props.empId,
                },
              });
            console.log(response);
            availableSlots(response.data);


           }catch(error){
            console.log(error);
        }
       }
       getSlots();
    },[])

    return(
        <div>
            <center>
            <h3>Selected EmployeeID ={props.empId}</h3>
              <h3>Selected ComapnyId = {props.cmpId}</h3>
        <h3>Selected LocationId = {props.locaId}</h3>
        <h3>Selected Date = {props.selDate}</h3>
        </center>
            {
              slots.map((x)=>(
                <ul>
                   <li>{x.slot_time}</li>
                   </ul>
               )) 
            }

        </div>
    )
}
)
export default SlotAvailability