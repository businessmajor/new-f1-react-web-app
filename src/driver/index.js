import { Route, Routes } from "react-router-dom";
import NextRace from "../driver/components/races/next_race";
import Login from "../users/login";
import ProfileScreen from "../users/profile";
import ProtectedRoute from "../users/protected-route";
import Register from "../users/register";
import ExploreScreen from "./explore-screen";
import HomeScreen from "./home-screen";
import NavigationSidebar from "./navigation-sidebar";
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from "./reducers/auth-reducer";
import { useSelector } from "react-redux";
import Details from "./components/standings/details";
import SpeedList from "./home-screen/speed-list";
// import { Provider } from "react-redux";
// import { store } from "./store";
// const store = configureStore(
//   { reducer: { user: authReducer } });

function Driver() {
  const { currentUser } = useSelector((state) => state.users);
  return (
    // <Provider store={store}>
    <div className="row">
      <div className="col-2 col-sm-2 col-lg-2">
        <NavigationSidebar />
      </div>
      <div className="col-10 col-sm-10 col-lg-7">
        <Routes>
          <Route path="/" element={<ExploreScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="explore" element={<ExploreScreen />} />
          <Route path="messages" element={<ProtectedRoute><h1>Messages</h1> </ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="profile/:uid" element={<ProfileScreen />} />
          <Route path="drivers/:name" element={<Details/>} />
          <Route path="explore/:search" element={<ExploreScreen />} />
        </Routes>
      </div>
      {/* redirect to /explore */}


      <div className="d-none d-lg-block col-lg-3">
        <NextRace />
        {currentUser && (<div style={{ marginTop: '20px' }}>
        <SpeedList/>  
        </div>)}
      </div>
    </div>
    // </Provider>
  );
}

export default Driver;
