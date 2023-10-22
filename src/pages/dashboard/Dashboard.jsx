import React from 'react';
import DashboardHeader from './DashboardHeader.jsx';
import '/src/assets/css/Dashboard.less';

// 仪表盘工作台
const Dashboard = () => {
  return (
    <>
      <div className="change-dashboard-page-header">
        <DashboardHeader />
      </div>
    </>
  );
};

export default Dashboard;
