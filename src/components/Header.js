import React from "react";
import { styled } from '@mui/system';
import { AppBar, Toolbar } from '@mui/material';
import {Notifications} from '@mui/icons-material';

const StyledAppBar = styled(AppBar)({
    // Add your styles here
    backgroundColor: '#DF8530',
  });

  const StyledNotifications = styled(Notifications)({
    color:'#F5DAC1',
    marginRight:'9px',
    height:'21px',
    marginBottom:'3px'
  
  });

  const StyledToolbar = styled(Toolbar)({
    // Add your styles here
    justifyContent: 'space-between',
  });

  
 
const Header = () =>{
    return(
        <StyledAppBar position="fixed">

        <StyledToolbar>

        <StyledNotifications/>

        </StyledToolbar>

      </StyledAppBar>
    )
}

export default Header;