/*
 * @Author: xingdev 
 * @Date: 2018-09-13 15:50:11 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 13:37:39
 */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class Login extends Component {
  state = {
    isAuth: this.props.auth.isLogin
  };
  onLogin = () => {
    const { auth } = this.props;
    if (!this.state.name) return alert("name required");
    auth.userInfo.name = this.state.name;
    auth.login(() => {
      this.setState({
        isAuth: true
      });
    });
  };
  onChange = e => {
    if (e.target) {
      this.setState({ name: e.target.value });
    }
  };
  render() {
    console.log(this.props);
    if (this.state.isAuth) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    return (
      <div>
        <div>
          name:&nbsp;&nbsp;
          <input onChange={this.onChange} />
        </div>
        <button onClick={this.onLogin}>login</button>
      </div>
    );
  }
}
