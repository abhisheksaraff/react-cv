import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = { isShowing: false };
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.skills.map((skill) => {
            return (
              <li
                key={skill.id}
                onMouseEnter={() => {
                  this.setState({ isShowing: true });
                }}
                onMouseLeave={() => {
                  this.setState({ isShowing: false });
                }}
              >
                <>{skill.heading}: </>
                {skill.skills}
                {this.state.isShowing && <button name = {skill.id} onClick={this.props.deleteSkills}>-</button>}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
