import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StudentAssignmentSubmit from './components/StudentAssignmentSubmit/StudentAssignmentSubmit';
import StudentResultItemDetail from './components/StudentResultItemDetail/StudentResultItemDetail';
import Auth from './pages/Auth/Auth';
import StudentAssignment from './pages/Student/StudentAssignment/StudentAssignment';
import StudentDashboard from './pages/Student/StudentDashboard/StudentDashboard';
import StudentMyExam from './pages/Student/StudentMyExam/StudentMyExam';
import StudentResult from './pages/Student/StudentResult/StudentResult';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Auth></Auth>
        </Route>
        <Route path="/student/dashboard">
          <StudentDashboard></StudentDashboard>
        </Route>
        <Route path="/student/myexams">
          <StudentMyExam></StudentMyExam>
        </Route>
        <Route path="/student/results">
          <StudentResult></StudentResult>
        </Route>
        <Route path="/student/results:examId">
          <StudentResultItemDetail></StudentResultItemDetail>
        </Route>
        <Route path="/student/assignments" exact>
          <StudentAssignment></StudentAssignment>
        </Route>
        <Route path="/student/assignments/:assignmentId"> 
          <StudentAssignmentSubmit></StudentAssignmentSubmit>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;