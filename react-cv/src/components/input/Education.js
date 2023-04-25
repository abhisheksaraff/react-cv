import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Education :
            <input type="text" onChange={this.props.setEducation} />
          </label>
        </form>
      </div>
    );
  }
}

export default Education;
