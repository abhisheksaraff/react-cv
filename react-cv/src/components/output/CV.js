import React, { Component } from "react";

import Name from "./Name";
import Contact from "./Contact";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Awards from "./Awards";

class CV extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Name name={this.props.cv.name} />
        <Contact contact={this.props.cv.contact} />
        <Experience experience={this.props.cv.experience} />
        <Skills skills={this.props.cv.skills} />
        <Education education={this.props.cv.education} />
        <Awards awards={this.props.cv.awards} />
      </div> 
    );
  }
}

export default CV;
