/*
 * @Author: xingdev 
 * @Date: 2018-09-13 16:42:09 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 11:59:44
 */

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Greeter from "./Greeter";
import Login from "./Login";
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
    "you are not login"
  );
});
export default class Home extends Component {
  state = {
    isLogin: auth.isLogin
  };
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <AuthButton />
          <Route exact path="/" render={() => <Greeter auth={auth} />} />
          <Route path="/login" render={() => <Login auth={auth} />} />
        </div>
      </Router>
    );
  }
}
