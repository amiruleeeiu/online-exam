import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import './Auth.css'

const Auth = () => {
    return (
        <div className="home">
            <div className="app-title">
                <h4>Welcome To</h4>
                <h1>SUST Online Examination System</h1>
            </div>
            <div className="auth">
                <SignIn></SignIn>
            </div>
        </div>
    );
};

export default Auth;