import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './StudentDashboard.css'
import fakeExam from '../../../fakeExam';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import UpcommingExamItem from '../../../components/UpcommingExamItem/UpcommingExamItem'
const StudentDashboard = () => {

    return (
        <div className="dashboard-container">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className="dashboard-items">
                <div className="dashboard-next-exam d-flex justify-content-between">
                    <div>
                        <h6>Next Exam</h6>
                        <h3>CSE133Term Test1</h3>
                    </div>
                    <div>
                        <button className="main-button">Enter Now <ArrowForwardIcon/></button>
                    </div>
                </div>
                <div className="dashboard-upcomming-exam">
                    <h4>UpComming Exams</h4>
                    {
                        fakeExam.map(ex=><UpcommingExamItem key={ex.id} exam={ex}></UpcommingExamItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;