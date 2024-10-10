// components/StudentDashboard.js
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const testScores = [
  { subject: 'Mathematics', score: 85, average: 78 },
  { subject: 'Science', score: 92, average: 80 },
  { subject: 'English', score: 88, average: 82 },
  { subject: 'History', score: 95, average: 85 },
  { subject: 'Geography', score: 90, average: 79 },
];

const attendanceData = [
  { month: 'Jan', present: 90, absent: 10 },
  { month: 'Feb', present: 85, absent: 15 },
  { month: 'Mar', present: 95, absent: 5 },
  { month: 'Apr', present: 88, absent: 12 },
  { month: 'May', present: 92, absent: 8 },
];

function StudentDashboard() {
  const calculateAttendancePercentage = () => {
    const totalPresent = attendanceData.reduce((sum, day) => sum + day.present, 0);
    const total = attendanceData.reduce((sum, day) => sum + day.present + day.absent, 0);
    return ((totalPresent / total) * 100).toFixed(1);
  };

  const calculateAverageScore = () => {
    const total = testScores.reduce((sum, subject) => sum + subject.score, 0);
    return (total / testScores.length).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="nav-menu">
        <div className="container flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Student Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">John Doe</span>
            <div className="avatar"></div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container py-6">
        {/* Summary Cards */}
        <div className="dashboard-grid">
          <div className="stats-card">
            <h3 className="text-lg font-semibold text-gray-700">Average Score</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{calculateAverageScore()}%</p>
          </div>
          <div className="stats-card">
            <h3 className="text-lg font-semibold text-gray-700">Attendance Rate</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{calculateAttendancePercentage()}%</p>
          </div>
          <div className="stats-card">
            <h3 className="text-lg font-semibold text-gray-700">Class Rank</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">5th</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Test Scores Chart */}
          <div className="card p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Test Scores Comparison</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={testScores}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#2563eb" name="Your Score" />
                  <Bar dataKey="average" fill="#93c5fd" name="Class Average" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Attendance Chart */}
          <div className="card p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Attendance</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="present" 
                    stroke="#16a34a" 
                    strokeWidth={2}
                    name="Present (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Tests */}
        <div className="card mt-6 p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Tests</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Mathematics</td>
                  <td className="px-6 py-4 whitespace-nowrap">85%</td>
                  <td className="px-6 py-4 whitespace-nowrap">A</td>
                  <td className="px-6 py-4 whitespace-nowrap">2024-03-15</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Science</td>
                  <td className="px-6 py-4 whitespace-nowrap">92%</td>
                  <td className="px-6 py-4 whitespace-nowrap">A+</td>
                  <td className="px-6 py-4 whitespace-nowrap">2024-03-10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;