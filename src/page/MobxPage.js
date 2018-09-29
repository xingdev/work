/*
 * @Author: xingdev 
 * @Date: 2018-09-18 14:26:37 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-29 14:14:37
 */
import React, { Component } from "react";
import { Button } from "antd";
import Consumer from "../components/Consumer";
import Provider from "../components/Provider";

export default class MobxPage extends Component {
  state = {
    value: { d: 1 }
  };
  handleClick = () => {
    import("../ts/helloworld.ts").then(A => {
      this.setState({
        value: { d: 4 }
      });
    });
  };
  render() {
    return (
      <Provider value={this.state.value}>
        <Button onClick={this.handleClick} type="primary">
          asyn
        </Button>
        <Consumer>ddd</Consumer>
      </Provider>
    );
  }
}
