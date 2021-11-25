import React, {memo,useEffect,useState} from 'react';
import basic from '../../api/basic';
import {useHistory } from 'react-router-dom';


const ShowLocations = memo((props) =>{
    const[locations, availableLocations] = useState([]);

    useEffect(() =>{
        const getLocation = async () =>{
            try{ 
                const response = await basic.get('/getLocation',{
                    params:{
                        "companyId":props.cmpId,
                    },
                  });
                console.log(response);
                availableLocations(response.data);
               
            }catch(error){
                console.log(error);
            }
        };
        getLocation();
    },[])

    const [selectedLocation, setSelectedLocation] = useState('');
useEffect(() => {
    setSelectedLocation(locations.locationId);
    console.log(selectedLocation)
}, []) 


const onChangeCap = (e) =>{
    setSelectedLocation(e.target.value)
    console.log(selectedLocation)
  
}
const history = useHistory();
const rndr =  () =>{ 
    props.setlocaId(selectedLocation)
    history.push('showCalender')
  }
  
    return(
        <div>
            <center>
            <h1>Select Locations</h1>
<h1>Selected ComapnyId = {props.cmpId}</h1>
            <ul onClick={onChangeCap} >
        {
          locations.map((x, index)=>(
            <li value={x.locationId}>{x.locationName}</li>
       ))
          }
          </ul>


           <button onClick={rndr}> Click Me </button>
            </center>


            
        </div>
    )
})

export default ShowLocations;