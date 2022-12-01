import React from 'react'
import DashboardMenu from './DashboardMmenu'
import MenuButton from './MenuButton'
import './Main.css'
import ReactDOM from 'react-dom/client';
import NavigateButtons from './NavigateButtons';



export default function Main() {
  return (
      <div>
         <div className='topright'>
                <img  src="https://chv.org.il/wp-content/uploads/2019/06/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%95%D7%9C%D7%91_2-1024x251.png" width="40%"></img>
                </div>
        <div className='flex-container'>
            <div className='location'>
                 <DashboardMenu />
            </div>
            <div className='right-aligned'>
                {/* <div className='topright'>
                <img  src="https://chv.org.il/wp-content/uploads/2019/06/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%95%D7%9C%D7%91_2-1024x251.png" width="40%"></img>
                </div> */}
            </div>
        </div>
        <div>
           <h1>תפריט</h1>
            <hr />
        <br></br>
        
        </div>
        <NavigateButtons />
      </div>
  )
}
