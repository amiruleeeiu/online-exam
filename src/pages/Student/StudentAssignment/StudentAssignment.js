import React from 'react';
import fakeStudentAssignment from '../../../fakeStudentAssignment';
import StudentAssignmentItem from '../../../components/StudentAssignmentItem/StudentAssignmentItem';

const StudentAssignment = () => {
    
    return (
        <div>
            <div style={{margin:'30px 10px 20px 0px',width:'1000px'}}>
                <h3>Assignments</h3>
                {
                    fakeStudentAssignment.map(assignment=><StudentAssignmentItem key={assignment.id} assignment={assignment}></StudentAssignmentItem>)
                }
            </div>
        </div>
    );
};

export default StudentAssignment;