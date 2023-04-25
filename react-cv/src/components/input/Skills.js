import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Skills :
            <input type="text" onChange={this.props.setSkills} />
          </label>
        </form>
      </div>
    );
  }
}

export default Skills;
