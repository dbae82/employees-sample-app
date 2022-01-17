import React, { useState, useEffect } from "react";

import Employee from "../Employee/Employee";

import { makeServer } from "../../server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const EmployeeContainer = () => {
  const [data, setData] = useState([]);
  const [expandAll, setExpandAll] = useState(false)

//   console.log(data);

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
      <Employee data={data} expandAll={expandAll} />
    </div>
  );
};

export default EmployeeContainer;
