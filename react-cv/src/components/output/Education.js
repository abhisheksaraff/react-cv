import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.education.institution}{" "}
          {this.props.education.graduationDate}
        </div>
        <div>
          {this.props.education.description}
          {this.props.education.city}
          {(this.props.education.city !== undefined && this.props.education.city !== "") && <>,</>}
          {this.props.education.state}
        </div>
      </div>
    );
  }
}

export default Education;
