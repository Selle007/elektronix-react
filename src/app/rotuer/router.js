// Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../../features/pages/Homepage';
import Dashboard from '../../features/pages/Dashboard';
import DashboardLayout from '../layout/DashboardLayout';
import ClientLayout from '../layout/ClientLayout';
import { Products } from '../../features/pages/Dashboard/Products';
import { Categories } from '../../features/pages/Dashboard/Categories';
import { CreateCategory } from '../../features/pages/Dashboard/Categories/CreateCategory';
import { EditCategory } from '../../features/pages/Dashboard/Categories/EditCategory';
import { ViewCategory } from '../../features/pages/Dashboard/Categories/ViewCategory';

function AppRouter() {
    //const location = useLocation();
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
                                <Route index element={<Dashboard />} />
                                <Route path="products" element={<Products />} />
                                {/*DASHBOARD CATEGORY ROUTES*/}
                                <Route path="categories" element={<Categories />} />
                                <Route path="categories/create" element={<CreateCategory />} />
                                <Route path="categories/edit/:id" element={<EditCategory />} />
                                <Route path="categories/view/:id" element={<ViewCategory />} />
                            </Routes>
                        </DashboardLayout>
                    }
                />
            </Routes>
        </>
    );
}

export default AppRouter;
