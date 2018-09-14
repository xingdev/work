/*
 * @Author: xingdev 
 * @Date: 2018-09-13 15:50:11 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 11:57:40
 */
import React, { Component } from "react";
export default class Greeter extends Component {
  render() {
    return (
      <div>
        {this.props.auth.isLogin ? "your name is: hello" : "hello passenger"}
      </div>
    );
  }
}
