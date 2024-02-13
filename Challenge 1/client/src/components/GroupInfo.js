import React from "react";

const GroupInfo = () => {
  const groupInfoStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "5px",
    maxWidth: "96%",
    marginTop: "auto",
  };

  const groupTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const memberListStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const memberItemStyle = {
    margin: "10px 0",
  };

  return (
    <div style={groupInfoStyle}>
      <h2 style={groupTitleStyle}>Designed and implemented by:</h2>
      <ul style={memberListStyle}>
        <li style={memberItemStyle}>"Pranav Prashant" - <a href="mailto:ipranavprashant@gmail.com">ipranavprashant@gmail.com</a></li>
      </ul>
    </div>
  );
};

export default GroupInfo;
