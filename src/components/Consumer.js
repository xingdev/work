import React from "react";
import RouterContext from "./Context";

class Link extends React.Component {
  render() {
    const { innerRef, replace, to, ...props } = this.props; // eslint-disable-line no-unused-vars

    return (
      <RouterContext.Consumer>
        {context => {
          return <div>{context.d}</div>;
        }}
      </RouterContext.Consumer>
    );
  }
}

export default Link;
