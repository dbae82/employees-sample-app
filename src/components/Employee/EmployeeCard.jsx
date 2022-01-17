import React from 'react'

const EmployeeCard = (props) => {
    return (
        <div>
            <img src={props.data.avatar} alt='profile-pic' height='100px' width='125px' />
            <h1>{props.data.firstName} {props.data.lastName}</h1>
            <p>{props.data.email}</p>
        </div>
    )
}

export default EmployeeCard
