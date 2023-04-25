import React, { Component } from "react";

import Name from "./Name";
import Contact from "./Contact";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Awards from "./Awards";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, contact, experience, skills, education, awards } =
      this.props.cv;
    const {
      setName,
      setContact,
      setExperience,
      setSkills,
      setEducation,
      setAwards,
    } = this.props.setCV;

    return (
      <div>
        <Name name={name} setName={setName} />
        <Contact contact={contact} setContact={setContact} />
        <Experience experience={experience} setExperience={setExperience} />
        <Skills skills={skills} setSkills={setSkills} />
        <Education education={education} setEducation={setEducation} />
        <Awards awards={awards} setAwards={setAwards} />
      </div>
    );
  }
}

export default Form;
