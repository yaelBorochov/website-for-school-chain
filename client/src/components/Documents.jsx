import { getDownloadURL, ref } from 'firebase/storage';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { storage } from '../firebase/firebase';
import PopingMenu from './PopingMenu'

export default function Documents() {
    const {selectedId} = useParams();
    const {fileType} = useParams();
    const [imageUrls, setImageUrls] = useState([]);
        const spaceRef = ref(storage, `${selectedId}/${fileType==="1"?"Briut":fileType==="2"?"Sodiut":fileType==="3"?"hok":fileType==="4"?"Medicine":"Accept"}`);
    getDownloadURL(spaceRef).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
  return (
    <div>
      <PopingMenu/>
    <div style={{width: "82%"}}>
    <object data={imageUrls[0]} width="300" height="200">
Not supported
</object>
    </div>
    </div>
  )
}
