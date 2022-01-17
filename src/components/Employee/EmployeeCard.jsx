import React from 'react'

const EmployeeCard = (props) => {
    return (
        <div>
            <h1>{props.data.firstName} {props.data.lastName}</h1>
        </div>
    )
}

export default EmployeeCard
