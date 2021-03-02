import React from "react";
import Header from "../../components/Header/Header.jsx";
import SideNavbar from "../../components/SideNavbar/SideNavbar.jsx";
import "./dashBoard.scss";
const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Header />
      </div>
      <div className="dashboard-body">
        <div className="dashboard-sideNav">
          <SideNavbar />
        </div>
        <div className="dashboard-details"></div>
      </div>
    </div>
  );
};

export default DashBoard;
