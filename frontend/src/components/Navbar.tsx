
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        router.push('/'); // Redirige a la página de inicio al cerrar sesión
    };

    const handleAdminPage = () =>{
        router.push('/Admin')
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Technical Test
                </Typography>
                <Button color="inherit" onClick={handleLogout}>
                    Logout
                </Button>
                <Button color="inherit" onClick={handleAdminPage}>
                    Admin page
                </Button>
                <Button color="inherit" onClick={handleAdminPage}>
                    Users Page
                </Button>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
