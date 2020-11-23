import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className="question">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Question"/>
            </div>
            <div>
                <label>MAQ</label><label>Written</label>
            </div>
            <div className="form-inline">
                <input type="text" className="form-control" placeholder="Option A"/>
                <input type="text" className="form-control" placeholder="Option B"/>
                <input type="text" className="form-control" placeholder="Option C"/>
                <input type="text" className="form-control" placeholder="Option D"/>
            </div>
        </div>
    );
};

export default Question;