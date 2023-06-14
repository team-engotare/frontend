// import React, { useState } from 'react';
// import { styled } from '@mui/system';
// import { Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { Dashboard, Collections, StackedBarChart, BarChart } from '@mui/icons-material';
// import lion from '../components/images/lion-logo.png';
// import { Link } from 'react-router-dom';
// const StyledDrawer = styled(Drawer)`
//   width: 229px;
//   & .MuiDrawer-paper {
//     width: 240px;
//   }
// `;
// const StyledList = styled(List)`
//   padding: 10px;
//   margin-top: 62px;
// `;
// const StyledListItem = styled(ListItem)`
//   &.Mui-selected {
//     background-color: #DF8530;
//   }
//   &:hover {
//     background-color: #DF8530;
//     & .MuiListItemText-primary {
//       color: #ffffff;
//     }
//   }
//   padding-top:15px;
//   margin-top: 10px;
// `;
// const StyledListItemText = styled(ListItemText)`
//   color: #8E5315;
//   &.Mui-selected {
//     color: #ffffff;
//   }
// `;
// const StyledDashboard = styled(Dashboard)`
//   color: #F5DAC1;
//   margin-right: 9px;
//   height: 21px;
//   margin-bottom: 3px;
// `;
// const StyledCollections = styled(Collections)`
//   color: #F5DAC1;
//   margin-right: 9px;
//   height: 21px;
//   margin-bottom: 3px;
// `;
// const StyledStackedBarChart = styled(StackedBarChart)`
//   color: #F5DAC1;
//   margin-right: 9px;
//   height: 21px;
//   margin-bottom: 3px;
// `;
// const StyledBarChart = styled(BarChart)`
//   color: #F5DAC1;
//   margin-right: 9px;
//   height: 21px;
//   margin-bottom: 3px;
// `;
// const StyledLogo = styled('img')({
//   marginRight: '8px',
//   marginLeft: '-9px',
//   position: 'fixed',
//   height: '57px',
//   boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
//   borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
//   width: '235px',
//   padding: '2px',
//   marginTop: '-70px',
//   marginBottom: '54px',
// });
// const Sidebar = ({ onOptionClick }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const handleItemClick = (option) => {
//     setSelectedOption(option);
//     onOptionClick(option);
//   };
//   return (
//     <StyledDrawer variant="permanent" anchor="left">
//       <StyledList>
//       <StyledLogo src={lion} alt="Lion-logo" />
//       <StyledListItem
//   button
//   component={Link}
//   to="/"
//   selected={selectedOption === 'Dashboard'}
//   onClick={() => handleItemClick('Dashboard')}
// >
//   <StyledDashboard />
//   <StyledListItemText primary="Dashboard" />
// </StyledListItem>
// <StyledListItem
//   button
//   component={Link}
//   to="/gallery"
//   selected={selectedOption === 'Gallery'}
//   onClick={() => handleItemClick('Gallery')}
// >
//   <StyledCollections />
//   <StyledListItemText primary="Gallery" />
// </StyledListItem>
// <StyledListItem
//   button
//   component={Link}
//   to="/records"
//   selected={selectedOption === 'Records'}
//   onClick={() => handleItemClick('Records')}
// >
//   <StyledStackedBarChart />
//   <StyledListItemText primary="Records" />
// </StyledListItem>
// <StyledListItem
//   button
//   component={Link}
//   to="/statistics"
//   selected={selectedOption === 'Statistics'}
//   onClick={() => handleItemClick('Statistics')}
// >
//   <StyledBarChart />
//   <StyledListItemText primary="Statistics" />
// </StyledListItem>
//       </StyledList>
//     </StyledDrawer>
//   );
// };
// export default Sidebar;
"use strict";