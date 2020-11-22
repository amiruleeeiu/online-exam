import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import StudentMyExamList from '../../../components/StudentMyExamList/StudentMyExamList'
import fakeExam from '../../../fakeExam';
import './StudentMyExam.css'

const StudentMyExam = () => {
    return (
        <div className="student-exam-container">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div style={{margin:'30px 10px 20px 30px',width:'1000px'}}>
                <StudentMyExamList exam={fakeExam}></StudentMyExamList>
            </div>
        </div>
    );
};

export default StudentMyExam;