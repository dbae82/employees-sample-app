import React, { useState, useEffect } from "react";

import EmployeeCard from '../EmployeeCard/EmployeeCard';

import { makeServer } from "../../server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const EmployeeContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [expandAll, setExpandAll] = useState(false);
  const [error, setError] = useState(null);

  const generateEmployees = () => {
    return data.map((employee) => (
      <EmployeeCard
        key={employee.id}
        data={employee}
        expandAll={expandAll}
        updateEmployee={updateEmployee}
        deleteEmployee={deleteEmployee}
      />
    ));
  };

  const getEmployees = async () => {
    try {
      await fetch("api/employees")
        .then((res) => res.json())
        .then((json) => setData(json.employees));
      setIsLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  const updateEmployee = async (id, firstName, lastName) => {
    try {
      await fetch(`/api/employees/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
        }),
      });
      await getEmployees();
    } catch (e) {
      setError(e);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await fetch(`/api/employees/${id}`, { method: "DELETE" });
      await getEmployees();
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!error ? (
            <>
              <button onClick={() => setExpandAll(!expandAll)}>
                {!expandAll ? "Expand All" : "Collapse All"}
              </button>
              {generateEmployees()}
            </>
          ) : (
            <p>Something went wrong. Please try again.</p>
          )}
        </>
      )}
    </div>
  );
};

export default EmployeeContainer;
