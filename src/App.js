import React, { useState, useEffect } from 'react'

import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  let [employees, setEmployees] = useState([])

  console.log(employees);

  useEffect(() => {
    fetch('api/employees')
      .then(res => res.json())
      .then(json => setEmployees(json.employees))
  }, [])

  return (
    <div>
      <header>
        <h1>Employees</h1>
      </header>
    </div>
  );
}

export default App;
