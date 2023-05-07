import React, { Component } from "react";
import Location from "./Location";
import Date from "./Date";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = { isShowing: false };
  }
  
  render() {
    let experience = this.props.experience;

    return (
      <ul>
        {experience.map((job) => {
          return (
            <li
              key={job.id}
              onMouseEnter={() => this.setState({ isShowing: true })}
              onMouseLeave={() => this.setState({ isShowing: false })}
            >
              {job.position}{" "}
              <Date startDate={job.startDate} endDate={job.endDate} />
              {this.state.isShowing && (
                <button name={job.id} onClick={this.props.deleteExperience}>
                  -
                </button>
              )}
              <div>
                {job.company} <Location city={job.city} state={job.state} />
              </div>
              <ul>
                {job.responsibilities.map((responsiblity) => {
                  return (
                    <li key={responsiblity.id}>
                      {responsiblity.responsibility}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Experience;
