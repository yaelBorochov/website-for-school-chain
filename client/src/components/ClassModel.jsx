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
import { useAuth } from './context/AuthContext';
import SelectedRolingList from './SelectedRolingList'


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
// async function add(fname, lname, id, email, phone, age, address) {
//   const studentRef = collection(firestore, "student");
//   const staffRef = collection(firestore, "staff");
//   await setDoc(doc(firestore, {
//     name: fname,
//     lastName: lname,
//     id: id,
//     email: email,
//     phone: phone,
//     age: age,
//     address: address,
//   }));

  
//  }


// var tableType;
export default function ClassModal() {
//   tableType = t;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fnameRef = React.useRef ()
  const lNameRef = React.useRef()
  const navigate = useNavigate()
  const { currentUser,  } = useAuth()

    const handleSubmitStaff = async () =>{
      // e.preventDefault()
    await setDoc(doc(collection(firestore, "classes" )),{
      grade: fnameRef.current.value,
      disabilityCode: lNameRef.current.value,
    });
    window.location.reload(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>
          <AddIcon/>
          כיחה חדשה
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

            <div><h2 className="text-center mb-4">הוספת כיתה</h2></div>
                <Button className="w-100" type="submit" onClick={handleSubmitStaff}>הוספה</Button>
            <Form >
                <div style={{display: 'flex' , flexWrap : 'nowrap'}}>
                <div>
                <Form.Group id="first-name">
                    {/* <RegularTextField  t = "שם פרטי"  value = {newName} onChange={(event) => {console.log(event.target.value); setNewName(event.target.value)}}></RegularTextField> */}
                 <Form.Label>כיתה</Form.Label>
                <Form.Control type="text" ref={fnameRef}  required /> 
                </Form.Group>
                <Form.Group id="last-name">
                {/* <RegularTextField  t = "שם משפחה"  value = {newLName} onChange={(event) => setNewLName(event.target.value)}></RegularTextField> */}
                <Form.Label>קוד לקות</Form.Label>
                <Form.Control type="text" ref={lNameRef} required />
                </Form.Group>
                </div>
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
