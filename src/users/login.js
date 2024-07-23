import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginThunk } from "./users-thunks";
// import { useNavigate } from "react-router";


function Copyright(props) {
  useState({});
  return (
    //mui template
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="./">
        Driver
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
}


const Login = () => {
  const [user, setUser] = useState({});
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleLogin = async () => {
    // try {
    //   await dispatch(loginThunk(user));
    //   navigate("/driver/profile");
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    // <ThemeProvider >
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      > <Typography component="h1" variant="h5" className="text-danger fw-bold mb-4">
          Log in
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
            fullWidth
            id="username"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus

          />
          <TextField
            margin="normal"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"

          />
          <Button
            type="submit"
            onClick={handleLogin}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="./register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
    // </ThemeProvider>


  );
};

export default Login;
