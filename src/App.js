import React, { useState } from 'react';
// Registration component
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
/*    
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      	
      <br></br><br></br> <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Register</button>
    </form>
*/
<div style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
      <center><h2>Registration Form</h2></center>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px' }} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px' }} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px' }} />
        <br></br><br></br> 
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Register</button>
      </form>
    </div>
  );
};

// Login component
const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      setIsLoggedIn(true);
    }
    setEmail('');
    setPassword('');
  };

  return (
    /*<form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <br></br><label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      <br></br><br></br><button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Login</button>
    </form>*/
<div style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
      <center><h2>Login Form</h2></center>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <br></br>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px' }} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px' }} />
        <br></br><br></br>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Login</button>
      </form>
    </div>
  );
};

// Dashboard component
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>This is your dashboard.</p>
    </div>
  );
};

// App component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn && <Register />}
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <Dashboard />}
    </div>
  );
};

export default App;
