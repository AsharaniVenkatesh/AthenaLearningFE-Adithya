import React, { memo, useEffect, useState } from 'react'
import './ApptHome.css'
import basic from '../../api/basic'
import {useHistory } from 'react-router-dom';

const ApptHome = memo((props) =>{

    const[result, getdata]=useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    useEffect(() => {
        const getCmp = async () => {
try{
    const response = await basic.get('/viewCompanies');
    console.log(response);
    getdata(response.data);

}catch(error){
    console.log(error);
}

        };
        getCmp();
    },[]);

    useEffect(() => {
        setSelectedCategory(result.companyId);
        console.log(selectedCategory)
    }, [])

    const onChangeDropdown = (e) => {
        setSelectedCategory(e.target.value)
        console.log(selectedCategory)
    }
    const history = useHistory();
    const rndr =  () =>{ 
        props.setcmpId(selectedCategory)
        history.push('availableDoctors')
      }
 
    return(
        <div className="centered">
            <h1>Welcome to Appointment Module</h1>

            <h2>Select Company</h2>
            <hr/>

           <select onChangeCapture={onChangeDropdown}>
           <option disabled>-- Select --</option>
          
               {
 result.map((x, index) => (
   
     <option value={x.companyId}>{x.companyName}</option>
    
                   ))
 } 
                
                </select>

                <button onClick={rndr}> Click Me </button>
               
        </div>
    )
}
);
export default ApptHome;