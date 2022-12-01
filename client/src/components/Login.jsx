import React, {useRef, useState} from 'react'
import { Form, Button, Card , Alert} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { Link } from 'react-router-dom'
import { alignProperty } from '@mui/material/styles/cssUtils'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { textAlign } from '@mui/system'
import { AppBar, Toolbar, Typography } from '@mui/material'

const drawerWidth = 240;


export default function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    //const history = useHistory()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            //history.push("/")
            navigate("/home-page ")
        } catch(err){
            setError(err.message)
        }
        setLoading(false)
     }

    return (
        <div style={{maxWidth: 400, margin: "auto"}}>
        <AppBar
        position="fixed"
        sx={{ width: "100%" }}
        //`calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px`
      >
        <Toolbar>
            {/* <img  src="https://chv.org.il/wp-content/uploads/2019/06/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%95%D7%9C%D7%91_2-1024x251.png" width="10%"></img> */}
          <Typography variant="h6" noWrap component="div">
            כניסה
          </Typography>
        </Toolbar>

      </AppBar>
                    <img  src="https://chv.org.il/wp-content/uploads/2019/06/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%95%D7%9C%D7%91_2-1024x251.png" width="100%"></img>
      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >        {/* <Toolbar /> */}
      {/* </Drawer> */} 
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">כניסה לחשבון</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                <Form.Label>מייל</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                <Form.Label>סיסמה</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                    כניסה
                </Button>
            </Form>
            <div className="w-100 text-center mt-3">
                <Link to = "/forgot-password">?שכחת סיסמה</Link>
            </div>
            </Card.Body>  
        </Card>
        <div className="w-100 text-center mt-2">
              עוד אין לך חשבון? <Link to = "/signup">הירשם</Link>
        </div>
        </div>
    );
}



