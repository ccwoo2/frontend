import React from "react";
import {Button} from "react-bootstrap"
import {NavLink} from "react-router-dom";

const Dashboard = ()=>{
    return(
        <div className="dashboard">
            <h1 style={{width:500}}></h1>
            <NavLink to="/"><Button>login page</Button></NavLink>
            <br/>
            <NavLink to="/play"><Button>Play</Button></NavLink>
            <br/>
            <NavLink to="/create"><Button>Create questions</Button></NavLink>
            <br/>
            <Button>Button</Button>
            <br/>
            <Button>Button</Button>
            <br/>
        </div>
    )
}
export default Dashboard