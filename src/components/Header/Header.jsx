import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import GlobalSearch from "../GlobalSearch/GlobalSearch.jsx"
import companyLogo from "../../assets/image/company-logo.png";
import "./header.scss";
import React,{useState} from "react";
const Header = (props) => {
    const [cName,setCName] = useState("Company Name");
    const getShortCompName = () =>{
        let tempIndex = cName.indexOf(" ");
        return cName.substring(0,1)+cName.substring(tempIndex+1,tempIndex+2)
    }
  return (
    <AppBar className="header-container">
      <Toolbar variant="dense" className="header-toolbar">
        <IconButton className="menu-button" onClick={props.setListSize}>
          <MenuIcon fontSize="small" color="secondary" className="menu-icon" />
        </IconButton>
        <img src={companyLogo} alt="company-logo" className="company-logo" />
        <Typography variant="h5" className="company-name">{window.screen.availWidth>460?cName: getShortCompName()}</Typography>
        <GlobalSearch />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
