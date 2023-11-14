import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StyledTableContainer = styled(TableContainer)`
  max-width: 950px;
  margin-left: 295px;
  margin-top: 32px;
`;

const StyledTableHead = styled(TableHead)`
  background-color: #F5DAC1;
`;

const StyledTableCell = styled(TableCell)`
  /* Add additional styles for table cells if needed */
`;

const Navbar = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  height: 40px;
  margin-left: 295px;
  margin-top: 10px;
`;

const NavItem = styled('div')`
  padding: 10px;
  color: black;
  cursor: pointer;
  box-shadow: ${({ isActive }) => (isActive ? 'inset 0 0 5px rgba(0, 0, 0, 0.5)' : 'none')};
`;

const Separator = styled('div')`
  width: 73%;
  height: 1px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 295px;
`;

const TableComponent = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [tableMessage, setTableMessage] = useState(''); // Initialize as an empty string

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Set table data and message based on the clicked tab
    if (tab === 'recentlyAdded') {
      setTableData([]);
      setTableMessage('No data added');
    } else if (tab === 'recentlyIdentified') {
      setTableData([]);
      setTableMessage('Sorry, there is no newly identified data');
    }
  };

  return (
    <>
      <Navbar>
        <NavItem isActive={activeTab === 'recentlyAdded'} onClick={() => handleTabClick('recentlyAdded')}>
          Recently Added
        </NavItem>
        <NavItem isActive={activeTab === 'recentlyIdentified'} onClick={() => handleTabClick('recentlyIdentified')}>
          Recently Identified
        </NavItem>
      </Navbar>
      <Separator />

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
            {tableData.length === 0 ? (
              <TableRow>
                <StyledTableCell colSpan={6}>{tableMessage}</StyledTableCell>
              </TableRow>
            ) : (
              tableData.map((row) => (
                <TableRow key={row.id}>
                  {/* Render your table data here based on the row structure */}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
};

export default TableComponent;





