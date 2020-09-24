import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import PostDetails from './component/PostDetails/PostDetails';
import Contact from './component/Contact/Contact';
import Booking from './component/Booking/Booking';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Hotels from './component/Hotels/Hotels';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/news">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/booking">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <Hotels></Hotels>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/place/:placeKey">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
