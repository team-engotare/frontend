import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Dashboard, Collections, StackedBarChart, Menu, Close, BarChart } from "@mui/icons-material";
import lion from "../components/images/lion-logo.png";

const StyledDrawer = styled(Drawer)`
  width: 229px;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    width: 240px;
  }

  @media (max-width: 768px) {
    width: 0;
    & .MuiDrawer-paper {
      width: 240px;
    }
  }
`;

const StyledList = styled(List)`
  padding: 10px;
  margin-top: 62px;
`;

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
  backgroundColor: active ? "#df8530" : "transparent",
  "&:hover": {
    backgroundColor: "#df8530",
    "& .MuiListItemText-primary": { color: "#ffffff" },
  },
  paddingTop: "15px",
  marginTop: "10px",
}));

const StyledListItemText = styled(ListItemText)`
  color: #8e5315;
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

const StyledBarChart = styled(BarChart)` /* Icon for Statistics */
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
  width: "235px",
  padding: "2px",
  marginTop: "-70px",
  marginBottom: "54px",
  "@media (max-width: 768px)": {
    display: "none", 
  },
});

// Sidebar
const Sidebar = ({ setNavToDashboard, setNavToGallery, setNavToRecords, setNavToStatistics }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleItemClick = (NavOption) => {
    if (NavOption === "Dashboard") {
      setNavToDashboard();
    } else if (NavOption === "Gallery") {
      setNavToGallery();
    } else if (NavOption === "Records") {
      setNavToRecords();
    } else if (NavOption === "Statistics") {
      setNavToStatistics();
    }
    setMobileOpen(false); // Close the drawer after selecting a menu item on mobile.(not sticky*)
  };

  return (
    <>
      {/* Menu Button for Mobile (Hidden When Sidebar is Open) */}
      {!mobileOpen && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            top: 10,
            left: 10,
            zIndex: 1201,
            color: "#8e5315",
          }}
        >
          <Menu />
        </IconButton>
      )}

      {/* Permanent Drawer for Large Screens */}
      <StyledDrawer variant="permanent" anchor="left" sx={{ display: { xs: "none", md: "block" } }}>
        <StyledList>
          <StyledLogo src={lion} alt="Lion-logo" />
          <StyledListItem
            button
            component={Link}
            to="/"
            active={location.pathname === "/"}
            onClick={() => handleItemClick("Dashboard")}
          >
            <StyledDashboard />
            <StyledListItemText primary="Dashboard" />
          </StyledListItem>

          <StyledListItem
            button
            component={Link}
            to="/gallery"
            active={location.pathname === "/gallery"}
            onClick={() => handleItemClick("Gallery")}
          >
            <StyledCollections />
            <StyledListItemText primary="Gallery" />
          </StyledListItem>

          <StyledListItem
            button
            component={Link}
            to="/records"
            active={location.pathname === "/records"}
            onClick={() => handleItemClick("Records")}
          >
            <StyledStackedBarChart />
            <StyledListItemText primary="Records" />
          </StyledListItem>

          <StyledListItem
            button
            component={Link}
            to="/statistics"
            active={location.pathname === "/statistics"}
            onClick={() => handleItemClick("Statistics")}
          >
            <StyledBarChart />
            <StyledListItemText primary="Statistics" />
          </StyledListItem>
        </StyledList>
      </StyledDrawer>

      {/* Temporary Drawer for Mobile Screens */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {/* Close Button Inside Drawer */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#8e5315",
          }}
        >
          <Close />
        </IconButton>

        <StyledList sx={{ marginTop: "40px" }}> {/* Ensure spacing below close button */}
          <StyledListItem
            button
            component={Link}
            to="/"
            active={location.pathname === "/"}
            onClick={() => handleItemClick("Dashboard")}
          >
            <StyledDashboard />
            <StyledListItemText primary="Dashboard" />
          </StyledListItem>

          <StyledListItem
            button
            component={Link}
            to="/gallery"
            active={location.pathname === "/gallery"}
            onClick={() => handleItemClick("Gallery")}
          >
            <StyledCollections />
            <StyledListItemText primary="Gallery" />
          </StyledListItem>

          <StyledListItem
            button
            component={Link}
            to="/records"
            active={location.pathname === "/records"}
            onClick={() => handleItemClick("Records")}
          >
            <StyledStackedBarChart />
            <StyledListItemText primary="Records" />
          </StyledListItem>

          <StyledListItem
            button
            component={Link}
            to="/statistics"
            active={location.pathname === "/statistics"}
            onClick={() => handleItemClick("Statistics")}
          >
            <StyledBarChart />
            <StyledListItemText primary="Statistics" />
          </StyledListItem>
        </StyledList>
      </Drawer>
    </>
  );
};

export default Sidebar;
