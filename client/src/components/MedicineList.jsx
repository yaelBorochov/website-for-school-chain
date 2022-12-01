import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

var classGrade;

export default function MedicineList(prop) {
    classGrade = prop.prop;
  const [checked, setChecked] = React.useState([1]);
  const studentRef = collection(firestore, "student");
  const [studentObjects, setStudentObjects] = React.useState([]);

const getData = async () => {
  var q  = query(studentRef, where("grade", "==", classGrade));
  
  const snapshot = await getDocs(q)
  snapshot.forEach(doc =>
     {
       //console.log(doc.data())  
       setStudentObjects(prev => [...prev, doc.data()])
      }
    
  ) 
  
}
React.useEffect(()=>{getData()}, []);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
      {
          studentObjects.map((s) =>{
              return(
              <ListItemText id={labelId} primary={`${s.name}`} />
              )
          })}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
