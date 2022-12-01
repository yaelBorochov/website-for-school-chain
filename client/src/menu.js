import logo from './logo.svg';
import './menu.css';
import { Student_file } from './components/Student_file';
import { Class_file } from './components/Class_file';
import { Teacher_file } from './components/Teacher_file';

function Menu() {
  return (
    <div>
      <h1>תפריט</h1>
      <hr/>
      <b><Student_file />
     <Class_file />
      <Teacher_file /></b>
    </div>
  );
}

export default Menu;





