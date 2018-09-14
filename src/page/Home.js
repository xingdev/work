/*
 * @Author: xingdev 
 * @Date: 2018-09-13 16:42:09 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 16:13:12
 */

import React, { Component } from "react";
import "../style/theme.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { observable } from "mobx";
import { inject, Provider } from "mobx-react";
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

const store = observable({
  isAuth: false,
  userInfo: {
    name: ""
  }
});

const AuthButton = inject("store")(props => {
  console.log(props);
  return !props.store.isAuth ? (
    ""
  ) : (
    <button onClick={() => (props.store.isAuth = false)}>signout</button>
  );
});
export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <img src={LOGO_SVG} alt="" width={50} height={50} />
            <span>DEMO LINK</span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
            </ul>
            <AuthButton />
            <Route exact path="/" component={Greeter} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}
