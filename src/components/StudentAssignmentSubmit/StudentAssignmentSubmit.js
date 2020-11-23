import React from 'react';
import { useParams } from 'react-router-dom';
import './StudentAssignmentSubmit.css'
import fakeStudentAssignment from '../../fakeStudentAssignment'
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
    const handleBackPage=()=>{
        window.location.pathname='/student/assignments'
    }


    return (
        <div>
            <div style={{margin:'30px 10px 30px 30px',width:'1000px'}}>
                <div style={{display:'flex'}}>
                    <label onClick={handleBackPage}><ArrowBackIcon style={{ fontSize: 30,marginRight:'10px',cursor:'pointer' }}/></label>
                    <h3>{title}</h3>
                </div>
                
                <div style={{marginLeft:'20px',padding:'20px'}}>
                    <h5 style={{color:'blue',marginBottom:'20px'}}>{status} {date}</h5>
                    <p>{description}</p>
                    <label style={{color:'blue'}}> Attach Your Work</label>
                    <br/>
                    <div className="assisgnment-attach">
                        <input type="file" />
                    </div>
                    <br/>
                    <button className="main-button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            
        </div>
    );
};

export default StudentAssignmentSubmit;