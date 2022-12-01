import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import TextField from '@mui/material/TextField';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(grade, staffGrade, theme) {
  return {
    fontWeight:
    staffGrade.indexOf(grade) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

 export default function SelectedRolingList({handleChange}) { 
  const theme = useTheme();
  const [staffGrade, setStaffGrade] = React.useState([]);
  const [classesObjects, setClassesObjects] = React.useState([]);
  const classesRef = collection(firestore, "classes");

  const getData = async () => {
    var q ;
    q = query(classesRef);    
    const snapshot = await getDocs(q)
    snapshot.forEach(doc =>
       {
         //console.log(doc.data())  
         setClassesObjects(prev => [...prev, doc.data()])
        }
      
    ) 
  }
  React.useEffect(()=>{getData()}, []);

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setStaffGrade(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    // console.log(staffGrade)
    // handleChange(staffGrade)
  };
//   useImperativeHandle(ref, () => ({

//     getStaffGrade() {
//       return staffGrade;
//     }

//   }));

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label">כיתה</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={staffGrade}
          onChange={handleChange1}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {/* {classesObjects.map((grade, index) => (
            <MenuItem
              key={index}
              value={grade.}
              style={getStyles(grade, staffGrade, theme)}
            >
              {grade}
            </MenuItem>
          ))} */}

          {classesObjects.map((n, index) => <MenuItem key ={index} value={n.grade}
              style={getStyles(n.grade, staffGrade, theme)}>{n.grade}</MenuItem>)}
              
        </Select>
      </FormControl>
      {handleChange(staffGrade)}
    </div>
  );
}
