import React from 'react';
import TeacherResultList from '../../../components/Teacher/TeacherResultList/TeacherResultList';
import teacherFakeResult from '../../../TeacherData/TeacherFakeResult'

const TeacherResult = () => {
    console.log(teacherFakeResult);
    return (
        <div style={{width:'1000px',marginTop:'40px'}}>
            <TeacherResultList result={teacherFakeResult}></TeacherResultList>
        </div>
    );
};

export default TeacherResult;