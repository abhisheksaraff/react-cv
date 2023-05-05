import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Skills</h4>
        <form onSubmit={this.props.setSkills} >
          <label>
            Heading :
            <input name="heading" type="text"/>
          </label>
          <label>
            Skills :
            <input name="skills" type="text"/>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Skills;
