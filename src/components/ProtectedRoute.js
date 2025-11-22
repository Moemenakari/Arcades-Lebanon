// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';


    if (isAuthenticated) {

        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default ProtectedRoute;
