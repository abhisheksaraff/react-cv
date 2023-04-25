import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

import Form from "./components/input/Form";
import CV from "./components/output/CV";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      contact: [], // {phonenumber: "", email: "", link1:"", link2:""}
      experience: [], // {[ [position: "", company: "", city: "", state: "", startDate: "", endDate: "", resposibilities: ["", "", ...]], ...]}
      skills: [], // {[ [heading: "", skills["skill1", "skill2",..]], ...]}
      education: [], // {[[institution: "", graduationDate: "", description: "", city: "", state: ""], ...]}
      awards: [], // {[ [name: "", institution: "", date: ""], ...]}
    };

    this.setName = this.editName.bind(this);
    this.setContact = this.editContact.bind(this);
    this.setExperience = this.editExperience.bind(this);
    this.setSkills = this.editSkills.bind(this);
    this.setEducation = this.editEducation.bind(this);
    this.setAwards = this.editAwards.bind(this);
  }

  editName(e) {
    e.preventDefault();

    this.setState({
      name: e.target.value,
      contact: this.state.contact,
      experience: this.state.experience,
      skills: this.state.skills,
      education: this.state.education,
      awards: this.state.awards,
    });
  }

  editContact(e) {
    e.preventDefault();

    this.setState({
      name: this.state.name,
      contact: e.target.value,
      experience: this.state.experience,
      skills: this.state.skills,
      education: this.state.education,
      awards: this.state.awards,
    });
  }

  editExperience(e) {
    e.preventDefault();

    this.setState({
      name: this.state.name,
      contact: this.state.contact,
      experience: e.target.value,
      skills: this.state.skills,
      education: this.state.education,
      awards: this.state.awards,
    });
  }

  editSkills(e) {
    e.preventDefault();

    this.setState({
      name: this.state.name,
      contact: this.state.contact,
      experience: this.state.experience,
      skills: e.target.value,
      education: this.state.education,
      awards: this.state.awards,
    });
  }

  editEducation(e) {
    e.preventDefault();

    this.setState({
      name: this.state.name,
      contact: this.state.contact,
      experience: this.state.experience,
      skills: this.state.skills,
      education: e.target.value,
      awards: this.state.awards,
    });
  }

  editAwards(e) {
    e.preventDefault();

    this.setState({
      name: this.state.name,
      contact: this.state.contact,
      experience: this.state.experience,
      skills: this.state.skills,
      education: this.state.education,
      awards: e.target.value,
    });
  }

  render() {
    return (
      <div>
        {/* Input */}
        <Form
          cv={this.state}
          setCV={{
            setName: this.setName,
            setContact: this.setContact,
            setExperience: this.setExperience,
            setSkills: this.setSkills,
            setEducation: this.setEducation,
            setAwards: this.setAwards,
          }}
        />

        {/* Output */}
        <CV cv={this.state} />
      </div>
    );
  }
}

export default App;
