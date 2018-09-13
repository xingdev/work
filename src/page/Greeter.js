/*
 * @Author: xingdev 
 * @Date: 2018-09-13 15:50:11 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-13 19:34:27
 */
import React, { Component } from "react";
export default class Greeter extends Component {
  render() {
    return <div>{this.props.login ? "login success" : "hello passenger"}</div>;
  }
}
