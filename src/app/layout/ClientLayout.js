// ClientLayout.js
import React from 'react';
import { Navbar } from '../../features/components/Navbar';

function ClientLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default ClientLayout;
