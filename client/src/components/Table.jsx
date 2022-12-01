import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { getDocuments } from '../firebase/firebase';
import Search from './Search';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { Prev } from 'react-bootstrap/esm/PageItem';
import ModalPage from './ModalPage';
import StudentCell from './TableCells/StudentCell';
import StaffCell from './TableCells/StaffCell';
// import { ro } from 'date-fns/locale';
import EnhancedTableHead from './EnhancedTableHead';
// import EnhancedTableToolbar from './EnhancedTableToolbar';
// import {search1} from ''

// import SearchTeachersAndStudent from './SearchTeachersAndStudent';
import { useNavigate } from 'react-router-dom';

// function createData(name,lastName, id, phone, email, address, age) {
//   return {
//     name,
//     lastName,
//     id,
//     phone,
//     email,
//     address,
//     age,
//   };
// }

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

var tableType;
var  condition ;

export default function EnhancedTable(prop) {
  tableType = prop.prop;
  condition = prop.prop2;
  const [order, setOrder] = React.useState('asc');
  const [reRender, setReRender] = React.useState(0);
  const [orderBy, setOrderBy] = React.useState('desc');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [studentObjects, setStudentObjects] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const studentRef = collection(firestore, "student");
  const staffRef = collection(firestore, "staff");
  const classRef = collection(firestore, "classes");


  const getData = async () => {
  var q ;
  if (tableType === 'Staff' && condition != "none"){
      q = query(staffRef, where("grade","array-contains-any",[condition]));
  }
  else if (tableType === 'Staff'){
      q = query(staffRef);
  }
  else if(tableType === 'Student' && condition != "none"){
      q = query(studentRef, where("grade", "==", condition));
  }
  else if(tableType === 'Student'){
      q = query(studentRef);
  }
  else{
    q = query(classRef);
  }
  
  const snapshot = await getDocs(q)
  snapshot.forEach(doc =>
     {
       //console.log(doc.data())  
       setStudentObjects(prev => [...prev, doc.data()])
      }
    
  ) 

}

React.useEffect(()=>{getData()}, []);
// React.useEffect(()=>{console.log(searchedVal)}, [searchedVal])
React.useEffect(()=>{console.log(studentObjects)}, [studentObjects])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = studentObjects.map((n) => n.idUser);
      setSelected(newSelecteds);
      console.log(selected)
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log("jhgfd")
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const printGrades = (array) => {
    var res='';
    array.forEach(item =>{
      res = res + item + ", "
    })
    return res
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - studentObjects.length) : 0;
    
  return (
    <div>
      <Box sx={{ height: '100%', width: '100%', minHeight: '50%' }}>
      <Paper sx={{ width: '100%', mb: 5 }}>
        <EnhancedTableToolbar numSelected={selected.length} tt = {tableType} sel = {selected}/>
        <TableContainer>
          <Table 
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              tt = {tableType}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={studentObjects.length}
            />
            <TableBody >
              {React.useEffect(()=>{console.log(studentObjects)}, [studentObjects])}
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {
              stableSort(studentObjects, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.idUser);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.idUser)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.idUser}
                      selected={isItemSelected}
                    >
                      { tableType === 'Staff' ? (<TableCell align="right">{row.role}</TableCell>) : ( <TableCell align="right">{row.age}</TableCell>) }
                      <TableCell align="right">{row.address}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.phone}</TableCell>
                      {/* {row.grade.forEach(item => {})} */}
                      {/* <TableCell align="right">{row.grade.forEach(item => {item + ", "})}</TableCell> */}
                      { tableType == 'Staff' ? (<TableCell align="right">{printGrades(row.grade)}</TableCell>) : ( <TableCell align="right">{row.grade}</TableCell>) }
                      <TableCell align="right">{row.idUser}</TableCell>
                       <TableCell align="right">{row.lastName}</TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="right"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={studentObjects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="שורות צפופות"
      /> */}
    </Box>
    </div>

  );
}
