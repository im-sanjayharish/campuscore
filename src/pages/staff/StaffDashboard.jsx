import React from 'react';
import './StaffDashboard.css';

const StaffDashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="top-nav">Staff Portal: John Doe (ID: STF102)</nav>
      <div className="staff-content">
        <div className="module-card">
          <h3>Manage Attendance</h3>
          <p>Class: B.Tech IT - III Year</p>
          <button className="action-btn">Open Register</button>
        </div>
        <div className="module-card">
          <h3>Internal Marks</h3>
          <select>
            <option>Select Internal: 1</option>
            <option>Select Internal: 2</option>
          </select>
          <button className="action-btn">Update Marks</button>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;