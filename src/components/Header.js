import React from "react";
import { styled } from '@mui/system';

import { AppBar, Toolbar } from '@mui/material';

const StyledAppBar = styled(AppBar)({
    // Add your styles here
    backgroundColor: '#DF8530',
  });
  

  const StyledToolbar = styled(Toolbar)({
    // Add your styles here
    justifyContent: 'space-between',
  });
  
const Header = () =>{
    return(
        <StyledAppBar position="fixed">
        <StyledToolbar>
          {/* Add your content here */}
        </StyledToolbar>
      </StyledAppBar>
    )
}

export default Header;