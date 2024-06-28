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
import IconButton from '@mui/material/IconButton';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import CircleIcon from '@mui/icons-material/Circle';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href=""> 

        TheJockaloisEnterprise
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function CircleAvatar(props) {
  return <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.main', ml: 1 }} {...props} />;
}

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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'radial-gradient(circle at center, rgba(179, 160, 105, 1) 10%, rgba(104, 129, 193, 1) 90%)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:  defaultTheme.palette.primary.main,
            color: defaultTheme.palette.primary.contrastText,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
          }}
        >
         <Avatar sx={{ m: 1, bgcolor: 'rgba(255, 255, 255, 1)'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h9">
            Welcome back
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor:"rgba(255, 255, 255, 1)"}}>
            </Avatar>
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
                    <InputAdornment position='start'>
                      <LockIcon></LockIcon>
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
              >
                Sign In
              </Button>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2}}>
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
              <Grid container justifyContent={"center"}>
                <Grid item>
                  <Link href="./signup" variant="body2">
                    {" Have an account yet? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

