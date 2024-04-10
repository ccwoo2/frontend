import {React} from "react";
import {useState} from "react"
import {Button, Form} from "react-bootstrap"
import { NavLink, Navigate, useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from "./dashboard";


const Homepage=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

      
  // Function to handle user login
  // Similar to register, but this function is called when 'Login' button is clicked
  const login = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        console.log(response)
        alert('Logged in successfully');
        
        window.location.replace(response.url)
        // window.location.replace("/dashboard")
        setUsername('');
        setPassword('');


      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };


    return(
        <div>
            <Form className="loginPage">
                <Form.Label >
                    Id:
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Label>
                <br/>
                <Form.Label>
                    Password:
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
       
                </Form.Label>
                <br/>
                <Button onClick={login}>login</Button>
                <br/>
                <br/>   
                <NavLink to="/register"><Button>Resgister</Button></NavLink>
                
            </Form>
            
        </div>
    )
}
export default Homepage