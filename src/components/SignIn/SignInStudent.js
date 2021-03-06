import React from 'react';
import { Form } from 'react-bootstrap';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

const SignInStudent = () => {

    const handleSubmit=()=>{
        window.location.pathname='/student/dashboard';
    }

    return (
        <div>
            <form>
                <label style={{color:'purple'}}>Registration Number</label>
                <br/>
                <input type="text" style={{width:'400px'}} placeholder="201xxxxxxx"/>
                <br/>
                <label style={{color:'purple'}}>Password</label>
                <input style={{width:'400px',marginBottom:'20px'}} type="text"/>
                <br/>

                <Link to="/student/dashboard"><button className="main-button" >Proceed <ArrowForwardIcon/></button></Link>
                <p style={{color:'#49006B',marginTop:'20px'}}><strong>Forgot Password</strong></p>
            </form>
        </div>
    );
};

export default SignInStudent;