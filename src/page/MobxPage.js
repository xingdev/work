/*
 * @Author: xingdev 
 * @Date: 2018-09-18 14:26:37 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-27 19:18:42
 */
import React, { Component } from "react";
import { Button } from "antd";
export default class MobxPage extends Component {
  handleClick() {
    import("../ts/helloworld.ts").then(A => {
      console.log(A.default(1, 2));
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleClick} type="primary">
          asyn
        </Button>
      </div>
    );
  }
}
