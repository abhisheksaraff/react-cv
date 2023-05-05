import React, { Component } from "react";

class Awards extends Component {
  constructor(props) {
    super(props);
  }
  // {[ [name: "", institution: "", date: ""], ...]}
  render() {
    return (
      <div>
        <h4>Awards</h4>
        <form onSubmit={this.props.setAwards}>
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
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Awards;
