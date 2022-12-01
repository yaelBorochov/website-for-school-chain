import "./NewStyles.css";
import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import TaskModalPage from './TaskModalPge';
import ReactBigCalendar from './ReactBigCalendar';
import Stack from '@mui/material/Stack';
import PopingMenu from './PopingMenu';
import TaskModalPge from './TaskModalPge';



export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(new Date());
  const [eventsData, setEventsData] = React.useState([]);

  return (
    // <Stack direction="row-reverse"
    // justifyContent="space-evenly"
    // alignItems="flex-end"
    // spacing={-100}>
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    //   <StaticDatePicker
    //     orientation="landscape"
    //     openTo="day"
    //     value={value}
    //     shouldDisableDate={isWeekend}
    //     onChange={(newValue) => {
    //       setValue(newValue);
    //     }}
    //     renderInput={(params) => <TextField {...params} />}
    //   />


    <div>
      <div>
        <div>
        <div><h3 className="day">יומן אישי</h3></div>
        <PopingMenu/>
       
        
        </div>
        

        
<div className="hellowU"> 

<h3 className="space"><TaskModalPge/></h3>

<a>
  
  <div><ReactBigCalendar eventsData={eventsData} setEventsData={setEventsData}/></div>
  </a>
 
   <h6 className="words"></h6>
  </div>
      </div>
      {/* <TaskModalPage />
      <div1>
        <a><ReactBigCalendar /></a>
        <e></e>
        <w>hjhjh</w>
      </div1> */}


    </div>

    // </LocalizationProvider>
    // </Stack>
  );
}
