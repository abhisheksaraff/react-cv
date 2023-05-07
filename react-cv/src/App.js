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
      contact: {}, // {phone: "", email: "", onlineProfile:""}
      experience: [], // {[ [id: "", position: "", company: "", city: "", state: "", startDate: "", endDate: "", resposibilities: ["", "", ...]], ...]}
      skills: [], // {[ [id: "", heading: "", skills["skill1", "skill2",..]], ...]}
      education: [], // {[[id: "", institution: "", graduationDate: "", description: "", city: "", state: ""], ...]}
      awards: [], // {[ [id: "", name: "", institution: "", date: ""], ...]}
    };

    this.setName = this.addName.bind(this);
    this.setContact = this.addContact.bind(this);
    this.setExperience = this.addExperience.bind(this);
    this.setSkills = this.addSkills.bind(this);
    this.setEducation = this.addEducation.bind(this);
    this.setAwards = this.addAwards.bind(this);

    this.deleteName = this.removeName.bind(this);
    this.deleteContact = this.removeContact.bind(this);
    this.deleteExperience = this.removeExperience.bind(this);
    this.deleteSkills = this.removeSkills.bind(this);
    this.deleteEducation = this.removeEducation.bind(this);
    this.deleteAwards = this.removeAwards.bind(this);
  }

  //setter functions
  addName(e) {
    e.preventDefault();

    this.setState({
      name: e.target.name.value,
    });

    e.target.reset();
  }

  addContact(e) {
    e.preventDefault();
    this.setState({
      contact: {
        phone: e.target.phone.value,
        email: e.target.email.value,
        onlineProfile: e.target.onlineProfile.value,
      },
    });
    e.target.reset();
  }

  addExperience(newExperience) {
    this.setState({ experience: [...this.state.experience, newExperience] });
  }

  addSkills(e) {
    this.setState({ skills: [...this.state.skills, this.addItem(e)] });
  }

  addEducation(e) {
    this.setState({ education: [...this.state.education, this.addItem(e)] });
    /*
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
    */
  }

  addAwards(e) {
    this.setState({ awards: [...this.state.awards, this.addItem(e)] });
  }

  removeName() {
    this.setState({ name: "" });
  }

  removeContact() {
    this.setState({ contact: {} });
  }

  removeExperience(e) {
    this.setState({
      experience: this.removeItem(this.state.experience, e.target.name),
    });
  }

  removeSkills(e) {
    this.setState({
      skills: this.removeItem(this.state.skills, e.target.name),
    });
  }

  removeEducation(e) {}

  removeAwards(e) {
    this.setState({
      awards: this.removeItem(this.state.awards, e.target.name),
    });
  }

  addItem(e) {
    e.preventDefault();

    let newItem = { id: uniqid() };

    //converts e.target from HTMLCollection to array so we can loop over it
    [...e.target]
      //then runs over each one except for the last item because last item is the edit button
      .slice(0, [...e.target].length - 1)
      .forEach((item) => (newItem[item.name] = item.value));

    e.target.reset();

    return newItem;
  }

  //removes item with the specified id removed and returns the rest of the array
  removeItem(list, id) {
    let newList = [];
    list.forEach((item) => {
      if (item.id !== id) {
        newList = [...newList, item];
      }
    });

    return newList;
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
        <CV
          cv={this.state}
          deleteName={this.deleteName}
          deleteContact={this.deleteContact}
          deleteExperience={this.deleteExperience}
          deleteSkills={this.deleteSkills}
          deleteEducation={this.deleteEducation}
          deleteAwards={this.deleteAwards}
        />
      </div>
    );
  }
}

export default App;
