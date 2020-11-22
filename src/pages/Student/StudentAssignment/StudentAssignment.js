import React from 'react';
import Sidebar from '../../Sidebar/Sidebar'
import fakeStudentAssignment from '../../../fakeStudentAssignment';
import StudentAssignmentItem from '../../../components/StudentAssignmentItem/StudentAssignmentItem';

const StudentAssignment = () => {
    
    return (
        <div style={{display:'flex'}}>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div style={{margin:'30px 10px 20px 30px',width:'1000px'}}>
                <h3>Assignments</h3>
                {
                    fakeStudentAssignment.map(assignment=><StudentAssignmentItem key={assignment.id} assignment={assignment}></StudentAssignmentItem>)
                }
            </div>
        </div>
    );
};

export default StudentAssignment;