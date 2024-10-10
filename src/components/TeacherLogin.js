import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Teacher login:', credentials);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Teacher Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Login
          </button>
        </form>
        <button
          onClick={() => navigate('/')}
          className="w-full mt-4 text-gray-600 hover:text-gray-800"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default TeacherLogin;