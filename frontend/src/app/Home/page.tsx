"use client";

import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

const Home: React.FC = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        router.push('/'); 
    };

    return (
        <div>
            <Navbar/>
        <Container>
            <Typography variant="h3" gutterBottom>
                Welcome to the Home Page!
            </Typography>
            <Typography variant="h6">
                You are successfully logged in.
            </Typography>
           
        </Container>

        </div>
    );
};

export default Home;
