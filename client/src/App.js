//import logo from './logo.svg';
//import './App.css';
import React from 'react';

import Signup from './components/Signup'
import Login from './components/Login';
import Table2 from './components/Table2';
import Dashboard from './components/Dashboard';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './components/context/AuthContext';


// import  Signup  from './components/Signup'
// import { Container } from 'react-bootstrap';
// import { AuthProvider } from './components/context/AuthContext';
// import { Student_table } from './components/context/AuthContext';

import { ReactFirebaseFileUpload } from './components/ReactFirebaseFileUpload';

// import { ReactFirebaseFileUpload } from './components/ReactFirebaseFileUpload';


// import { ReactFirebaseFileUpload } from './components/ReactFirebaseFileUpload';

// import { ReactFirebaseFileUpload } from './components/ReactFirebaseFileUpload';



import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ForgotPassword from './components/ForgotPassword';

import Main from './components/Main';
import StudentTable from './components/StudentTable';
import StaffTable from './components/StaffTable';
import HomePage from './components/HomePage';
import ClassTable from './components/ClassTable';
import Schedule from './components/Schedule';
import FullCalendar from './components/FullCalendarComponent';
import FullCalendarComponent from './components/FullCalendarComponent';
import StudentPage from './components/StudentPage';
import File from './components/File';
import Documents from './components/Documents';



function App() {
  return (

    // <ReactFirebaseFileUpload />


    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", alignContent: 'center' }}>
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/students" element={<StudentTable />} />
              <Route path="/staff" element={<StaffTable />} />
              <Route path="/home-page" element={<HomePage />} />
              <Route path="/class" element={<ClassTable />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/upload" element={<File />} />
              <Route path="/student-page/:studentId" element={<StudentPage />} />
              <Route path="/document/:selectedId/:fileType" element={<Documents />} />
              {/* <Route path="/FullCalendar" element={<FullCalendarComponent />} /> */}
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}
// function App() {
//   return (
//     <Student_table>
//     <Container className="d-flex align-items-center justify-content-center"
//     style={{ minHeight: "100vh" }}>
//         <div className="w-100" style={{ maxWidth: "400px" }}>
//             <Signup /> 
//         </div>
//     </Container>
//     </Student_table>
//   );
// }

/////<ReactFirebaseFileUpload />

// <AuthProvider>
// <Container className="d-flex align-items-center justify-content-center"
// style={{ minHeight: "100vh" }}>
//     <div className="w-100" style={{ maxWidth: "400px" }}>
//         <Signup /> 
//     </div>
// </Container>
// </AuthProvider>
//);
//}
//function App() {
//return (
//<Student_table>
//</Student_table>/<Container className="d-flex align-items-center justify-content-center"
//style={{ minHeight: "100vh" }}>
//<div className="w-100" style={{ maxWidth: "400px" }}>
//    <Signup /> 
//  </div>
//</Container>
// </Student_table>
// );
//}



export default App;

