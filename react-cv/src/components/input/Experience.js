import React, { Component } from "react";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = { responsibilities: [{ id: uniqid(), responsibility: "" }] };

    this.addResponsibilities = () => {
      this.setState({
        responsibilities: [
          ...this.state.responsibilities,
          { id: uniqid(), responsibility: "" },
        ],
      });
    };

    this.onClickEvent = (e) => {
      e.preventDefault();

      let newResponsibilites = [...this.state.responsibilities];
      newResponsibilites.forEach((item) => {
          item.responsibility = e.target[item.id].value;
      });

      //delete responsiblitlites with no data in them
      newResponsibilites = newResponsibilites.filter((value, index, array) => value.responsibility !== "");

      let newExperience = {
        id: uniqid(),
        position: e.target.position.value,
        company: e.target.company.value,
        city: e.target.city.value,
        state: e.target.state.value,
        startDate: e.target.startDate.value,
        endDate: e.target.endDate.value,
        responsibilities: newResponsibilites,
      };
      this.props.setExperience(newExperience);

      e.target.reset();
      this.setDefautltState();
    };

    this.setDefautltState = () =>
      this.setState({
        responsibilities: [{ id: uniqid(), responsibility: "" }],
      });
  }

  render() {
    return (
      <div>
        <h4>Experience</h4>
        <form onSubmit={this.onClickEvent}>
          <label>
            Position :
            <input name="position" type="text" />
          </label>
          <label>
            Company :
            <input name="company" type="text" />
          </label>
          <label>
            City :
            <input name="city" type="text" />
          </label>
          <label>
            State :
            <input name="state" type="text" />
          </label>
          <label>
            Start Date :
            <input name="startDate" type="text" />
          </label>
          <label>
            End Date :
            <input name="endDate" type="text" />
          </label>
          <label>
            Resposibilities :
            {this.state.responsibilities.map((responsibility) => {
              /* returns an input field with a uniqid as it's name that can be used to acces it on Add button click (onClickEvent) */
              return (
                <input
                  key={responsibility.id}
                  name={responsibility.id}
                  type="text"
                />
              );
            })}
          </label>
          <button type="button" onClick={this.addResponsibilities}>
            +
          </button>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Experience;
