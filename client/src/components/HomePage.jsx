import React, { useEffect } from 'react'
import { useAuth } from './context/AuthContext'
import Images from './Images'
import Sentence from './Sentence'
import PopingMenu from './PopingMenu'
import Search from './Search'
import firebase from 'firebase/compat/app';
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'

export default function HomePage() {
  const user = firebase.auth().currentUser;  
  // const navigate = useNavigate();

  // const { currentUser  } = useAuth();
  // if(user === null ){
  //   return (
  //     <div>
  //       <Login/>
  //     </div>
  //   )
  // try{
  //   useEffect=()=>{
  //   navigate( "/login");
  //   }
  // } catch{
  //   console.log("error");
  // }
  return (
    (user === null)?<div >
    אתה לא מחובר... <Link to = "/login">היכנס</Link>
    
 </div>:
     ( <div >
      
        <PopingMenu />
        <Sentence/>
        {/* <div> <h1><b>תנו לילד חינוך ועתיד</b></h1></div> */}
        {/* <Images/> */}
      </div>)
  )
  // }
  
}