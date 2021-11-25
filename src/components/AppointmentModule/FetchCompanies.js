import Resct, { useEffect, useState } from 'react'

function FetchCompanies(){
    const[result,cmpList] = useState([]);

    useEffect(()=>{
        fetch('http://athenabe1-env.eba-sqdwnu7u.us-east-2.elasticbeanstalk.com/api/viewCompanies',
        {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        })
        .then(resp=>resp.json())
        .then(resp=>cmpList(resp))
    },[])

    

    return(
        <div>
            <center>
                <h1>View Companies</h1>

                <select>
                    <option disabled selected>-- Select --</option>
                    {
                        result.map(x=>{
                            return(
                                <option title={x.companyId}>{x.companyName}</option>
                            )
                        })
                       
                    }
                    
                </select>
                <h1></h1>
            </center>
        </div>
    )
}

export default FetchCompanies;