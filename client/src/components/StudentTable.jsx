import React from 'react'
import PopingMenu from './PopingMenu'
import Table from './Table'
import Search from './Search'
import firebase from 'firebase/compat/app';
import { Link } from 'react-router-dom';

export default function StudentTable() {
  const user = firebase.auth().currentUser;  
  let props1 = {
    t:"Student",
    p:"none"
    }
  return (
    (user === null)?(<div >
    אתה לא מחובר... <Link to = "/">היכנס</Link>
 </div>):
    (<div>
      <PopingMenu/>
      <div  style={{width:"81%"}}>
      <Table prop = {props1.t} prop2 = {props1.p}></Table>
      </div>
    </div>)
  );
}
