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
        <Name name={this.props.cv.name} deleteName={this.props.deleteName}/>
        <Contact contact={this.props.cv.contact} deleteContact={this.props.deleteContact}/>
        <Experience experience={this.props.cv.experience} deleteExperience={this.props.deleteExperience}/>
        <Skills skills={this.props.cv.skills} deleteSkills={this.props.deleteSkills}/>
        <Education education={this.props.cv.education} deleteEducation={this.props.deleteEducation}/>
        <Awards awards={this.props.cv.awards} deleteAwards={this.props.deleteAwards}/>
      </div> 
    );
  }
}

export default CV;
