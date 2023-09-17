// Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../../features/pages/Homepage';
import Dashboard from '../../features/pages/Dashboard';
import DashboardLayout from '../layout/DashboardLayout';
import ClientLayout from '../layout/ClientLayout';

function AppRouter() {
    return (
        <>
            <Routes>
                {/* Client layout routes */}
                <Route
                    path="/"
                    element={
                        <ClientLayout>
                            <Routes>
                                <Route path="/" element={<Homepage />} />
                            </Routes>
                        </ClientLayout>
                    }
                />

                {/* Dashboard layout routes */}
                <Route
                    path="/dashboard/*"
                    element={
                        <DashboardLayout>
                            <Routes>
                                <Route path="/dashboard" element={<Dashboard />} />
                            </Routes>
                        </DashboardLayout>
                    }
                />
            </Routes>
        </>
    );
}

export default AppRouter;
