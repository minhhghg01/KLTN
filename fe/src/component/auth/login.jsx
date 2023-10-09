import React from 'react';
import './login.css'; 

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById('acc').value;
    const password = document.getElementById('pass').value;
    // Thực hiện xử lý đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <picture>
        <source srcSet="/image/ming.jpg" media="(min-width: 1000px)" />
        <img src="#" style={{ height: '100vh' }} alt="Background" />
      </picture>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" id="acc" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" id="pass" required />
            <label>Password</label>
          </div>
          <button type="submit" style={{color: 'blue', background: 'grey'}}> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
