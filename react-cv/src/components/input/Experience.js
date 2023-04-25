import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Experience :
            <input type="text" onChange={this.props.setExperience} />
          </label>
        </form>
      </div>
    );
  }
}

export default Experience;
