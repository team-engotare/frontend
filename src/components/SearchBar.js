import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { styled } from '@mui/system';

const StyledSearchBar = styled(TextField) ({
    marginLeft:'292px',
    marginTop:'14px',
    width:'395px'
})




const SearchBar = () => {
  return (
    <StyledSearchBar
      id="search"
      label="Search by name or pride"
      variant="outlined"
      size="small"
    
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
