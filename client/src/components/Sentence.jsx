import * as React from 'react';
import "../style/image1.css"
import Design from './Design'



export default function sentence() {
  return (
    <div>
      <Design />

      <div className="flex-container">
        <div className="flex-container4">
          
        </div>
        {/* <div> <p className='font11'>לצפיה במידע היעזרו בכפתורי הניווט={'>'}</p></div> */}
        <div  className='font11' > <img src="https://www.hamila.biz/first/" alt="" /></div>
      </div>   
      <div className="flex-container">
        <div className="flex-container4">
          
        </div>
        <div><h1 className='font1'>לילד</h1></div>
        <div><h1 className='font1'>תנו </h1></div>
      </div>
      <div className="flex-container2">
        <div className="flex-container3">
          <div><h1 className='font2'>ועתיד</h1></div>
          <div><h1 className='font2'>חינוך </h1></div>
        </div>
      </div>
    </div>
  )
}