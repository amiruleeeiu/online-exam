import React from 'react';
import { useParams } from 'react-router-dom';
import fakeResult from '../../fakeResult';
import Sidebar from '../../pages/Sidebar/Sidebar';
const StudentResultItemDetail = () => {
    const {examId}=useParams();

    const exastingExamResult=fakeResult.find(res=>res.id===examId);
    const {title,gainMarks}=exastingExamResult;

    return (
        <div style={{display:'flex'}}>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div style={{margin:'30px 20px 20px 30px'}}>
                <h4>{title}</h4>
                <div>

                </div>

            </div>
        </div>
    );
};

export default StudentResultItemDetail;