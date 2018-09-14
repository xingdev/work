/*
 * @Author: xingdev 
 * @Date: 2018-09-13 15:50:11 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 11:54:32
 */
import React, { Component } from "react";
import Input from "../components/Input";
import { Redirect } from "react-router-dom";
export default class Login extends Component {
  state = {
    isAuth: this.props.auth.isLogin
  };
  onLogin = () => {
    const { auth } = this.props;
    auth.login(() => {
      this.setState({
        isAuth: true
      });
    });
  };
  render() {
    if (this.state.isAuth) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    return (
      <div>
        <div>
          name: <Input />
        </div>
        <div />
        <div>
          password: <Input />
        </div>
        <button onClick={this.onLogin}>login</button>
      </div>
    );
  }
}
