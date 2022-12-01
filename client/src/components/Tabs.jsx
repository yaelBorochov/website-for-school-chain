import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Table from './Table'
import MedicineList from './MedicineList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from './context/AuthContext';
import { firestore } from '../firebase/firebase';
import StudentPage from './StudentPage';
import Schedule_class_file from './Schedule_class_file'
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import RollingList from './RolingList';
import { useState } from 'react';


export default function Tabs(prop) {
  // console.log("grfhdjsxkvbfcnj    " + grade)
  const [value, setValue] = React.useState('1');
  const[grade, setGrade] = useState('')
  React.useEffect(()=>{setGrade(prop.grade)});
  const staffRef = collection(firestore, "staff");
    const [classObject, setClassObject] = React.useState([]);
    const { currentUser  } = useAuth();
    // const mail = currentUser.email



    const getData = async () => {
        
        var q = query(staffRef, where("email", "==",  currentUser.email));
        const snapshot = await getDocs(q);
        const  result = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
        console.log(result[0].grade);
        // grade = result[0].grade;
        // console.log(key);
        return result[0].grade; 
         }      
    //   React.useEffect(()=>{console.log(studentObjects)}, [studentObjects])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let props1 = {
    t:"Staff",
    p:grade,
    }
  let props2= {
    t:"Student",
    p:grade,
    }
  return (
    <div style={{width: "100%"}}>
      {/* <RollingList props = {currentUser.email} style={{marginButtom: "10px"}}/> */}
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" align="right">
            {/* <Tab label="מתן תרופות" value="1" /> */}
            {/* <Tab label="מערכת" value="1" /> */}
            <Tab label="צוות הכיתה" value="1" />
            <Tab label="תלמידים" value="2" />
          </TabList>
        </Box>
        {/* <TabPanel value="1">
        <MedicineList prop = {"1"}/>
        </TabPanel> */}
        {/* <TabPanel value="1">
        <Schedule_class_file/> */}
          {/* // */}
        {/* </TabPanel> */}
        <TabPanel value="1">
            <Table prop = {props1.t} prop2 = {grade}></Table>
        </TabPanel>
        <TabPanel value="2">
            <Table prop = {props2.t} prop2 = {grade}></Table>
        </TabPanel>
      </TabContext>
    </Box>
   </div>
  );
}
