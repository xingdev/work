/*
 * @Author: xingdev 
 * @Date: 2018-09-13 16:42:09 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 18:43:55
 */

import React, { Component } from "react";
import "../style/theme.less";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observable } from "mobx";
import { inject, Provider } from "mobx-react";
import Greeter from "./Greeter";
import Login from "./Login";
import LOGO_SVG from "../assets/logo.svg";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
const store = observable({
  isAuth: false,
  userInfo: {
    name: ""
  }
});

const AuthButton = inject("store")(props => {
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
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal">
                <Menu.Item>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="login">Login</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: "0 50px" }}>
              <AuthButton />
              <Route exact path="/" component={Greeter} />
              <Route path="/login" component={Login} />
            </Content>
          </Layout>
        </Router>
      </Provider>
    );
  }
}
