import React from 'react';
import '../components/Header.css';
import '../components/Sidebar.css';
import {AppBar, Toolbar,Typography,Drawer, List, ListItem, ListItemText } from '@mui/material';

const navigation = ()=> {
  return (
    <div>
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="h6">
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent" className="sidebar">
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default navigation;