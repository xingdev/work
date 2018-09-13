/*
 * @Author: xingdev 
 * @Date: 2018-09-13 15:50:11 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-13 19:34:29
 */
import React, { Component } from "react";
import Input from "../components/Input";
export default class Login extends Component {
  render() {
    console.log(this.props.login);
    return (
      <div>
        <div>
          name: <Input />
        </div>
        <div>
          password: <Input />
        </div>
        <button onClick={this.props.onLoginß}>login</button>
      </div>
    );
  }
}
