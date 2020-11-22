import React from 'react';
import { Link } from 'react-router-dom';

const StudentResultItem = (props) => {
    const{title,date,gainMarks,totalMarks,id}=props.result;

    return (
        <div className="exam-item d-flex justify-content-between">
            <h4>{title}</h4>
            <p>{date}</p>
            <h4>{gainMarks}<span style={{fontSize:'15px'}}>/{totalMarks}</span></h4>
            <Link to={"/student/results"+id}><button className="main-button">Details</button></Link>
        </div>
    );
};

export default StudentResultItem;