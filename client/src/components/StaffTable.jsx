import React from 'react'
import PopingMenu from './PopingMenu'
import Table from './Table'
import Search from './Search'
import SecondTable from './SecondTable'
import firebase from 'firebase/compat/app';
import { Link } from 'react-router-dom'

export default function StaffTable() {
  const user = firebase.auth().currentUser;  
  let props1 = {
    t:"Staff",
    p:"none"
    }
  return (
    (user === null)?(<div >
    אתה לא מחובר... <Link to = "/login">היכנס</Link>
 </div>):
    (<div>
      {/* <Search/> */}
      <PopingMenu/>
      <div  style={{width:"82%"}}>
      <Table prop = {props1.t} prop2 = {props1.p}></Table>
      </div>
    </div>)
  );
}