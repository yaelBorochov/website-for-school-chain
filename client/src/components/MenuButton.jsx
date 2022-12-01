import React from 'react';
import ReactDOM from 'react-dom/client';
import './Main.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';

export default function MenuButton   () {
  const navigate = useNavigate()
    const link = () => {
        return(
          

          navigate("/studentFile ")
          // <div className="w-100 text-center mt-3">
          //       <Link to = "/student-file">שכחת סיסמא?</Link>
          //   </div>
             
        )
    }
  
    return (
      <div>
      <div className='flex-containerh'>
        <div ><button onClick={link} className='button' > <span>תיק תלמיד</span></button></div>
        <div ><button onClick={link}className='button' ><span>תיק כיתה</span></button></div>
        <div ><button onClick={link}className='button' ><span>תיק מורה</span></button></div>
        </div>
      </div>);
  }
  