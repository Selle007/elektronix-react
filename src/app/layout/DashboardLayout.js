// DashboardLayout.js
import React from 'react';
import { Sidebar } from '../../features/components/Sidebar';

function DashboardLayout({ children }) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}

export default DashboardLayout;
