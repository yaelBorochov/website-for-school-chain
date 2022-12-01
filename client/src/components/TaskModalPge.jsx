import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import RegularTextField from './RegularTextField';
import { Form, Card , Alert} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { addDoc, doc, setDoc, collection } from "firebase/firestore";
import { firestore } from '../firebase/firebase';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SelectAdateInTheCalendar from './SelectAdateInTheCalendar';
import TimeDateClock from './TimeDateClock';
import ModeIcon from '@mui/icons-material/Mode';
import { getAuth } from "firebase/auth";
import PopingMenu from './PopingMenu';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import EventNoteIcon from '@mui/icons-material/EventNote';
// import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
// import ListItemButton from '@mui/material/ListItemButton'; 
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import ModeIcon from '@mui/icons-material/Mode';
// import ListOfTasks from './ListOfTasks';
// import TimeDateClock from './TimeDateClock';
// import { addDoc, collection } from "firebase/firestore";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

var tableType;
export default function ModalPage({setEventsData}) {
  // tableType = t;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dateTimeYear = React.useRef ()
    const timeClock = React.useRef()
    const TaskDescriptionOfTesk = React.useRef()
    const userIdEmail = React.useRef()
    const navigate = useNavigate();
    // {< { userIdEmail.current = user} required /> } 
    // {{userIdEmail.current = currentUser.email} }
    const handleSubmitStudent = async () =>{
    // console.log("yaelb")
    const auth = getAuth();
    const IdEmail = auth.currentUser.email;
    let time = timeClock.current
    let hours = parseInt(time[0]) * 10 + parseInt(time[1])
    let minutes=parseInt(time[3]) * 10 + parseInt(time[4])
    dateTimeYear.current = new Date(dateTimeYear.current.setHours(hours,minutes))
      // console.log(IdEmail)
  
                
      // console.log("fff")
      // console.log(dateTimeYear.current)
      const newTask = {
        date: dateTimeYear.current,
        // time: timeClock.current.value,
        TaskDescription: TaskDescriptionOfTesk.current.value, 
        userId: userIdEmail.current=IdEmail ,
      }
      await setDoc(doc(collection(firestore, "tasks")), newTask);
      // setEventsData(prev => [...prev, newTask])
      window.location.reload(false);
      // window.location.reload(false);
    }

  return (
    <div>
      <Button onClick={handleOpen}>
          <AddIcon/>
          הוספת משימה
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {/* <Card>
            <Card.Body> */}

             <div><h2 className="text-center mb-4">הוספת משימה</h2></div>
                <Button className="w-100" type="submit" onClick={handleSubmitStudent}>הוספה</Button>
            <Form >
             
                <div>
               {/* {userIdEmail.current = IdEmail} */}
                {/* {dateTimeYear.current=user}required */}
                <Form.Group id="date">
                     {/* <RegularTextField  t = "תאריך" ref={fnameRef} required></RegularTextField> */}
                     <EventNoteIcon/>                    
                 <Form.Label size = "small">תאריך</Form.Label>
                 
                 <SelectAdateInTheCalendar type="text" handleChange={(date) => dateTimeYear.current = date}  required /> 
                 
                 </Form.Group>
                 <Form.Group id="hour">
                 {/* <RegularTextField  t = "שעה" ref={lName} required></RegularTextField> */}
                 <Form.Label>שעה</Form.Label>
                 <TimeDateClock type="text" handleChange={(time) => timeClock.current=time}  required /> 
                
                 {/* <Form.Control ref={timeClock} required /> */}
                 {}
                 {/* <TimeDateClock type="text" ref={timeClock} required /> */}
                 </Form.Group>
                 <Form.Group id="discription">
                 {/* <RegularTextField t = "תאור משימה"></RegularTextField> */}
                 <ModeIcon/>
                 <Form.Label>תאור המשימה</Form.Label>
               
                 <Form.Control ref={TaskDescriptionOfTesk} required />
                </Form.Group>
                </div>
                <div>
                
                </div>
              
            </Form>
            {/* </Card.Body>  
        </Card> */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}







// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import AddIcon from '@mui/icons-material/Add';
// import RegularTextField from './RegularTextField';
// import { Form, Card , Alert} from "react-bootstrap"
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { doc, setDoc } from "firebase/firestore";
// import { firestore } from '../firebase/firebase';
// import PopingMenu from './PopingMenu';
// import SelectAdateInTheCalendar from './SelectAdateInTheCalendar';
// import ListOfTeachers from './ListOfTeachers';
// import SearchIcon from '@mui/icons-material/Search';
// import ListOfTasksForTeacher from './ListOfTasksForTeacher';
// import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import EventNoteIcon from '@mui/icons-material/EventNote';
// import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
// import ListItemButton from '@mui/material/ListItemButton'; 
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import ModeIcon from '@mui/icons-material/Mode';
// import ListOfTasks from './ListOfTasks';
// import TimeDateClock from './TimeDateClock';
// import { addDoc, collection } from "firebase/firestore";


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };




// export default function TaskModalPge() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const dateTimeYear = React.useRef ()
//   const timeClock = React.useRef()
//   const taskType = React.useRef()
//   const participantsNames = React.useRef()
//   const locationTime = React.useRef()
//   const TaskDescriptionOfTesk = React.useRef()
 



//   async function handleSubmit(e){
//     e.preventDefault()
//       const handleSubmitStudent = async () =>{
//     // e.preventDefault()
//   await setDoc(doc(collection(firestore, "tasks")),{
//     // name: newName,
//     // lastName: newLName,
//     // id: newId,
//     // email: newEmail, 
//     // phone: newPhone,
//     // age: newAge,
//     // address: newAddress,
//     //  timestamp: {date: , time: },
//     date: dateTimeYear.current.value,
//     time: timeClock.current.value,
//     task: taskType.current.value,
//     Participants: participantsNames.current.value,
//     location: locationTime.current.value,
//     TaskDescription: TaskDescriptionOfTesk.current.value,  
//   });
//   window.location.reload(false);
// }
//             //console.log(fnameRef.current.value)
//            // await add(fnameRef.current.value, lNameRef.current.value,IDRef.current.value, emailRef.current.value, phonelRef.current.value, ageRef.current.value, addressRef.current.value)
//             // navigate("/students ")
//           }
//   return (
//     <div style={{maxWidth: 700}}>
//         {/* <PopingMenu/> */}
//       <Button onClick={handleOpen}>
//           <AddIcon/>
//           משימה חדשה
//         </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         style={{width: 700}}
//       >
//         <Box sx={style} >
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//           {/* <Card>
//             <Card.Body> */}
//             <div className="text-center mb-4">הוספת משימה</div>
//             <Form onSubmit={handleSubmit}>
//                 <Button className="w-100" type="submit">
//                     הוספה
//                 </Button>
//                 <Form.Group id="date">
//                     {/* <RegularTextField  t = "תאריך" ref={fnameRef} required></RegularTextField> */}
//                     <EventNoteIcon/>
                    
//                 <Form.Label size = "small">תאריך</Form.Label>
//                 <SelectAdateInTheCalendar type="text" handleChange={(date) => dateTimeYear.current = date}  required /> 
//                 </Form.Group>
//                 <Form.Group id="hour">
//                 {/* <RegularTextField  t = "שעה" ref={lName} required></RegularTextField> */}
//                 <Form.Label>שעה</Form.Label>
//                 <Form.Control ref={TimeDateClock} required />
//                 {}
//                 {/* <TimeDateClock type="text" ref={timeClock} required /> */}
//                 </Form.Group>
//                 {/* <Form.Group id="oneTesk"> */}
//                 {/* <RegularTextField t = "סוג משימה"></RegularTextField> */}
//                 {/* <ListAltIcon/> */}
//                 {/* <Form.Label>סוג משימה</Form.Label> */}
//                 {/* <ListItemButton></ListItemButton> */}
//                 {/* <ListOfTasks type="text" ref={taskType}  required /> */}
                
//                 {/* <RolingList/> */}
//                 {/* </Form.Group> */}
//                 {/* <Form.Group id="participat"> */}
//                 {/* <RegularTextField t = "משתתפים" ref={IDRef} required></RegularTextField> */}
//                 {/* <Form.Label>משתתפים</Form.Label>
//                 <SearchIcon /> */}
//                 {/* <ListOfTasksForTeacher type="text" ref={participantsNames} required/> */}
//                 {/* <Form.Control ref={IDRef} required /> */}
                
//                 {/* </Form.Group> */}
//                 {/* <Form.Group id="location"> */}
//                 {/* <RegularTextField t = "מיקום"></RegularTextField> */}
//                 {/* <FmdGoodIcon/> */}
//                 {/* <Form.Label>מיקום</Form.Label> */}
//                 {/* <Form.Control ref={locationTime} required /> */}
//                 {/* </Form.Group> */}
//                 <Form.Group id="discription">
//                 {/* <RegularTextField t = "תאור משימה"></RegularTextField> */}
//                 <ModeIcon/>
//                 <Form.Label>תאור המשימה</Form.Label>
               
//                 <Form.Control ref={TaskDescriptionOfTesk} required />
//                 </Form.Group>
//                 <Form.Group id="address">
//                 {/* <RegularTextField t = "כתובת"></RegularTextField>
//                 <Form.Label>כתובת</Form.Label>
//                 <Form.Control ref={addressRef} required /> */}
//                 </Form.Group>
//             </Form>
//             {/* </Card.Body>  
//         </Card> */}
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
