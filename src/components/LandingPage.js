import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome to Education Portal
        </h1>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/admin-login')}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Admin
          </button>
          <button
            onClick={() => navigate('/teacher-login')}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Teacher
          </button>
          <button
            onClick={() => navigate('/student-login')}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;