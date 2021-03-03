import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import ContactsIcon from '@material-ui/icons/Contacts';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import CategoryIcon from '@material-ui/icons/Category';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ScoreIcon from '@material-ui/icons/Score';
import StyleIcon from '@material-ui/icons/Style';
import WcIcon from '@material-ui/icons/Wc';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TimelineIcon from '@material-ui/icons/Timeline';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BuildIcon from '@material-ui/icons/Build';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleIcon from '@material-ui/icons/People';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TocIcon from '@material-ui/icons/Toc';
import RestorePageIcon from '@material-ui/icons/RestorePage';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import SubjectIcon from '@material-ui/icons/Subject';
import DvrIcon from '@material-ui/icons/Dvr';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import NoteIcon from '@material-ui/icons/Note';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIcon from '@material-ui/icons/Assignment';
import UndoIcon from '@material-ui/icons/Undo';
import TransformIcon from '@material-ui/icons/Transform';
import './menu_drawer.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openTrans, setOpenTrans] = React.useState(false);
  const [openVoucher, setOpenVoucher] = React.useState(false);


  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickTrans = () => {
    setOpenTrans(!openTrans);
  };
  const handleClickVoucher = () => {
    setOpenVoucher(!openVoucher);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
      className={classes.root}
      id="menuItem"
    >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary="Vendors" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingBasketIcon />
        </ListItemIcon>
        <ListItemText primary="Items" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText primary="Masters" />
        {open ? <ExpandMore /> : <NavigateNextIcon /> }
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NewReleasesIcon />
            </ListItemIcon>
            <ListItemText primary="Bill Sundries" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BrandingWatermarkIcon />
            </ListItemIcon>
            <ListItemText primary="Brands" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Category" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary="Cities" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary="Countries" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Currencies" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ScoreIcon />
            </ListItemIcon>
            <ListItemText primary="GST Treatments" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Item Groups" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Manufacturers" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StyleIcon />
            </ListItemIcon>
            <ListItemText primary="Payment Terms" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <WcIcon />
            </ListItemIcon>
            <ListItemText primary="Salutations" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="States" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary="Taxes" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="Tax Preference" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Units" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CollectionsBookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="Voucher Types" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Warehouses" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Organizations" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button onClick={handleClickTrans}>
        <ListItemIcon>
          <SwapHorizIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
        {openTrans ? <ExpandMore /> : <NavigateNextIcon /> }
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
        {openVoucher ? <ExpandMore /> : <NavigateNextIcon /> }
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
              <SubjectIcon />
            </ListItemIcon>
            <ListItemText primary="Purchase Invoice" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DvrIcon />
            </ListItemIcon>
            <ListItemText primary="Purchase Order" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AssignmentReturnIcon />
            </ListItemIcon>
            <ListItemText primary="Purchase Return" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary="Recipt Note" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Sales Invoice" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Sales Order" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <UndoIcon />
            </ListItemIcon>
            <ListItemText primary="Sales Return" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <TransformIcon />
            </ListItemIcon>
            <ListItemText primary="Stock Transfer" />
          </ListItem>
          </List>
          </Collapse>
    </List>
  );
}
