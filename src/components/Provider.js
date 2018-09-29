import React from "react";

import RouterContext from "./Context";

class Provider extends React.Component {
  render() {
    return (
      <RouterContext.Provider
        children={this.props.children || null}
        value={this.props.value}
      />
    );
  }
}

export default Provider;
