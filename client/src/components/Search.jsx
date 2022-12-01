import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Textbox from './Textbox'

export default function Search() {
  return (
    <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={4}>
        <Typography><Textbox/></Typography>
      </Grid>
      <Grid item xs={8}>
        <SearchIcon />
      </Grid>
    </Grid>
  );
}
