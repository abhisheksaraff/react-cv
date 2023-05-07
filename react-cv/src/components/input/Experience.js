import React, { Component } from "react";
import uniqid from "uniqid";

//{[ [id: "", position: "", company: "", city: "", state: "", startDate: "", endDate: "", resposibilities: ["", "", ...]], ...]}
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
    }

    this.onClickEvent = (e) => {
      e.preventDefault();

      console.log(e.target);

      let tempResponsibilites = [...this.state.responsibilities];

      tempResponsibilites.forEach((item) => {
        item.responsibility= e.target.responsibilities.id.value;
      });

      console.log(tempResponsibilites);

      e.target.reset();
    }
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
              return (
                <input
                  key={responsibility.id}
                  name="responsibilities"
                  type="text"
                />
              );
            })}
          </label>
          <button type="button" onClick={this.addResponsibilities}>+</button>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Experience;
