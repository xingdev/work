/*
 * @Author: xingdev 
 * @Date: 2018-09-13 15:50:11 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-18 17:27:35
 */
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import axios from "axios";
import { Button } from "antd";
@inject("store")
@observer
class Greeter extends Component {
  state = {
    data: [],
    loading: false
  };
  test = () => {
    const self = this;
    this.setState({ loading: true });
    axios({
      method: "get",
      url:
        "https://www.easy-mock.com/mock/5b9b78772d250d4fcc977cd3/example/mock",
      responseType: "json"
    }).then(function(response) {
      self.setState({
        loading: false,
        data: response.data.data.projects
      });
    });
  };
  render() {
    return (
      <div>
        {this.props.store.isAuth
          ? "your name is:" + this.props.store.userInfo.name
          : "Hello stranger !!!"}
        {this.props.store.isAuth && (
          <Button
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={this.test}
            loading={this.state.loading}
          >
            GET DATAS
          </Button>
        )}
        <ul>
          {this.state.data.map((item, idx) => {
            return (
              <li key={idx}>
                {item.name}
                &nbsp;
                {item.address}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Greeter;
