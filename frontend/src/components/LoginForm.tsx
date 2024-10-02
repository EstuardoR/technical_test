"use client";
import useUserStore from '@/store';
import React, {useState} from 'react';
import { TextField, Button, Box, Typography, Container, Link } from '@mui/material';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () =>{
    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) =>{
        event.preventDefault();
        
        const response  = await fetch('http://localhost:3001/auth/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer %{token}',
            },
            body: JSON.stringify({username, password}),
        });

        const data = await response.json();

        if(response.ok){
            console.log('good login:', data);

                localStorage.setItem('access_token', data.access_token);
                useUserStore.getState().setPermission(data.permission);

                 router.push('/Home');

        }else{
            console.log('error in login:', data.message);
        }

        console.log({ username, password });
    };

    return (
        <Container maxWidth="sm" sx={{  bgcolor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 3}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 8,
            }}
          >
            <Typography component="h1" variant="h5" sx={{color: 'black'}}>
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Link href="/register" variant="body2">
                    {"Do not have account? register here"}
              </Link>
            </Box>
          </Box>
        </Container>
      );

};

export default LoginForm;