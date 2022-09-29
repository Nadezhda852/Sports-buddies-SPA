import React, { useState, useEffect } from "react";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import GlobalStyles from "./config/GlobalStyles";
import Header from "./Components/Header";
import Checkin from "./Views/Checkin.js";
import Dashboard from "./Views/Dashboard";
import SignUp from "./Views/SignUp.js";
import Login from "./Views/Login.js";
import useAuth from "./config/services/useAuth.js";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase.js";
import Profile from "./Views/Profile.js"; 


const checkins = [
  {
    date: "Sun July 10 2022 09:15:11 GMT+0000 (Greenwich Mean Time)",
    score: 8
  },
  {
    date: "Wed July 18 2022 13:58:11 GMT+0000 (Greenwich Mean Time)",
    score: 10
  },
  { date: "Thur July 21 2022 14:45:21 GMT+0000 (Greenwich Mean Time)", score: 5 },
  { date: "Fri July 26 2022 18:18:02 GMT+0000 (Greenwich Mean Time)", score: 3 },
  {
    date: "Sat Aug 02 2022 10:32:32 GMT+0000 (Greenwich Mean Time)",
    score: 27
  },
  {
    date: "Mon Aug 05 2022 15:18:10 GMT+0000 (Greenwich Mean Time)",
    score: 16
  },
  {
    date: "Tue Aug 06 2022 22:22:17 GMT+0000 (Greenwich Mean Time)",
    score: 4
  },
  {
    date: "Wed Aug 15 2022 06:32:01 GMT+0000 (Greenwich Mean Time)",
    score: 13
  },
  {
    date: "Fri Aug 27 2022 17:17:05 GMT+0000 (Greenwich Mean Time)",
    score: 10
  },
  { date: "Sun Aug 30 2022 09:45:55 GMT+0000 (Greenwich Mean Time)", score: 3 },
  {
    date: "Mon Sept 05 2022 15:32:18 GMT+0000 (Greenwich Mean Time)",
    score: 14
  },
  {
    date: "Wed Sept 07 2022 19:13:23 GMT+0000 (Greenwich Mean Time)",
    score: 23
  },
  {
    date: "Thur Sept 17 2022 16:19:37 GMT+0000 (Greenwich Mean Time)",
    score: 16
  },
  { date: "Sun Sept 23 2022 17:27:36 GMT+0000 (Greenwich Mean Time)", score: 16 }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  const app = initializeApp(firebaseConfig);
  const { isAuthenticated, signUserOut } = useAuth(); 

  const location = useLocation();
  const handleClick = (e) => {
  
    setMenuOpen(!menuOpen);
    console.log('App.handleClick()');
  };

  const handleOutsideClick = (e) => {
    
    setMenuOpen(false);
    console.log('App.handleOutsideClick()');
  };


  useEffect(() => {
    setMenuOpen(false)
  }, [location]);

function Protected({ authenticated, children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}


  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header onClick={handleClick} open={ menuOpen } signOut={signUserOut}/>
        <GlobalStyles />

        <div onClick={handleOutsideClick}>

        <Routes>
        <Protected authenticated={isAuthenticated} exact path="/">
              <Dashboard checkins={checkins} />
            </Protected>


            <Route path="/signUp">
              <signUp />
            </Route>
            
            <Protected authenticated={isAuthenticated} exact path="/checkin">
              <Dashboard checkins={Checkin} />
            </Protected>

            <Route path="/login">
              <Login />
            </Route>
            
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}


export default App;

