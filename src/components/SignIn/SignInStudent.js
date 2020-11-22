import React from 'react';
import { Form } from 'react-bootstrap';

const SignInStudent = () => {

    const handleSubmit=()=>{
        window.location.pathname='/student/dashboard';
    }
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Registration Number</Form.Label>
                    <Form.Control type="email" placeholder="Registration Number" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <input className="main-button" onClick={handleSubmit} type="reset" value="Proceed"/>
            </Form>
        </div>
    );
};

export default SignInStudent;