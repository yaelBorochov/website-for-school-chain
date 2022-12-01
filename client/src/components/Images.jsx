import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Images() {
  return (
    <Box sx={{ width: 1200, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
   {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTQ0-LpaoJe4RpUxSm3kCBL6546nYttREw6G_3KdkROXmoUEfxLMEGEfLaxZuV8Vws2Y&usqp=CAU',
    title: 'Blinds',
  },
 
  {
    
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTYXWdx8wTy8JspZonbdw_PuUKiF4c-vTWw&usqp=CAU',
    title: 'Books',
  },

];
