import React from 'react';
import logo from '../../../images/logo 1.png'
import TeacherSidebarList from '../../../components/Teacher/TeacherSidebarList/TeacherSidebarList';
const TeacherSidebar = () => {
    return (
        <div className="sidebar">
            <div style={{textAlign:'center'}}>
                <img src={logo} alt="logo"/>
                <h6>Online Examination System</h6>
            </div>
            <div>
                <TeacherSidebarList></TeacherSidebarList>
            </div>
        </div>
    );
};

export default TeacherSidebar;