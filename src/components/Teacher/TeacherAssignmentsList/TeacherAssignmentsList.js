import React from 'react';
import './TeacherAssignmentsList.css'
import {Link} from 'react-router-dom';

const TeacherAssignmentsList = (props) => {
    
    console.log(props.assignment.submission);
    const{title,date,status,id}=props.assignment;
    
    return (
        <div className="assignments-item d-flex justify-content-between align-items-center">
            <h5>{title}</h5>
            <div>
                <p>{status}:{date}</p>
            </div>
            <div>
                <Link to={"/teacher/assignments/"+id}><button className="main-button" style={{backgroundColor:'#0DAA71'}}>Submissions</button></Link>
                <button className="main-button" style={{backgroundColor:'#36B3CE',marginLeft:'20px'}}>Edit</button>
            </div>
        </div>
    );
};

export default TeacherAssignmentsList;