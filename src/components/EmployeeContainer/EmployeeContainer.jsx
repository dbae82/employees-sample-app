import React, { useState, useEffect } from "react";

import Employee from "../Employee/Employee";

import { makeServer } from "../../server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const EmployeeContainer = () => {
  const [data, setData] = useState([]);
  const [expandAll, setExpandAll] = useState(false);

  const updateEmployee = async (id, firstName, lastName) => {
    try {
      await fetch(`/api/employees/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
        }),
      });
    } catch (error) {}
  };

  const deleteEmployee = async (id) => {
    try {
      await fetch(`/api/employees/${id}`, { method: "DELETE" });
      setData(data.filter((employee) => employee.id !== id));
    } catch (error) {}
  };

  useEffect(() => {
    fetch("api/employees")
      .then((res) => res.json())
      .then((json) => setData(json.employees));
  }, []);

  return (
    <div>
      <button onClick={() => setExpandAll(!expandAll)}>
        {!expandAll ? "Expand All" : "Collapse All"}
      </button>
      <Employee
        data={data}
        expandAll={expandAll}
        updateEmployee={updateEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
};

export default EmployeeContainer;
