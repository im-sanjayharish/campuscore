import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const ghostEmail = `${username.toLowerCase()}@campuscore.com`;
    try {
      const userCred = await signInWithEmailAndPassword(auth, ghostEmail, password);
      const userDoc = await getDoc(doc(db, "users", userCred.user.uid));
      if (userDoc.exists()) {
        navigate(`/${userDoc.data().role}-dashboard`);
      }
    } catch (err) {
      alert("Invalid ID or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>CampusCore Login</h2>
        <div className="input-group">
          <label>Staff ID / Roll No</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="login-btn">Login to Portal</button>
      </form>
    </div>
  );
  
};

export default Login;