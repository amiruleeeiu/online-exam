import React from 'react';
import { useParams } from 'react-router-dom';
import './AllExamItemDetail.css'
import fakeExam from '../../../fakeExam';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const AllExamItemDetail = () => {
    const{examId}=useParams();
    const exastingExam=fakeExam.find(exam=>exam.id===examId);
    const{title,time,status,description}=exastingExam;

    const handleBackPage=()=>{
        window.location.pathname="/teacher/allexam"
    }
    return (
        <div className="allexam-item-detail">
            <div style={{display:'flex'}}>
                <label onClick={handleBackPage}><ArrowBackIcon style={{ fontSize: 30,marginRight:'10px',cursor:'pointer' }}/></label>
                <h3>{title}</h3>
            </div>
            <div style={{width:'1000px',paddingLeft:'50px'}}>
                <h5>{status} {time}</h5>
                <br/>
                <p>{description}</p>
                <br/>
                <button className="main-button">Copy Link</button>
                <button className="main-button" style={{marginLeft:'20px',marginBottom:'20px'}}>Edit</button>
                <br/>
                <h5>Participants</h5>
            </div>
        </div>
    );
};

export default AllExamItemDetail;