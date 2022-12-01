import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


export default function NavigateButtons() {
    const navigate = useNavigate()
    // async function  handleClick(e, x) {
    //     if(x === 1)
    //         navigate("/students")
    //     else if(x === 2)
    //         navigate("/staff")
    //     else
    //     navigate("/staff")
    //  }
     const handleClick1 = (event) => {
        navigate("/students")
      };
      const handleClick2 = (event) => {
        navigate("/staff")
      };
      const handleClick3= (event) => {
        navigate("/staff")
      };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      {/* <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      <ButtonGroup  variant="text" size="large" aria-label="large button group" fullWidth={true}>
        <Button onClick={handleClick3}>תיק כיתה</Button>
        <Button onClick={handleClick2}>צוות</Button>
        <Button onClick={handleClick1}> תלמידים </Button>
      </ButtonGroup>
    </Box>
  );
}
