import React from 'react';
import { Link } from 'react-router-dom';
import './Question.css'


const Question = () => {
    return (
        <div className="question">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Question"/>
            </div>
            <div>
                <Link>MCQ</Link><Link style={{marginLeft:'20px'}}>Written</Link>
            </div>
            <br/>
            <div className="form-inline">
                <input type="text" className="form-control" placeholder="Option A"/>
                <input type="text" className="form-control" placeholder="Option B"/>
                <input type="text" className="form-control" placeholder="Option C"/>
                <input type="text" className="form-control" placeholder="Option D"/>
            </div>
            <br/>
            <div className="marks-input form-inline">
                <h3>Marks</h3>
                <input type="number" name="marks" defaultValue="5"/>
            </div>
        </div>
    );
};

export default Question;