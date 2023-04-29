import React, { Component } from "react";
import Location from "./Location";

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
          
          <Location
            city={this.props.education.city}
            state={this.props.education.state}
          />
        
        </div>
      </div>
    );
  }
}

export default Education;
