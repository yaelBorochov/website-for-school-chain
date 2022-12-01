import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import File from './File';
// import { storage } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, refFromURL } from 'firebase/storage';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { getStorage, deleteObject } from "firebase/storage";
import firebase from 'firebase/compat/app';
import { storage } from "../firebase/firebase.js";






var fileType;
var selectedId;
export default function FileCard(props) {
    fileType = props.props
    selectedId = props.propsId
    const navigate = useNavigate()
    const[url, setUrl] = useState();
  

    const setU=()=>{
        const imageRef = ref(storage, `${selectedId}/${fileType==="1"?"Briut":fileType==="2"?"Sodiut":fileType==="3"?"hok":fileType==="4"?"Medicine":"Accept"}`);
        getDownloadURL(imageRef).then(function(u){
            setUrl(u);
        }).catch(error=>{
            setUrl('');
        });
    };
    React.useEffect(()=>{setU()});  
    
    // const deleteFromFirebase = () => {
    //   //1.
    //   let pictureRef = storage.refFromURL(url);
    //  //2.
    //   pictureRef.delete()
    // };


    // function handleClick(obj){
    //      const imageRef = ref(storage, `${selectedId}/${fileType==="1"?"Briut":fileType==="2"?"Sodiut":fileType==="3"?"hok":fileType==="4"?"Medicine":"Accept"}`);
    //      getDownloadURL(imageRef).then(function(url){
    //         alert(url);
    //      return url;
    //     });
        // navigate(`/document/${selectedId}/${fileType}`);
    

// const downloadFile = () => {
//     const imageRef = ref(storage, `${selectedId}/${fileType==="1"?"Briut":fileType==="2"?"Sodiut":fileType==="3"?"hok":fileType==="4"?"Medicine":"Accept"}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         setImageUrls((prev) => [...prev, url]);
//       });
//       alert("הועלה בהצלחה");
//     });
//   };

    const handleDeleteFile =  async () =>{ 
      const fileRef = ref(storage, url);
      deleteObject(fileRef).then(function () {
        alert("הקובץ נמחק בהצלחה");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

      return (
    <Card sx={{width: "19%" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/5e/8e/1a/5e8e1a19-b1ea-16cf-b9f9-1050c6f29a1f/AppIcon_fm-1x_U007emarketing-85-220-3.png/1200x630wa.png"
        alt="green iguana"
      />
      <CardContent>
        
          <Typography gutterBottom variant="h5" component="div" >
        {url===""?<h5 >          {fileType==="1"?"הצהרת בריאות":fileType==="2"?"ויתור סודיות":fileType==="3"?"הוראת קבע":fileType==="4"?"טיפול תרופתי":"קבלת תלמיד"}
</h5>:(<a target='_blank' href={url}>
          {fileType==="1"?"הצהרת בריאות":fileType==="2"?"ויתור סודיות":fileType==="3"?"הוראת קבע":fileType==="4"?"טיפול תרופתי":"קבלת תלמיד"}
        </a>)}
            </Typography>


            <div><Typography
              sx={{ flex: '1 1 100%' }}
              color="inherit"
              variant="subtitle1"
              component="div"
            >
             {url!==""? <Tooltip title="Delete">
                <IconButton onClick={handleDeleteFile}>
                  <DeleteIcon />
                </IconButton>
      
              </Tooltip>:(<></>)}
            </Typography></div>
      
        
        <Typography variant="body2" color="text.secondary">
        </Typography>

      </CardContent>
      <CardActions>
        <File propsId = {selectedId} propsType = {fileType}/>
      </CardActions>

    </Card>
  );
}

