import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import fakeResult from '../../../fakeResult';
import StudentResultItem from '../../../components/StudentResultItem/StudentResultItem';

const StudentResult = () => {
    return (
        <div style={{display:'flex'}}>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div style={{width:'1000px',margin:'30px 10px 20px 30px'}}>
                <h4>Results</h4>
                {
                    fakeResult.map(res=><StudentResultItem key={res.id} result={res}></StudentResultItem>)
                }
            </div>
        </div>
    );
};

export default StudentResult;