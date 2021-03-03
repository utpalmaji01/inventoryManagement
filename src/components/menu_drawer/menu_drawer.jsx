import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ContactsIcon from "@material-ui/icons/Contacts";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import CategoryIcon from "@material-ui/icons/Category";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LanguageIcon from "@material-ui/icons/Language";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ScoreIcon from "@material-ui/icons/Score";
import StyleIcon from "@material-ui/icons/Style";
import WcIcon from "@material-ui/icons/Wc";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TimelineIcon from "@material-ui/icons/Timeline";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import BuildIcon from "@material-ui/icons/Build";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PeopleIcon from "@material-ui/icons/People";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import TocIcon from "@material-ui/icons/Toc";
import RestorePageIcon from "@material-ui/icons/RestorePage";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import "./menu_drawer.scss";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openTrans, setOpenTrans] = React.useState(false);
  const [openVoucher, setOpenVoucher] = React.useState(false);

  useEffect(() => {
    console.log(props);
  });
  const handleClick = (e) => {
    setOpen(!open);
    props.setSelectedMenu(e, "Masters");
  };
  const handleClickTrans = () => {
    setOpenTrans(!openTrans);
  };
  const handleClickVoucher = () => {
    setOpenVoucher(!openVoucher);
  };

  return (
    <List className="sideNav-list">
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Dashboard")}
        className={clsx("list-item", {
          "list-item-active":
            props.selectedMenu === "Dashboard" && !props.isDrawerMin,
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Dashboard")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Dashboard",
          })}
        >
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText
          primary="Dashboard"
          onClick={(e) => props.setSelectedMenu(e, "Dashboard")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Customers")}
        className={clsx("list-item", {
          "list-item-active":
            props.selectedMenu === "Customers" && !props.isDrawerMin,
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Customers")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Customers",
          })}
        >
          <PersonIcon />
        </ListItemIcon>
        <ListItemText
          primary="Customers"
          onClick={(e) => props.setSelectedMenu(e, "Customers")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Vendors")}
        className={clsx("list-item", {
          "list-item-active":
            props.selectedMenu === "Vendors" && !props.isDrawerMin,
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Vendors")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Vendors",
          })}
        >
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText
          primary="Vendors"
          onClick={(e) => props.setSelectedMenu(e, "Vendors")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Items")}
        className={clsx("list-item", {
          "list-item-active":
            props.selectedMenu === "Items" && !props.isDrawerMin,
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Items")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Items",
          })}
        >
          <ShoppingBasketIcon />
        </ListItemIcon>
        <ListItemText
          primary="Items"
          onClick={(e) => props.setSelectedMenu(e, "Items")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={handleClick}
        className={clsx("list-item", {
          "list-item-active":
            props.selectedMenu === "Masters" && !props.isDrawerMin,
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Masters")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Masters",
          })}
        >
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText
          primary="Masters"
          onClick={(e) => props.setSelectedMenu(e, "Items")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
        {open ? <ExpandMore /> : <NavigateNextIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Bill Sundries")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Bill Sundries" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Bill Sundries")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Bill Sundries",
              })}
            >
              <NewReleasesIcon />
            </ListItemIcon>
            <ListItemText
              primary="Bill Sundries"
              onClick={(e) => props.setSelectedMenu(e, "Bill Sundries")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Brands")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Brands" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Brands")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Brands",
              })}
            >
              <BrandingWatermarkIcon />
            </ListItemIcon>
            <ListItemText
              primary="Brands"
              onClick={(e) => props.setSelectedMenu(e, "Brands")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Category")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Category" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Category")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Category",
              })}
            >
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText
              primary="Category"
              onClick={(e) => props.setSelectedMenu(e, "Category")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            buttononClick={(e) => props.setSelectedMenu(e, "Cities")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Cities" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Cities")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Cities",
              })}
            >
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText
              primary="Cities"
              onClick={(e) => props.setSelectedMenu(e, "Cities")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Countries")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Countries" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Countries")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Countries",
              })}
            >
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText
              primary="Countries"
              onClick={(e) => props.setSelectedMenu(e, "Countries")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Currencies")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Currencies" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Currencies")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Currencies",
              })}
            >
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText
              primary="Currencies"
              onClick={(e) => props.setSelectedMenu(e, "Currencies")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "GST Treatments")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "GST Treatments" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "GST Treatments")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "GST Treatments",
              })}
            >
              <ScoreIcon />
            </ListItemIcon>
            <ListItemText
              primary="GST Treatments"
              onClick={(e) => props.setSelectedMenu(e, "GST Treatments")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            conClick={(e) => props.setSelectedMenu(e, "Item Groups")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Item Groups" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Item Groups")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Item Groups",
              })}
            >
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText
              primary="Item Groups"
              onClick={(e) => props.setSelectedMenu(e, "Item Groups")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Manufacturers")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Manufacturers" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Manufacturers")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Manufacturers",
              })}
            >
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText
              primary="Manufacturers"
              onClick={(e) => props.setSelectedMenu(e, "Manufacturers")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Payment Terms")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Payment Terms" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Payment Terms")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Payment Terms",
              })}
            >
              <StyleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Payment Terms"
              onClick={(e) => props.setSelectedMenu(e, "Payment Terms")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Salutations")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Salutations" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Salutations")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Salutations",
              })}
            >
              <WcIcon />
            </ListItemIcon>
            <ListItemText
              primary="Salutations"
              onClick={(e) => props.setSelectedMenu(e, "Salutations")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "States")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "States" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "States")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "States",
              })}
            >
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText
              primary="States"
              onClick={(e) => props.setSelectedMenu(e, "States")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Taxes")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Taxes" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Taxes")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Taxes",
              })}
            >
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Taxes"
              onClick={(e) => props.setSelectedMenu(e, "Taxes")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Tax Preference")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Tax Preference" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Tax Preference")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Tax Preference",
              })}
            >
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText
              primary="Tax Preference"
              onClick={(e) => props.setSelectedMenu(e, "Tax Preference")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Units")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Units" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Units")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Units",
              })}
            >
              <BuildIcon />
            </ListItemIcon>
            <ListItemText
              primary="Units"
              onClick={(e) => props.setSelectedMenu(e, "Units")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Voucher Types")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Voucher Types" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Voucher Types")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Voucher Types",
              })}
            >
              <CollectionsBookmarkIcon />
            </ListItemIcon>
            <ListItemText
              primary="Voucher Types"
              onClick={(e) => props.setSelectedMenu(e, "UniVoucher Typests")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Warehouses")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active":
                props.selectedMenu === "Warehouses" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Warehouses")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Warehouses",
              })}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Warehouses"
              onClick={(e) => props.setSelectedMenu(e, "Warehouses")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
        </List>
      </Collapse>
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Organizations")}
        className={clsx(classes.nested, "list-item", {
          "list-item-active":
            props.selectedMenu === "Organizations" && !props.isDrawerMin,
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Organizations")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Organizations",
          })}
        >
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText
          primary="Organizations"
          onClick={(e) => props.setSelectedMenu(e, "Organizations")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Users")}
        className={clsx(classes.nested, "list-item", {
          "list-item-active":
            props.selectedMenu === "Users" && !props.isDrawerMin,
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Users")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Users",
          })}
        >
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText
          primary="Users"
          onClick={(e) => props.setSelectedMenu(e, "Users")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem button onClick={handleClickTrans}>
        <ListItemIcon>
          <SwapHorizIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
        {openTrans ? <ExpandMore /> : <NavigateNextIcon />}
      </ListItem>
      <Collapse in={openTrans} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AssignmentReturnedIcon />
            </ListItemIcon>
            <ListItemText primary="Purchase Refund" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary="Purchase Payment" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <TocIcon />
            </ListItemIcon>
            <ListItemText primary="Sales Recipt" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <RestorePageIcon />
            </ListItemIcon>
            <ListItemText primary="Sales Refund" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClickVoucher}>
        <ListItemIcon>
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary="Vouchers" />
        {openVoucher ? <ExpandMore /> : <NavigateNextIcon />}
      </ListItem>
      <Collapse in={openVoucher} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <TocIcon />
            </ListItemIcon>
            <ListItemText primary="Delivery Note" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Indent Order" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ViewHeadlineIcon />
            </ListItemIcon>
            <ListItemText primary="Purchase Invoice" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <RestorePageIcon />
            </ListItemIcon>
            <ListItemText primary="Sales Refund" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
