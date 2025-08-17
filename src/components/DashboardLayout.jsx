import React from 'react';
import AppSidebar from './AppSidebar';
import './DashboardLayout.css';

const DashboardLayout = ({ userType, user, children }) => {
  return (
    <div className="dashboard-layout">
      <AppSidebar userType={userType} user={user} />
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;