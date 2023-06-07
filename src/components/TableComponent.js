import React from 'react';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StyledTableContainer = styled(TableContainer)`
  max-width: 950px;
  margin-left:295px;
  margin-top:32px;

`;

const StyledTableHead = styled(TableHead)`
  background-color: #F5DAC1;
`;

const StyledTableCell = styled(TableCell)`
  /* Add additional styles for table cells if needed */
`;

const TableComponent = () => {
  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <StyledTableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Lion Name</StyledTableCell>
            <StyledTableCell>Age</StyledTableCell>
            <StyledTableCell>Pride Name</StyledTableCell>
            <StyledTableCell>Lion Description</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>

          </TableRow>
        </StyledTableHead>
        <TableBody>
          {/* <TableRow>
            <StyledTableCell>Cell 1</StyledTableCell>
            <StyledTableCell>Cell 2</StyledTableCell>
            <StyledTableCell>Cell 3</StyledTableCell>
            <StyledTableCell>Cell 4</StyledTableCell>
            <StyledTableCell>Cell 4</StyledTableCell>
            <StyledTableCell>Cell 4</StyledTableCell>

          </TableRow> */}
          {/* <TableRow>
            <StyledTableCell>Cell 1</StyledTableCell>
            <StyledTableCell>Cell 2</StyledTableCell>
            <StyledTableCell>Cell 3</StyledTableCell>
            <StyledTableCell>Cell 4</StyledTableCell>
            <StyledTableCell>Cell 4</StyledTableCell>
            <StyledTableCell>Cell 4</StyledTableCell>

          </TableRow> */}
          {/* Add more rows here */}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default TableComponent;
