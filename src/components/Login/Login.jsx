import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!username) {
      formIsValid = false;
      errors.username = 'Username is required';
    }

    if (!password) {
      formIsValid = false;
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', { username, password });
    }
  };

  return (
    <div className="w-full h-[100vh]">
      <div>
        <h1 className="text-3xl font-medium p-6">Sudhir</h1>
      </div>
      <form 
        className="flex flex-col mt-[5%] w-[40%] h-[60%] mx-auto justify-center items-center px-[6%] py-8 rounded-[10px] gap-6 bg-slate-200 max600:w-[85%] max600:mt-[25%]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 w-full">
          <label>Username</label>
          <input 
            className={`w-full px-2 py-2 rounded-[4px] ${errors.username ? 'border border-red-500' : ''}`} 
            type="text" 
            placeholder="Enter your username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label>Password</label>
          <input 
            className={`w-full px-2 py-2 rounded-[4px] ${errors.password ? 'border border-red-500' : ''}`} 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <button 
          className="bg-black px-6 py-2 rounded-[5px] text-white w-full mt-4" 
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
