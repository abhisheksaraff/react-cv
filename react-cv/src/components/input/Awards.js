import React, { Component } from "react";

class Awards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Awards :
            <input type="text" onChange={this.props.setAwards} />
          </label>
        </form>
      </div>
    );
  }
}

export default Awards;
