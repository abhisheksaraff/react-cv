import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Education</h4>
        <form onSubmit={this.props.setEducation}>
          <label>
            Institution :
            <input type="text" name="institution" />
          </label>
          <label>
            Graduation Date :
            <input type="text" name="graduationDate" />
          </label>
          <label>
            Description :
            <input type="text" name="description" />
          </label>
          <label>
            City :
            <input type="text" name="city" />
          </label>
          <label>
            State :
            <input type="text" name="state" />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Education;
