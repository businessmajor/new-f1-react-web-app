// import React, { useEffect, useState } from "react";
import React from "react";
// import logo from "./logo.svg";
import Driver from "./driver";
// import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./nav";
// import Users from "./users";
// import "./App.css";
import { Provider } from "react-redux";
import About from "./about";
import { store } from "./driver/store";
// import LoginScreen, { qwe, asd } from "./users/login";
// import ProtectedRoute from "./users/protected-route";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClientProvider } from '@tanstack/react-query';
import AuthContext from "./auth-context";
import QueryClient from "./services/react-query";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fd0000',
    },
    secondary: {
      main: '#ffc400',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

function App() {

  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          Loading...
        </div>
      }
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={QueryClient}>
            {/* <UsersContextLoader> */}
            <BrowserRouter>
              <AuthContext>
                <div className="container">
                  <Navigation />
                  <Routes>
                    {/* <Route
                        path="/users/*"
                        element={
                          <div className="row">
                            <div className="col-12">
                              <Users />
                            </div>
                            <div className="col-6"><UserListRedux /></div>
                          </div>
                        }
                      /> */}
                    {/* <Route path="/login" element={<LoginScreen />} />
                      <Route path="/register" element={<RegisterScreen />} />
                      <Route
                        path="/profile"
                        element={
                          <ProtectedRoute>
                          <ProfileScreen />
                          </ProtectedRoute> 
                        }
                      /> */}
                    <Route path="/" element={<Navigate to="/driver/explore" />} />
                    <Route
                      path="/driver/*"
                      element={
                        <Driver />
                      }
                    />
                    <Route
                      path="/about/*"
                      element={
                        <About />
                      }
                    />
                  </Routes>
                </div>
              </AuthContext>
            </BrowserRouter>
            {/* </UsersContextLoader> */}
          </QueryClientProvider>
        </ThemeProvider>
      </Provider>
    </React.Suspense>
  );
}

export default App;
