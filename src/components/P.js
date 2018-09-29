import React from "react";

class P extends React.Component {
  render() {
    return this.props.children && this.props.children("context");
  }
}

class C extends React.Component {
  render() {
    return (
      <P>
        {context => {
          return <div>context</div>;
        }}
      </P>
    );
  }
}

export default C;
