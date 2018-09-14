/*
 * @Author: xingdev 
 * @Date: 2018-09-13 16:42:09 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 19:24:02
 */

import React, { Component } from "react";
import "../style/theme.less";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observable } from "mobx";
import { inject, Provider } from "mobx-react";
import Greeter from "./Greeter";
import Login from "./Login";
import LOGO_SVG from "../assets/logo.svg";
import { Layout, Menu, Button } from "antd";
const { Header, Content, Footer } = Layout;
const store = observable({
  isAuth: false,
  userInfo: {
    name: ""
  }
});

const AuthButton = inject("store")(props => {
  return (
    props.store.isAuth && (
      <div className="auth-button">
        <Button onClick={() => (props.store.isAuth = false)}>signout</Button>
      </div>
    )
  );
});

export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout className="layout">
            <Header className="header">
              <div className="logo">
                <img
                  src={LOGO_SVG}
                  alt="logo"
                  height={35}
                  style={{ marginRight: 10 }}
                />
                <span>Project Demo</span>
              </div>
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="login">Login</Link>
                </Menu.Item>
              </Menu>
              <AuthButton />
            </Header>
            <Content style={{ padding: "0 50px", marginTop: 64 }}>
              <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
                <Route exact path="/" component={Greeter} />
                <Route path="/login" component={Login} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Router>
      </Provider>
    );
  }
}
