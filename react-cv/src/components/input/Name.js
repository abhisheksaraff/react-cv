import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name :
            <input type="text" onChange={this.props.setName} />
          </label>
        </form>
      </div>
    );
  }
}

export default Name;
