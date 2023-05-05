import React, { Component } from "react";

//{[ [id: "", position: "", company: "", city: "", state: "", startDate: "", endDate: "", resposibilities: ["", "", ...]], ...]}
class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Experience</h4>
        <form  onSubmit={this.props.setExperience} >
          <label>
            Position :
            <input type="text"/>
          </label>
          <label>
            Company :
            <input type="text"/>
          </label>
          <label>
            City :
            <input type="text"/>
          </label>
          <label>
            State :
            <input type="text"/>
          </label>
          <label>
            Start Date :
            <input type="text"/>
          </label>
          <label>
            End Date :
            <input type="text"/>
          </label>
          <label>
            Resposibilities :
            <input type="text"/>
          </label>
        </form>
      </div>
    );
  }
}

export default Experience;
