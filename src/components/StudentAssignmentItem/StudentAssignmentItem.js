import React from 'react';
import { Link } from 'react-router-dom';

const StudentAssignmentItem = (props) => {
    const{title,date,status,id}=props.assignment;

    return (
        <div className="exam-item d-flex justify-content-between">
            <h4>{title}</h4>
            <p>{date}</p>
            <Link to={"/student/assignments/"+id}><button className="main-button">Submit</button></Link>
        </div>
    );
};

export default StudentAssignmentItem;