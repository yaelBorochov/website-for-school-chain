import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';

function  getHeaders()
{
const headCells = [
  {
    id: 'role',
    numeric: true,
    disablePadding: false,
    label: 'תפקיד',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'כתובת',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'מייל',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'טלפון',
  },
  {
    id: 'grade',
    numeric: true,
    disablePadding: false,
    label: 'כיתה',
  },
  {
    id: 'idUser',
    numeric: true,
    disablePadding: false,
    label: 'תעודת זהות',
  },
  {
    id: 'lastName',
    numeric: true,
    disablePadding: false,
    label: 'שם משפחה',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'שם',
  },
];

const headCells2 = [
  {
    id: 'age',
    numeric: true,
    disablePadding: false,
    label: 'גיל',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'כתובת',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'מייל',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'טלפון',
  },
  {
    id: 'grade',
    numeric: true,
    disablePadding: false,
    label: 'כיתה',
  },
  {
    id: 'idUser',
    numeric: true,
    disablePadding: false,
    label: 'תעודת זהות',
  },
  {
    id: 'lastName',
    numeric: true,
    disablePadding: false,
    label: 'שם משפחה',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'שם',
  },
];

if (tableType === "Staff")
  return headCells;
  return headCells2;
};

var tableType;

export default function EnhancedTableHead(props) {
    tableType = props.tt;
        const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
          props;
        const createSortHandler = (property) => (event) => {
          onRequestSort(event, property);
        };
        
        // const [searchedVal, setSearchedVal] = useState("");
        return (
          <TableHead>
            <TableRow>
              {/*headCells*/getHeaders().map((headCell, index) => (
                <TableCell
                  //key={headCell.id}
                  key={index}
                  fontSize = "small"
                  align={'right'}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                  > 
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                />
              </TableCell>
            </TableRow>
          </TableHead>
        );
      }
