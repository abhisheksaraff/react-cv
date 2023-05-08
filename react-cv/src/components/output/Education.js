import React, { Component } from "react";
import Location from "./Location";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = { isShowing: false };
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.education.map((school) => {
            return (
              <li
                key={school.id}
                name={school.id}
                onMouseEnter={() => this.setState({ isShowing: true })}
                onMouseLeave={() => this.setState({ isShowing: false })}
              >
                <div>
                  {school.institution} {school.graduationDate}
                  {this.state.isShowing && <button name={school.id} onClick={this.props.deleteEducation}>-</button>}
                </div>

                <div>
                  {school.description}

                  <Location city={school.city} state={school.state} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Education;
