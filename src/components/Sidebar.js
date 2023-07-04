import React from "react";
import { styled } from "@mui/system";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import {
  Dashboard,
  Collections,
  StackedBarChart,
  BarChart,
} from "@mui/icons-material";
import lion from "../components/images/lion-logo.png";
import { Link } from "react-router-dom";

const StyledDrawer = styled(Drawer)`
  width: 229px;
  & .MuiDrawer-paper {
    width: 240px;
  }
`;

const StyledList = styled(List)`
  padding: 10px;
  margin-top: 62px;
`;

const StyledListItem = styled(ListItem)`
  &.Mui-selected {
    background-color: #df8530;
  }

  &:hover {
    background-color: #df8530;
    & .MuiListItemText-primary {
      color: #ffffff;
    }
  }
  padding-top: 15px;
  margin-top: 10px;
`;

const StyledListItemText = styled(ListItemText)`
  color: #8e5315;

  &.Mui-selected {
    color: #ffffff;
  }
`;

const StyledDashboard = styled(Dashboard)`
  color: #f5dac1;
  margin-right: 9px;
  height: 21px;
  margin-bottom: 3px;
`;

const StyledCollections = styled(Collections)`
  color: #f5dac1;
  margin-right: 9px;
  height: 21px;
  margin-bottom: 3px;
`;

const StyledStackedBarChart = styled(StackedBarChart)`
  color: #f5dac1;
  margin-right: 9px;
  height: 21px;
  margin-bottom: 3px;
`;

const StyledBarChart = styled(BarChart)`
  color: #f5dac1;
  margin-right: 9px;
  height: 21px;
  margin-bottom: 3px;
`;

const StyledLogo = styled("img")({
  marginRight: "8px",
  marginLeft: "-9px",
  position: "fixed",
  height: "57px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
  width: "235px",
  padding: "2px",
  marginTop: "-70px",
  marginBottom: "54px",
});

// const Sidebar = ({ onOptionClick}) => {
//   const handleItemClick = (option) => {
//      onOptionClick(option);
//    };

{
  /* START OF UPDATE */
}
const Sidebar = ({
  setNavToDashboard,
  setNavToGallery,
  setNavToRecords,
  setNavToStatistics,
}) => {
  const handleItemClick = (NavOption) => {
    if (NavOption === "Dashboard") {
      setNavToDashboard(true);
      setNavToGallery(false);
      setNavToRecords(false);
      setNavToStatistics(false);
    } else if (NavOption === "Gallery") {
      setNavToDashboard(false);
      setNavToGallery(true);
      setNavToRecords(false);
      setNavToStatistics(false);
    } else if (NavOption === "Records") {
      setNavToDashboard(false);
      setNavToGallery(false);
      setNavToRecords(true);
      setNavToStatistics(false);
    } else if (NavOption === "Statistics") {
      setNavToDashboard(false);
      setNavToGallery(false);
      setNavToRecords(false);
      setNavToStatistics(true);
    }
  };
  {
    /* END OF UPDATE */
  }
  return (
    <StyledDrawer variant="permanent" anchor="left">
      <StyledList>
        <StyledLogo src={lion} alt="Lion-logo" />

        <StyledListItem
          button
          component={Link}
          to="/"
          onClick={() => handleItemClick("Dashboard")}
        >
          <StyledDashboard />
          <StyledListItemText primary="Dashboard" />
        </StyledListItem>

        <StyledListItem
          button
          component={Link}
          to="/gallery"
          onClick={() => handleItemClick("Gallery")}
        >
          <StyledCollections />
          <StyledListItemText primary="Gallery" />
        </StyledListItem>

        <StyledListItem
          button
          component={Link}
          to="/records"
          onClick={() => handleItemClick("Records")}
        >
          <StyledStackedBarChart />
          <StyledListItemText primary="Records" />
        </StyledListItem>

        <StyledListItem
          button
          component={Link}
          to="/statistics"
          onClick={() => handleItemClick("Statistics")}
        >
          <StyledBarChart />
          <StyledListItemText primary="Statistics" />
        </StyledListItem>
      </StyledList>
    </StyledDrawer>
  );
};

export default Sidebar;
