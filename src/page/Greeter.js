/*
 * @Author: xingdev 
 * @Date: 2018-09-13 15:50:11 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 13:20:06
 */
import React, { Component } from "react";
export default class Greeter extends Component {
  render() {
    return (
      <div>
        {this.props.auth.isLogin
          ? "your name is:" + this.props.auth.userInfo.name
          : "Hello stranger !!!"}
      </div>
    );
  }
}
