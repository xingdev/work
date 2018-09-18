/*
 * @Author: xingdev 
 * @Date: 2018-09-13 15:50:11 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-17 19:52:00
 */
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Redirect } from "react-router-dom";
import { Input, Col, Row, Button } from "antd";
@inject("store")
@observer
export default class Login extends Component {
  state = {};
  onLogin = () => {
    if (!this.state.name) return alert("name required");
    this.props.store.isAuth = true;
    this.props.store.userInfo.name = this.state.name;
  };
  onChange = e => {
    if (e.target) {
      this.setState({ name: e.target.value });
    }
  };
  render() {
    if (this.props.store.isAuth) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    return (
      <div style={{ width: 300 }}>
        <h3>Login</h3>
        <Row gutter={16} style={{ marginBottom: "10px" }}>
          <Col span={4}>name:</Col>
          <Col span={16}>
            <Input onChange={this.onChange} />
          </Col>
          <Col span={4} />
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <Button onClick={this.onLogin} type="primary">
              login
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
