import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import { firestore } from '../firebase/firebase';
import PlusButton from './PlusButton'
import PopingMenu from './PopingMenu'
import RegularTextField from './RegularTextField'
import './ClassStyle.css'
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { height } from '@mui/system';
import FileCard from './FileCard';
import firebase from 'firebase/compat/app';


var idS;
var s;
export default function StudentPage() {
    const {studentId} = useParams();
    let fileType = {
      one: "1",
      two: "2",
      three: "3",
      four: "4",
      five: "5",
      id: `${studentId}`,
    }
    // console.log(studentId)
    // idS = props.id;
    const studentRef = collection(firestore, "student");
    const [studentObjects, setStudentObjects] = useState([]);
    const fnameRef = useRef()
    const lNameRef = useRef()
    const emailRef = useRef()
    const IDRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const user = firebase.auth().currentUser;  


    function handleSubmit(){

    }
    //paramps
    // id = props.id;
    const getData = async () => {
        var q  = query(studentRef, where("idUser", "==", parseInt(studentId,10)));
        
        const snapshot = await getDocs(q)
        // const  results = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
        snapshot.forEach( async doc =>
           {  
            //  console.log(result)
             setStudentObjects(prev => [...prev, doc.data()])
            }
          
        )        
      }
    //   React.useEffect(()=>{getData()}, []);    
    //   React.useEffect(()=>{getData()});
    // React.useEffect(()=>{console.log(studentObjects)}, [studentObjects])

    //   const setData = async () =>{
    //     studentObjects.map((s)=>{
    //     fnameRef.current.value = s.name;
    //     lNameRef.current.value = s.lastName;
    //     emailRef.current.value = s.email;
    //     IDRef.current.value = s.id;
    //     phoneRef.current.value = s.phone;
    //     addressRef.current.value = s.address;
    //     })
    // }
    React.useEffect(()=>{getData()},[]);    
    // React.useEffect(()=>{setData()});    

  return (
    (user === null)?<div >
    אתה לא מחובר... <Link to = "/login">היכנס</Link>
 </div>:
    <div style={{width:"100%"}}>
      <PopingMenu/>
      {studentObjects.map((n, index) =>{ 
      return(
      <div className="flex" style={{width:"100%", height:"10%"}} key ={index}>
          <h6 style={{textAlign: 'right'}}>{ n.name}  { n.lastName}</h6>
          </div>
      )})}
      <div style={{width:"82%", height:"90%"}}>
      <h2>הוספת מסמכים</h2>
      <div className="flex" style={{width:"100%", height:"20%"}}>
          <FileCard props = {fileType.one} propsId = {fileType.id}/>
          <FileCard props = {fileType.two} propsId = {fileType.id}/>
          <FileCard props = {fileType.three} propsId = {fileType.id}/>
          <FileCard props = {fileType.four} propsId = {fileType.id}/>
          <FileCard props = {fileType.five} propsId = {fileType.id}/>
      </div>
         {/* <PlusButton /> */}
      </div>
    </div>
  )
}
