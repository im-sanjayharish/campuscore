import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div className="dashboard-wrapper">
      <nav className="sidebar">
        <h2 style={{color: 'var(--accent)', marginBottom: '40px'}}>CampusCore</h2>
        <div className="nav-link active">Manage Users</div>
        <div className="nav-link">Subject Mapping</div>
        <div className="nav-link">System Settings</div>
      </nav>
      
      <main className="content-area">
        <h1>Admin Control Panel</h1>
        <p style={{color: 'var(--text-muted)', marginBottom: '30px'}}>Welcome back, SuperAdmin.</p>
        
        <div className="data-card">
          <h3>Register New Student/Staff</h3>
          <div style={{display: 'flex', gap: '15px', marginTop: '20px'}}>
             <input type="text" className="modern-input" placeholder="Name" />
             <input type="text" className="modern-input" placeholder="ID / Roll No" />
             <button className="main-btn" style={{width: 'auto', padding: '0 30px'}}>Create Account</button>
          </div>
        </div>
      </main>
    </div>
  );
}