/*
 * @Author: xingdev 
 * @Date: 2018-09-13 15:50:11 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 16:14:30
 */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
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
    return !this.props.store.isAuth ? (
      <div>
        <div>
          name:&nbsp;&nbsp;
          <input onChange={this.onChange} />
        </div>
        <button onClick={this.onLogin}>login</button>
      </div>
    ) : (
      "is logged"
    );
  }
}
