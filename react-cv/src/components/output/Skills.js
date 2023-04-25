import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.skills}</div>;
  }
}

export default Skills;
