import React from "react";
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import FilterButton from "./FilterButton";
import TableComponent from "./TableComponent";

const StyledH1 = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:'89px',
    marginLeft:'293px',
    fontSize:'30px',
    fontFamily:'cursive'
});

const Records = () => {
  return (
    <div>
      <StyledH1 variant="h1">Newly Added Lions</StyledH1>
      <SearchBar/>
      <FilterButton/>
      <TableComponent/>
    </div>
  );
}

export default Records;
