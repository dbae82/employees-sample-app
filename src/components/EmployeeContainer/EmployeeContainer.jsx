import React, { useState, useEffect } from "react";

const EmployeeContainer = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("api/employees")
      .then((res) => res.json())
      .then((json) => setEmployees(json.employees));
  }, []);

  return (
    <div>
      <Employee data={employees} />
    </div>
  );
};

export default EmployeeContainer;
