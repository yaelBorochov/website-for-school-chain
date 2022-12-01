import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function RegularTextField(t) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0.5, width: '25ch' },
      }}
      // noValidate
      // autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField id="filled-basic" label= {t.t} variant="filled"   align= "right"/>
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
}
