/*
 * @Author: xingdev 
 * @Date: 2018-09-18 14:26:37 
 * @Last Modified by: xingdev
 * @Last Modified time: 2018-09-29 18:46:03
 */
import React, { Component } from "react";

import C from "../components/P";
import { Route, Link } from "react-router-dom";
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default class ContextComponent extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Link to={`${match.url}/rendering`}>test</Link>
        <Route exact path={`${match.url}/:topicId`} render={Topic} />
        <C />
      </div>
    );
  }
}
