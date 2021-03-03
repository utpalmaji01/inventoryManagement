import React, { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import SideNavbar from "../../components/SideNavbar/SideNavbar.jsx";
import "./dashBoard.scss";
const DashBoard = () => {
  const [isDrawerMin, setIsDrawerMin] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Notes");
  const setMenu = (value) => {
    setSelectedMenu(value);
  };

  const setListSize = () => {
    setIsDrawerMin(!isDrawerMin);
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Header setListSize={setListSize} />
      </div>
      <div className="dashboard-body">
        <div className="dashboard-sideNav">
          <SideNavbar
            isDrawerMin={isDrawerMin}
            selectedMenu={selectedMenu}
            setSelectedMenu={setMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
