import React from 'react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="student-layout">
      <header>Welcome, Student Name (21IT005)</header>
      <div className="stats-container">
        <div className="stat-box">
          <h4>Attendance</h4>
          <p className="big-text">85%</p>
        </div>
        <div className="stat-box">
          <h4>Avg Marks</h4>
          <p className="big-text">78/100</p>
        </div>
      </div>
      <div className="notice-board">
        <h3>Recent Notices</h3>
        <ul>
          <li>Exam fee deadline: Jan 15th</li>
          <li>Seminar on Cloud Computing: Friday</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;