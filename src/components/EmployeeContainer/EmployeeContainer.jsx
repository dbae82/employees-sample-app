import React, { useState, useEffect } from "react";

import Employee from "../Employee/Employee";

import { makeServer } from "../../server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const EmployeeContainer = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch("api/employees")
      .then((res) => res.json())
      .then((json) => setData(json.employees));
  }, []);

  return (
    <div>
      {data ? (
        <Employee data={data} />
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default EmployeeContainer;
