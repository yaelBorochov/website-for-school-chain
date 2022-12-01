import React, {useRef, useState} from 'react'
import { Form, Button, Card , Alert} from "react-bootstrap"
import { useAuth } from './context/AuthContext'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'


export default function ForgotPassword(){
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("בדוק את תיבת הדואר שלך להמשך התהליך")
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
            עדכון סיסמה
          </Typography>
        </Toolbar>

      </AppBar>
      <img  src="https://chv.org.il/wp-content/uploads/2019/06/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%95%D7%9C%D7%91_2-1024x251.png" width="100%"></img>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">עדכון סיסמה</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                <Form.Label>מייל</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                   עדכון סיסמה
                </Button>
            </Form>
            <div className="w-100 text-center mt-3">
                <Link to = "/login">כניסה לחשבון</Link>
            </div>
            </Card.Body>  
        </Card>
        <div className="w-100 text-center mt-2">
              עוד אין לך חשבון? <Link to = "/signup">הירשם</Link>
        </div>
        </div>
    );
}
