/*
 * @Author: xingdev
 * @Date: 2018-09-13 16:42:09
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-11-12 16:26:07
 */

import React, { Component } from "react";
import "../style/theme.less";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { observable } from "mobx";
import { inject, Provider, observer } from "mobx-react";
import LOGO_SVG from "../assets/logo.svg";
import { Layout, Menu, Button } from "antd";
import asyncComponent from "../lib/asyncComponent";
import axios from "axios";
const { Header, Content, Footer } = Layout;
const store = observable({
  isAuth: false,
  userInfo: {
    name: ""
  }
});

const AuthButton = inject("store")(
  observer(props => {
    return (
      props.store.isAuth && (
        <div className="auth-button">
          <Button onClick={() => (props.store.isAuth = false)}>signout</Button>
        </div>
      )
    );
  })
);

const lazyLoad = () => {};

export default class Home extends Component {
  constructor() {
    super();
    axios
      .get("/api/posts")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  async lazyload(id) {
    const plugin = await import("./MobxPage");
    return plugin.default.MobxPage;
  }

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
                  <Link to="/mobx">Mobx Api</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/demo">demo</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/tree">tree</Link>
                </Menu.Item>
              </Menu>
              <AuthButton />
            </Header>
            <Content style={{ padding: "0 50px", marginTop: 64 }}>
              <div style={{ background: "#fff", padding: 24, minHeight: 1000 }}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={asyncComponent(() => import("./Greeter"))}
                  />
                  <Route
                    path="/mobx"
                    component={asyncComponent(() => import("./MobxPage"))}
                  />
                  <Route
                    path="/login"
                    component={asyncComponent(() => import("./Login"))}
                  />
                  <Route
                    path="/demo"
                    component={asyncComponent(() => import("./Demo"))}
                  />
                  <Route
                    path="/tree"
                    component={asyncComponent(() => import("./TreeTest"))}
                  />
                </Switch>
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
