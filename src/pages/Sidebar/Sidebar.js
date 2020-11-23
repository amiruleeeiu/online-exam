import React from 'react';
import './sidebar.css'
import logo from '../../images/logo 1.png'
import StudentSidebar from '../../components/Sidebar/StudentSidebar';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div style={{textAlign:'center'}}>
               <Link to="/student/dashboard"><img src={logo} alt="logo"/></Link>
                <h6>Online Examination System</h6>
            </div>
            <div>
                <StudentSidebar></StudentSidebar>
            </div>
        </div>
    );
};

export default Sidebar;