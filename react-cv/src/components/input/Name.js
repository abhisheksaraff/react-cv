import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.setName}>
          <label>
            Name :
            <input name="name" type="text" />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Name;
