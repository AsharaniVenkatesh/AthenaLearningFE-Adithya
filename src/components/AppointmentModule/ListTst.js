import React, { memo } from 'react'

const ListTst =memo((props) =>{

    return(
        <div>
            <h1>gtg</h1>
            <h2>{props.patientname}</h2>
            <h3>{props.cmpId}</h3>
        </div>
    )
})

export default ListTst;