import React from "react";
import GradientBtn from '../../components/gradient_button/gradient_button.jsx';
import GradientAvatarStyle from '../../components/avatar/avatar.jsx';
import MaterialNestedMenuStyle from '../../components/menu_drawer/menu_drawer.jsx';
import "./dashBoard.scss";
const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header"></div>
      <div className="dashboard-body">
        <div className="dashboard-sideNav"></div>
        <div className="dashboard-details">
         
          <MaterialNestedMenuStyle />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
