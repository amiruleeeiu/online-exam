import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PollIcon from '@material-ui/icons/Poll';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ClassIcon from '@material-ui/icons/Class';
import CommentIcon from '@material-ui/icons/Comment';

const TeacherSidebarList = () => {

    const[activePage,setActivePage]=useState('dashboard');

    console.log(activePage);
    return (
        <div className="sidebar-list">
            <ul>
               <li className={activePage==='dashboard' && 'activePage'}><Link to="/teacher/dashboard" onclick={()=>setActivePage('dashboard')}><DashboardRoundedIcon/> Dashboard</Link></li>
               <li className={activePage==='allexam' && 'activePage'}><Link to="/teacher/allexam" onclick={()=>setActivePage('allexam')}><ClassIcon/> All Exams</Link></li>
               <li className={activePage==='results' && 'activePage'}><Link to="/teacher/results" onclick={()=>setActivePage('results')}><PollIcon/> Results</Link></li>
               <li className={activePage==='assignments' && 'activePage'}><Link to="/teacher/assignments" onclick={()=>setActivePage('assignments')}><AssignmentTurnedInIcon/> Assignments</Link></li>
               <li className={activePage==='studentfeedbacks' && 'activePage'}><Link to="/teacher/studentfeedbacks" onclick={()=>setActivePage('studentfeedbacks')}><CommentIcon/> Student Feedbacks</Link></li>
            </ul>
        </div>
    );
};

export default TeacherSidebarList;