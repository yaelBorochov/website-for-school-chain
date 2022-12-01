import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function NativePickers({handleChange}) {
  return (
    <Stack component="form" noValidate spacing={3}>
    
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        onChange={(event) => {
          console.log(event.target.value)
          handleChange(event.target.value)
        }}
        InputLabelProps={{
          shrink: true,
        }}
        // inputProps={{
        //   step: 300, // 5 min
        // }}
        // sx={{ width: 150 }}
      />
      
      {/* {console.log(type)} */}
    </Stack>
  );
}
