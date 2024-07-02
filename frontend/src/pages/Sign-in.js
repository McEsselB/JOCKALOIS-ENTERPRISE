import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../assets/images/logo.png'; // Adjust the path to the logo file
import workerImage from '../assets/images/worker2.png'; // Adjust the path to the worker image

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh', overflowY: 'auto' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundColor: '#6881C1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 4 }}>
            <img src={logo} alt="Logo" style={{ width: '70px', height: '70px' }} />
          </Box>
          <Avatar sx={{ m: 1, bgcolor: 'rgba(255, 255, 255, 1)' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box component="img" src={workerImage} alt="Worker" sx={{ width: '90%', height: 'auto', mt: 2, bgcolor: 'transparent' }} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'rgba(255, 255, 255, 1)' }}></Avatar>
            <Typography component="h1" variant="h5">
              Welcome back
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
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
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Forgot password?"}
                  </Link>
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me on this device"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 3 }}
                onClick={() => window.location.href = '/dashboard'}
              >
                Sign In
              </Button>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  sx={{ textTransform: 'none', borderRadius: 5 }}
                  onClick={() => { /* handle Google sign-in */ }}
                >
                  Google
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<AppleIcon />}
                  sx={{ textTransform: 'none', borderRadius: 5 }}
                  onClick={() => { /* handle Apple sign-in */ }}
                >
                  Apple
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  sx={{ textTransform: 'none', borderRadius: 5 }}
                  onClick={() => { /* handle Facebook sign-in */ }}
                >
                  Facebook
                </Button>
              </Box>
              <Grid container justifyContent="center" sx={{ mt: 2 }}>
                <Grid item>
                  <Typography variant="body2" align="center">
                    {"Don't have an account yet?"}
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: 1,
                      borderRadius: 3,
                      backgroundColor: 'white',
                      borderColor: defaultTheme.palette.primary.main,
                      color: defaultTheme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: defaultTheme.palette.primary.light,
                        borderColor: defaultTheme.palette.primary.main,
                      },
                    }}
                    onClick={() => window.location.href = './sign-up'}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
