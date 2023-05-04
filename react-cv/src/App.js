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

    this.setName = this.addName.bind(this);
    this.setContact = this.addContact.bind(this);
    this.setExperience = this.addExperience.bind(this);
    this.setSkills = this.addSkills.bind(this);
    this.setEducation = this.addEducation.bind(this);
    this.setAwards = this.addAwards.bind(this);
  }

  //setter functions
  addName(e) {
    e.preventDefault();

    let tempName = e.target.value;

    this.setState({
      name: tempName,
      contact: this.state.contact,
      experience: this.state.experience,
      skills: this.state.skills,
      education: this.state.education,
      awards: this.state.awards,
    });
  }

  addContact(e) {
    e.preventDefault();

    let tempContact = {
      phone: this.state.contact.phone,
      email: this.state.contact.email,
      onlineProfile: this.state.contact.onlineProfile,
    };

    tempContact[e.target.name] = e.target.value;

    this.setState({
      name: this.state.name,
      contact: tempContact,
      experience: this.state.experience,
      skills: this.state.skills,
      education: this.state.education,
      awards: this.state.awards,
    });
  }

  addExperience(e) {
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

  addSkills(e) {
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

  addEducation(e) {
    e.preventDefault();

    let tempEducation = {
      institution: this.state.education.institution,
      graduationDate: this.state.education.graduationDate,
      description: this.state.education.description,
      city: this.state.education.city,
      state: this.state.education.state,
    };

    tempEducation[e.target.name] = e.target.value;

    this.setState({
      name: this.state.name,
      contact: this.state.contact,
      experience: this.state.experience,
      skills: this.state.skills,
      education: tempEducation,
      awards: this.state.awards,
    });
  }

  addAwards(e) {
    e.preventDefault();
    /*
    let tempAward = {
      id: uniqid(),
      name: this.state.awards.name,
      institution: this.state.awards.institution,
      date: this.state.awards.date,
    };

    tempAward[e.target.name] = e.target.value;
    

    this.setState({
      name: this.state.name,
      contact: this.state.contact,
      experience: this.state.experience,
      skills: this.state.skills,
      education: this.state.education,
      awards: tempAward,
    });

    */
    // {[ [name: "", institution: "", date: ""], ...]}
    this.setState({
      awards: [
        ...this.state.awards,
        {
          id: uniqid(),
          name: e.target.name.value,
          institution: e.target.institution.value,
          date: e.target.date.value
        },
      ],
    });

    e.target.reset();
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
