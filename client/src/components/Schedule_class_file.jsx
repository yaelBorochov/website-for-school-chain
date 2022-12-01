import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fontGrid } from '@mui/material/styles/cssUtils';
import { blue } from '@mui/material/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize:22
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
     backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  Hours,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
) {
  return { Hours, Sunday, Monday, Tuesday ,Wednesday,Thursday,Friday};
}

const rows = [
  createData('אנגלית','דקדוק','חשבון','אנגלית','עברית','חשבון','09:00'),
  createData('אנגלית','דקדוק','חשבון','אנגלית','עברית','חשבון','10:00'),
  createData('תורה','עברית','היסטוריה','טבע','נביא','תורה','11:00'),
  createData(null,'דקדוק','טבע','טבע','היטוריה','טבע','12:00'),
  createData(null,'דקדוק','הנדסה','טבע','היסטוריה','דקדוק','13:00'),
];

export default function Schedule_class_file() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right"><b>'יום ו</b></StyledTableCell>
            <StyledTableCell align="right"><b>'יום ה</b></StyledTableCell>
            <StyledTableCell align="right"><b>'יום ד</b></StyledTableCell>
            <StyledTableCell align="right"><b>'יום ג</b></StyledTableCell>
            <StyledTableCell align="right"><b>'יום ב</b></StyledTableCell>
            <StyledTableCell align="right"><b>'יום א</b></StyledTableCell>
            <StyledTableCell align="right"><b>שעות</b></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
            
              <StyledTableCell align="right">{row.Hours}</StyledTableCell>
               <StyledTableCell align="right">{row.Sunday}</StyledTableCell>
              <StyledTableCell align="right">{row.Monday}</StyledTableCell>
              <StyledTableCell align="right">{row.Tuesday}</StyledTableCell>
              <StyledTableCell align="right">{row.Wednesday}</StyledTableCell>
              <StyledTableCell align="right">{row.Thursday}</StyledTableCell>
              <StyledTableCell align="right">{row.Friday}</StyledTableCell>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
