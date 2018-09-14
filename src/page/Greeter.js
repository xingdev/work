/*
 * @Author: xingdev 
 * @Date: 2018-09-13 15:50:11 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-14 16:14:41
 */
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("store")
@observer
export default class Greeter extends Component {
  render() {
    return (
      <div>
        {this.props.store.isAuth
          ? "your name is:" + this.props.store.userInfo.name
          : "Hello stranger !!!"}
      </div>
    );
  }
}
