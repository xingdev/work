/*
 * @Author: xingdev 
 * @Date: 2018-09-13 16:42:09 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-13 19:16:02
 */

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Greeter from "./Greeter";
import Login from "./Login";
export default class Home extends Component {
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
          <Route exact path="/" component={Greeter} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
