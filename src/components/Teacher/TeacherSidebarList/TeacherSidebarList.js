import React from 'react';
import { Link } from 'react-router-dom';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PollIcon from '@material-ui/icons/Poll';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ClassIcon from '@material-ui/icons/Class';
import CommentIcon from '@material-ui/icons/Comment';

const TeacherSidebarList = () => {

    return (
        <div className="sidebar-list">
            <ul>
               <li><Link to="/teacher/dashboard"><DashboardRoundedIcon/> Dashboard</Link></li>
               <li><Link to="/teacher/allexam"><ClassIcon/> All Exams</Link></li>
               <li><Link to="/teacher/results"><PollIcon/> Results</Link></li>
               <li><Link to="/teacher/assignments"><AssignmentTurnedInIcon/> Assignments</Link></li>
               <li><Link to="teacher/studentfeedbacks"><CommentIcon/> Student Feedbacks</Link></li>
            </ul>
        </div>
    );
};

export default TeacherSidebarList;