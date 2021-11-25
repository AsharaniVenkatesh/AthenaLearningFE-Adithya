import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Testing1 = () =>{

    

const {data, setData} = useState({});
    
useEffect(() => {
    axios.get('http://localhost:8080/EyeMobile/AvailableEmployeeByDate?companyid=1&date=2021-11-15&location_id=1&sessionid=mango&devicefingrprintid=orange', {
	headers: {
	  'Access-Control-Allow-Origin': '*',
	}
	}).then(function (response) {
		console.log('response is : ' + response.data);
	}).catch(function (error) {
		if (error.response) {
		  console.log(error.response.headers);
		} 
		else if (error.request) {
	      console.log(error.request);
		} 
		else {
		  console.log(error.message);
		}
	console.log(error.config);
});
});
    return(
        <div>
            <h1>Doctors List</h1>
        </div>
    )
}

export default Testing1;