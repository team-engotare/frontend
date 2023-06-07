import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { styled } from '@mui/system';


const StyledButton = styled(Button)`
  color: white;
  background-color: #DF8530;

  border-radius: 4px;
  border:none;
  padding: 8px 16px;
  font-weight: bold;
  margin-left:384px;
  margin-top:58px;
  width:176px;

  &:hover {
    background-color:  #DF8530;
  }
`;

const FilterButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <StyledButton
        variant="outlined"
        endIcon={<ExpandMore />}
        onClick={handleMenuOpen}
      >
        Filter by
      </StyledButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        keepMounted
        PaperProps={{
          style: {
            maxHeight: 200,
            width: anchorEl ? anchorEl.clientWidth : undefined,
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>Pride name </MenuItem>
        <MenuItem onClick={handleMenuClose}>Age </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default FilterButton;
