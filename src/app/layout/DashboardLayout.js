// DashboardLayout.js
import React from 'react';
import { Sidebar } from '../../features/components/Sidebar';


function DashboardLayout({ children }) {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      
      <div className="flex grow mx-2 my-2 p-4">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
