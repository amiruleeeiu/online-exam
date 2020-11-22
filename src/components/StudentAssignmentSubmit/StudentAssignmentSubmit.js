import React from 'react';
import { useParams } from 'react-router-dom';
import './StudentAssignmentSubmit.css'
import fakeStudentAssignment from '../../fakeStudentAssignment'
import Sidebar from '../../pages/Sidebar/Sidebar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const StudentAssignmentSubmit = () => {
    const{assignmentId}=useParams();
    console.log(fakeStudentAssignment);
    console.log(assignmentId);

    const exastingAssignment=fakeStudentAssignment.find(assignment=>assignment.id===assignmentId);
    const{title,status,date,description}=exastingAssignment;

    const handleSubmit=()=>{
        window.location.pathname='/student/assignments'
    }

    return (
        <div style={{display:'flex'}}>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div style={{margin:'30px 10px 30px 30px'}}>
                <h3><ArrowBackIcon/> {title}</h3>
                <div style={{marginLeft:'20px',padding:'20px'}}>
                    <h5 style={{color:'blue',marginBottom:'20px'}}>{status} {date}</h5>
                    <p>{description}</p>
                    <label style={{color:'blue'}}> Attach Your Work</label>
                    <br/>
                    <input type="file"/>
                    <button className="main-button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            
        </div>
    );
};

export default StudentAssignmentSubmit;