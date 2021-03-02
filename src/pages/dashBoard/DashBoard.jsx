import React from "react";
import Header from "../../components/Header/Header.jsx";
import "./dashBoard.scss";
const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header"></div>
      <div className="dashboard-body">
        <div className="dashboard-sideNav"></div>
        <div className="dashboard-details"></div>
      </div>
    </div>
  );
};

export default DashBoard;
