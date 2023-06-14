import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const StyledSearchBar = styled(TextField)({
  marginLeft: "292px",
  marginTop: "4px",
  width: "438px",
});

const StyledH1 = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: "89px",
  marginBottom: "20px",
  marginLeft: "293px",
  fontSize: "30px",
  fontFamily: "cursive",
  backgroundColor: "green",
  width: "120px",
});

const StyledPageContainer = styled("div")({
  backgroundColor: "#f2f2f2",
  minHeight: "100vh",
  padding: "20px",
});

const NextImagePage = () => {
  return (
    <StyledPageContainer>
      <StyledH1 variant="h1">Existing Lions Gallery</StyledH1>

      <StyledSearchBar
        id="search"
        label="Search"
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

      <div>
        <h2>Example Content</h2>
        <p>This is some example content for the NextImagePage component.</p>
      </div>
    </StyledPageContainer>
  );
};

export default NextImagePage;
