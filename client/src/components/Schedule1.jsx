import React, { Component } from 'react'
 
 import Timetable from '@aldabil/react-scheduler'
 
const settings = {
    startDay: "09:00",
    endDay: "16:00",
    is12hours: false,
    hourSplit: 0.25, // 1 hour / 0.25 = 15 min - each row
    columnCnt: 4
};
 
export default function Schedule1(){
  // class Example extends Component {
    // render () {
      return (
        <Timetable  />
      )
    // }
  // }
}