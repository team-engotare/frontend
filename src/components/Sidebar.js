import React from 'react';
import { styled } from '@mui/system';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const StyledDrawer = styled(Drawer)`
  width: 229px;
  & .MuiDrawer-paper {
    width: 240px;
  }
`;
const StyledList = styled(List)`
  padding: 10px;
  margin-top:60px;
`;

const StyledListItem = styled(ListItem)`
&:hover {
  background-color: #DF8530;
  & .MuiListItemText-primary {
    color: #ffff;
  }
}  
`;
const StyledListItemText = styled(ListItemText)`
  color:#8E5315;

`;

const Sidebar = () => {
  return (
    <StyledDrawer variant="permanent" anchor="left">
      <StyledList>
        <StyledListItem button>
          <StyledListItemText primary="Dashboard" />
        </StyledListItem>
        <StyledListItem button>
          <StyledListItemText primary="Gallery" />
        </StyledListItem>
        <StyledListItem button>
          <StyledListItemText primary="Records" />
        </StyledListItem>
    
        <StyledListItem button>
          <StyledListItemText primary="Statistics" />
        </StyledListItem>
      </StyledList>
    </StyledDrawer>
  );
};

export default Sidebar;