import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import vsCodeLogo from "../../assets/image/vsCodeLogo.png";
import "./header.scss";
import React from "react";
const Header = () => {
  return (
    <AppBar className="header-container">
      <Toolbar variant="dense" className="header-toolbar">
        <IconButton className="menu-button">
          <MenuIcon fontSize="small" color="secondary" />
        </IconButton>
        <img src={vsCodeLogo} alt="company-logo" className="company-logo" />
        <Typography variant="h5" className="companyNamr">Company Name</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
