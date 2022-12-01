import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { render } from 'react-dom';
import Tabs from './Tabs';
import PlusButton from './PlusButton';
import ClassModal from './ClassModel';


var staffEmail;
export default function RollingList(props) {
  staffEmail = props.props;
  const [classObject, setClassObject] = useState([]);
  const [grade, setGrade] = useState('');
  const staffRef = collection(firestore, "staff");

  
  const handleChange = (event) => {
      setGrade(event.target.value);
    }

  const getData = async () => {//here
    var q = query(staffRef, limit(1),where("email", "==",  staffEmail));

    const snapshot = await getDocs(q);
    snapshot.forEach(async doc =>
      {  
        setClassObject(prev => [...prev, doc.data()])
      }
      )


    // const  results = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));

    // setClassObject(results[0]);


    // (classObject.at(0).grade).forEach(doc => {
    //       setGrade(prev => [...prev, doc])
    //     });
    // console.log(classObject)
  }      
  
  // const setGradeArray = async()=>{
    
  //   (classObject.at(0).grade).forEach(doc => {
  //     setGrade(prev => [...prev, doc])
  //   });
  //    }
     React.useEffect(()=>{getData()}, []);
    //  React.useEffect(()=>{setGradeArray()}, []);
    
  // let array = classObject.map((n) => console.log(n.grade[0]));

    // const printGrade = (array, index) => {
    //    return <div><MenuItem key = {index} value={array[0]}>{array[0]}</MenuItem> <MenuItem key = {index} value={array[0]}>{array[0]}</MenuItem></div>
    //   // array.forEach(item =>{
    //   //   console.log(item)
    //   //   return <MenuItem key = {index} value={item}>{item}</MenuItem>
    //   // })
    // };
    return (
      <div style={{width:"82%"}}>
    <Box sx={{ minWidth: 120 }}>
      <div style={{ display: 'flex'}}>
        <div style={{marginRight: "5%"}}>
      {/* <PlusButton onClick = {handleClick}/> */}
      <ClassModal/>
        </div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">כיתה</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
           value={grade} 
          label="Age"
          onChange={handleChange}
          >
          {/* {classObject.map((n, index) => <MenuItem key={index} value={n.grade[0]}>{n.grade[0]}</MenuItem>)} */}
          { classObject.map((n) => n.grade.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>))}
          {/* {(classObject.map((n) => n.grade.forEach(item => {<MenuItem value={item}>{item}</MenuItem>})))} */}
        {/* {(classObject.map((n) => n.grade[0])).forEach(item => {<MenuItem value={item}>{item}</MenuItem>})} */}
        {/* {array.forEach(item => {<MenuItem value={item}>{item}</MenuItem>})} */}
        {/* {array.forEach(item => {<MenuItem value={item}>{item}</MenuItem>})} */}
         {/* {array.forEach(item => {<MenuItem value={item}>{item}</MenuItem>})} */}
         {/* <MenuItem value={30}>thurtee</MenuItem> */}
         {/* {classObject.map( (n)=>{console.log(n.grade)})}  
         {classObject.map( (n)=><MenuItem value={n.grade[0]}>{n.grade[0]}</MenuItem> )} */}
        </Select>
      </FormControl>
      </div>
      
    </Box>
    <Tabs grade = {grade}/>
    </div>
  );
}





// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// const BpIcon = styled('span')(({ theme }) => ({
//   borderRadius: '50%',
//   width: 16,
//   height: 16,
//   boxShadow:
//     theme.palette.mode === 'dark'
//       ? '0 0 0 1px rgb(16 22 26 / 40%)'
//       : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//   backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
//   backgroundImage:
//     theme.palette.mode === 'dark'
//       ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
//       : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//   '.Mui-focusVisible &': {
//     outline: '2px auto rgba(19,124,189,.6)',
//     outlineOffset: 2,
//   },
//   'input:hover ~ &': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
//   },
//   'input:disabled ~ &': {
//     boxShadow: 'none',
//     background:
//       theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
//   },
// }));

// const BpCheckedIcon = styled(BpIcon)({
//   backgroundColor: '#137cbd',
//   backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//   '&:before': {
//     display: 'block',
//     width: 16,
//     height: 16,
//     backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
//     content: '""',
//   },
//   'input:hover ~ &': {
//     backgroundColor: '#106ba3',
//   },
// });

// // Inspired by blueprintjs
// function BpRadio(props) {
//   return (
//     <Radio
//       sx={{
//         '&:hover': {
//           bgcolor: 'transparent',
//         },
//       }}
//       disableRipple
//       color="default"
//       checkedIcon={<BpCheckedIcon />}
//       icon={<BpIcon />}
//       {...props}
//     />
//   );
// }

// export default function CustomizedRadios() {
//   return (
//     <FormControl>
//        <RadioGroup
//         defaultValue="female"
//         aria-labelledby="demo-customized-radios"
//         name="customized-radios"
//       >
//         <FormControlLabel value="ישיבת צוות" control={<BpRadio />} label="ישיבת צוות" />
//         <FormControlLabel value="שיעור" control={<BpRadio />} label="שיעור" />
//         <FormControlLabel value="טיול" control={<BpRadio />} label="טיול" />
//         <FormControlLabel value="אחר" control={<BpRadio />} label="אחר" />

      
//       </RadioGroup>
//     </FormControl>
//   );
// }
