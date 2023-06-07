import React from "react";
import { styled } from '@mui/system';
import { Typography } from '@mui/material';


const StyledH1 = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop:'89px',
  marginLeft:'293px',
  fontSize:'30px',
  fontFamily:'cursive'
});
const Dashboard = () => {
  return (
    <div>
      <StyledH1 variant="h1">Data</StyledH1>
    </div>
    
  );
};

export default Dashboard;
