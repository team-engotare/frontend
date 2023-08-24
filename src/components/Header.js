import React, { useState } from "react";
import { styled } from '@mui/system';
import { AppBar, Toolbar, Badge, Popover, List, ListItem, ListItemText, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { Notifications } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#DF8530',
});

const StyledNotifications = styled(Notifications)({
    color: '#F5DAC1',
    marginRight: '9px',
    height: '21px',
    marginBottom: '-2px',
    marginTop: '8px'
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'flex-end',
});

const StyledBadge = styled(Badge)({
    marginRight: '9px',
});

const ActionsContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const StyledIconButton = styled(IconButton)({
    marginLeft: '16px',
});

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [profileAnchorEl, setProfileAnchorEl] = useState(null);

    const notificationsCount = 5;

    const notifications = [
        "Notification 1",
        "Notification 2",
        "Notification 3",
        "Notification 4",
        "Notification 5"
    ];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setProfileAnchorEl(null);
    };

    const handleLogout = () => {
        console.log('User logged out!');
        handleProfileClose();
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const profileOpen = Boolean(profileAnchorEl);
    const profileId = profileOpen ? 'profile-popover' : undefined;

    return (
        <StyledAppBar position="fixed">
            <StyledToolbar>
                <ActionsContainer>
                    <StyledBadge badgeContent={notificationsCount} color="secondary">
                        <StyledNotifications onClick={handleClick} />
                    </StyledBadge>

                    <StyledIconButton onClick={handleProfileClick} >
                    <Avatar 
                        alt="User Name" 
                        src="/path-to-your-image.jpg"
                        style={{ width: '32px', height: '32px', marginTop:'4px'}}  // Adjust width and height as per your needs
                        />                    
                      </StyledIconButton>

                    <Menu
                        id={profileId}
                        anchorEl={profileAnchorEl}
                        open={profileOpen}
                        onClose={handleProfileClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                        <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </ActionsContainer>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <List>
                        {notifications.map((notification, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={notification} />
                            </ListItem>
                        ))}
                    </List>
                </Popover>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default Header;
