import React, { useState, useEffect } from "react";

const EmployeeCard = (props) => {
  const [expand, setExpand] = useState(false);
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    if (props.expandAll === true) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  }, [props.expandAll]);

  return (
    <div>
      <img
        src={props.data.avatar}
        alt="profile-pic"
        height="100px"
        width="125px"
      />
      <h1>
        {props.data.firstName} {props.data.lastName}
      </h1>
      <p>{props.data.email}</p>
      {!expand ? (
        <></>
      ) : (
        <>
          <button onClick={() => setUpdate(!update)}>
            {!update ? "Update" : "Cancel"}
          </button>
          <address>
            Address: {props.data.address.streetAddress},{" "}
            {props.data.address.city}, {props.data.address.state}{" "}
            {props.data.address.zipCode}
          </address>
          <address>Phone: {props.data.phone}</address>
          <p>Bio: {props.data.bio}</p>
        </>
      )}
      <button onClick={() => setExpand(!expand)}>
        {!expand ? "Expand" : "Collapse"}
      </button>
      <button onClick={() => props.deleteEmployee(props.data.id)}>
        Delete
      </button>
    </div>
  );
};

export default EmployeeCard;
