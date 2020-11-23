import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StudentAssignmentSubmit from './components/StudentAssignmentSubmit/StudentAssignmentSubmit';
import StudentResultItemDetail from './components/StudentResultItemDetail/StudentResultItemDetail';
import AllExamItemDetail from './components/Teacher/AllExamItemDetail/AllExamItemDetail';
import AssignmentSubmissionList from './components/Teacher/AssignmentSubmissionList/AssignmentSubmissionList';
import TeacherResultItem from './components/Teacher/TeacherResultItem/TeacherResultItem';
import Auth from './pages/Auth/Auth';
import StudentAssignment from './pages/Student/StudentAssignment/StudentAssignment';
import StudentDashboard from './pages/Student/StudentDashboard/StudentDashboard';
import StudentMyExam from './pages/Student/StudentMyExam/StudentMyExam';
import StudentResult from './pages/Student/StudentResult/StudentResult';
import AllExam from './pages/Teacher/AllExam/AllExam';
import AssignmentSubmission from './pages/Teacher/AssignmentSubmission/AssignmentSubmission';
import TeacherAssignments from './pages/Teacher/TeacherAssignments/TeacherAssignments';
import TeacherDashboard from './pages/Teacher/TeacherDashboard/TeacherDashboard';
import TeacherResult from './pages/Teacher/TeacherResult/TeacherResult';
import TeacherSidebar from './pages/Teacher/TeacherSidebar/TeacherSidebar'

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
        <Route path="/student/results" exact>
          <StudentResult></StudentResult>
        </Route>
        <Route path="/student/results/:examId">
          <StudentResultItemDetail></StudentResultItemDetail>
        </Route>
        <Route path="/student/assignments" exact>
          <StudentAssignment></StudentAssignment>
        </Route>
        <Route path="/student/assignments/:assignmentId"> 
          <StudentAssignmentSubmit></StudentAssignmentSubmit>
        </Route>
        <div style={{display:'flex'}}>
          <TeacherSidebar></TeacherSidebar>
          <Route path="/teacher/dashboard">
            <TeacherDashboard></TeacherDashboard>
          </Route>
          <Route path="/teacher/allexam" exact>
            <AllExam></AllExam>
          </Route>
          <Route path="/teacher/allexam/:examId">
            <AllExamItemDetail></AllExamItemDetail>
          </Route>
          <Route path="/teacher/results" exact>
            <TeacherResult></TeacherResult>
          </Route>
          <Route path="/teacher/results/:resultId">
            <TeacherResultItem></TeacherResultItem>
          </Route>
          <Route path="/teacher/assignments" exact>
            <TeacherAssignments></TeacherAssignments>
          </Route>
          <Route path="/teacher/assignments/:assignmentId">
            <AssignmentSubmission></AssignmentSubmission>
          </Route>
        </div>
      </Switch>
    </Router>
  );
};

export default App;