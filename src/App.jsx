import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RunnerDashboard from './pages/RunnerDashboard';
import GiverDashboard from './pages/GiverDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="dashboard/runner" element={<RunnerDashboard />} />
          <Route path="dashboard/giver" element={<GiverDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
