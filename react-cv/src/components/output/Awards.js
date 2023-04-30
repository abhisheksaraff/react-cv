import React, { Component } from "react";

//awards: [], // {[ [name: "", institution: "", date: ""], ...]}
class Awards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.awards.name}</div>
        <div>{this.props.awards.institution}</div>
        <div>{this.props.awards.date}</div>
      </div>
    );
  }
}

export default Awards;
