import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

import { storage } from '../firebase/firebase';
import PlusButton from './PlusButton';
import { IconButton } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

var selectedId;
var fileType;
export default function File(props) {
  selectedId = props.propsId;
  fileType = props.propsType;
  // console.log(selectedId)
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, selectedId+"/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = getFileUrl(selectedId, fileType); 
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
      alert("הקובץ הועלה בהצלחה");
      window.location.reload(false);
    });
  };
  const getFileUrl = (userId, fileType) => {
    return ref(storage, `${userId}/${fileType==="1"?"Briut":fileType==="2"?"Sodiut":fileType==="3"?"hok":fileType==="4"?"Medicine":"Accept"}`);
  };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div className="App" style={{width: "50%"}}>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
            {/* {imageUrls.map((url) => {
        return <img src={url} style = {{width: "100%"}} />;
      })} */}
      <IconButton onClick={uploadFile}> אישור
      <DownloadDoneIcon></DownloadDoneIcon>    
        </IconButton>
    </div>
  );
  
  
  
  // const [image , setImage] = useState();
    // const upload = ()=>{
    //   if(image == null)
    //     return;
    //   storage.ref.put(image)
    //   .on("state_changed" , alert("success") , alert);
    // }
      
    //   return (
    //     <div className="App">
    //       <center>
    //       <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
    //       <button onClick={upload}>העלאה</button>
    //       </center>
    //     </div>
    //   );
    }

