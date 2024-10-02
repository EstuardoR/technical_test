"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useUserStore from '@/store';

interface ProtectedRouteProps {
    children: React.ReactNode;
    userPermission: string | null;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, userPermission }) => {
    const router = useRouter();
    const permission = useUserStore((state) => state.permission);

    useEffect(() => {
        if (permission !== 'admin') {
            router.push('/'); 
        }
    }, [permission, router]); 

    if (permission !== 'admin') {
        return null; 
    }

    return <>{children}</>; 
};

export default ProtectedRoute;

