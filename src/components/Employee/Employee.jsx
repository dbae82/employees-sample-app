import React from 'react'

import EmployeeCard from './EmployeeCard'

const Employee = (props) => {
    const generateEmployees = () => {
        return props.data.map((employee) => <EmployeeCard key={employee.id} data={employee} expandAll={props.expandAll} />)
    }

    return (
        <div>
            {generateEmployees()}
        </div>
    )
}

export default Employee
