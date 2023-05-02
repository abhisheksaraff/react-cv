import React, { Component } from "react";

class Awards extends Component {
  constructor(props) {
    super(props);
  }
  // {[ [name: "", institution: "", date: ""], ...]}
  render() {
    return (
      <div>
        <form onChange={this.props.setAwards}>
          <label>
            Name :
            <input type="text" name="name" />
          </label>
          <label>
            Institution :
            <input type="text" name="institution" />
          </label>
          <label>
            Date :
            <input type="text" name="date" />
          </label>
        </form>
      </div>
    );
  }
}

export default Awards;
