import React, { useState } from 'react';
import Question from '../../../components/Teacher/Question/Question';
import './AddQuestion.css'

const AddQuestion = () => {

    return (
        <div style={{width:'1000px'}}>
            <h2>Add Question</h2>
            <br/>
            <Question></Question>
            
            <div className="add-question">
                <h5>Add Question</h5>
            </div>
        </div>
    );
};

export default AddQuestion;