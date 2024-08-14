// src/components/Dashboard.js

import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth() || {};

  if (!logout) {
    // Handle the case where `logout` is undefined
    return <div>Error: Auth context not available</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
