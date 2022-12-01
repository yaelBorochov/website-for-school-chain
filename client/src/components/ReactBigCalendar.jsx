import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getAuth } from "firebase/auth";
import { addDoc, doc, setDoc, collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
// import { addDoc, doc, setDoc, collection } from "firebase/firestore";
import { firestore } from '../firebase/firebase';
// import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import "./styles.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css


moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar({eventsData, setEventsData}) {


  console.log("yaelb")
  const auth = getAuth();
  const UseEmail = auth.currentUser.email;
  console.log(UseEmail)

  const tasksRef = collection(firestore, "tasks");
  const [studentObjects, setStudentObjects] = useState([]);

  const getData = async () => {
    var q = query(tasksRef, where("userId", "==", UseEmail));
    const snapshot = await getDocs(q)
    snapshot.forEach(doc => {
      // Create a query against the collection
      // const allCapitalsRes = await getDocs.where('TaskDescription', '==', true).get();index.js
      console.log(doc.data([0]).TaskDescription)
      var timestamp = doc.data([0]).date.seconds * 1000
      // const obj = doc.data();
      const obj = doc.data([0]).TaskDescription;
      setEventsData(prev => [...prev, { title: obj, id: doc.id, start: new Date(timestamp) , end: new Date(timestamp) }])
      

      //  console.log(result[temp].date) 
      //  setStudentObjects(prev => [...prev, doc.data()])
      // temp++;
    }
    )
  }
  useEffect(() => {
    getData()
  }, [])

  
  // const handleSelect = ({ start, end }) => {
  //   console.log(start);//the day of the task
  //   // console.log("start");
  //   console.log(end);//finish the task in the next day
  //   const title = window.prompt("New Event name");//titel=what the user write 
  //   if (title)
  //     setEventsData(prev => [
  //       ...prev,
  //       {
  //         start,
  //         end,
  //         title
  //       }
  //     ]);
  // };
  const newO = async (sam) => {
      // const docRef = doc(firestore, "student", "1h0GqsjdkUvTwnp6AqXV");
      // await deleteDoc(docRef);
  
      
      const studentRef = collection(firestore, "tasks");
      
      // const staffRef = collection(firestore, "staff");
      var q;
      var docRef;
      {q = query(studentRef, where("TaskDescription", "==", sam));}
        const snapshot = await getDocs(q);
      console.log("me")
      snapshot.forEach(async item=>{
        console.log("q")
      
       const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
       console.log(results)
       results.forEach(async result => {
        {docRef = doc(firestore, "tasks", result.id);}
        await deleteDoc(docRef);
        window.location.reload(false);
       });
  
      });
    

  }
  const handleClickBasic = (indexToRemove) => {
    confirmAlert({
     
      message: indexToRemove,
      buttons: [
        {
          label: "למחיקה לחץ כאן",
          onClick: () => newO(indexToRemove)
        },
        {
          label: "לאישור לחץ כאן",
          // onClick: () => alert("Click No")
        }
      ]
    });
  };

  const handleClickCustom = (indexToRemove) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to delete this file?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                // removeRecord(indexToRemove)
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      }
    });
  };
  return (
    <div className="App">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        
        onSelectEvent={(event) => {handleClickBasic(event.title) }}
     
    //  {<Button className="w-100" type="submit" onClick={handleSubmitStudent}>הוספה</Button>}
        // onSelectSlot={setEventsData}
      />
    </div>
  );
}
