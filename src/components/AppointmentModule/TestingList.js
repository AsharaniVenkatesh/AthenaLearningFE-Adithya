import React, { memo , useState} from 'react';
import { Link } from 'react-router-dom';

const TestingList = memo((props) =>{
   

    function fun(){
       
        let name=document.querySelector("#name");
        
        props.setpatientname(name.value);
       
    }
    

    return(
        <div>
            <h1>ff</h1>

            <input type="text" id="name" /><br/><br/>

            <Link to="/abcLis">

                <input type="button" value="Add Name" onClick={fun}/>
            </Link>
        </div>
    )
})

export default TestingList;