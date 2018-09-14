/*
 * @Author: xingdev 
 * @Date: 2018-09-13 16:42:09 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 14:08:29
 */

import React, { Component } from "react";
import "../style/theme.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Greeter from "./Greeter";
import Login from "./Login";
import LOGO_SVG from "../assets/logo.svg";
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const auth = {
  userInfo: {
    name: ""
  },
  isLogin: false,
  login(cb) {
    this.isLogin = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isLogin = false;
    setTimeout(cb, 100); // fake async
  }
};

const AuthButton = withRouter(({ history }) => {
  return auth.isLogin ? (
    <button
      onClick={() => {
        auth.signout(() => history.push("/login"));
      }}
    >
      signout
    </button>
  ) : (
    ""
  );
});

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? "> " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

const NoMatch = ({location}) => {
  return <div>404 Not Found</div>;
};

export default class Home extends Component {
  state = {
    isLogin: auth.isLogin
  };
  render() {
    return (
      <Router>
        <div>
          <img src={LOGO_SVG} alt="" width={50} height={50} />
          <span>DEMO LINK</span>
          <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
          <OldSchoolMenuLink to="/login" label="Login" />
          <Link to="/also/will/not/match">Also Will Not Match</Link>
          <AuthButton />
          <Route exact path="/" render={() => <Greeter auth={auth} />} />
          <Route
            path="/login"
            render={props => <Login {...props} auth={auth} />}
          />
          <Route component={NoMatch} />
        </div>
      </Router>
    );
  }
}
