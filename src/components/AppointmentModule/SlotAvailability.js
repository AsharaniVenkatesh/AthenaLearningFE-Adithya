import React, {memo,useState, useEffect} from 'react'
import ShowCalender from './ShowCalender'
import ShowDoctorsList from './ShowDoctorsList'
import basic from '../../api/basic'

const SlotAvailability = memo((props) =>{
    const[slots, availableSlots] = useState([]);
    useEffect(() => {
       const getSlots = async () =>{
           try{

            const response = await basic.get('/viewAvailableSlots',{
                params:{
                    "date":'2021-11-25',
                    "location_id":61,
                    "companyid":props.cmpId,
                    "empid":250
                },
              });
            console.log(response);
            availableSlots(response.data);


           }catch(error){
            console.log(error);
        }
       }
       getSlots();
    }, [props.cmpId])
const slotsList = slots.map((x)=> <li>{x.slot_time}</li>)
    return(
        <div>
            <h1>{props.cmpId}</h1>
            <h1>{props.empId}</h1>
<ul>
            {
               slotsList.map((x)=>(
                   <li>{x}</li>
               )) 
            }
</ul>
        </div>
    )
}
)
export default SlotAvailability