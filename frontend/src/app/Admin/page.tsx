
"use client";
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import ProtectedRoute from '@/components/ProtectedRoute';
import useUserStore from '@/store';

const AdminPage: React.FC = () => {
    const setPermission = useUserStore((state) => state.setPermission);

    const [userPermission, setUserPermission] = useState<string | null>(null);

    useEffect(()=>{
        const permission = localStorage.getItem('permission');
        setUserPermission(permission);
    }, [setPermission]);

    return (
        <ProtectedRoute userPermission={userPermission}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Admin Page
                </Typography>
                <Typography variant="body1">
                    Welcome to the Admin Page. Only users with admin permissions can access this page.
                </Typography>
            </Container>
        </ProtectedRoute>
    );
};

export default AdminPage;
