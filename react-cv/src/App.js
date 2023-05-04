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

    this.removeAwards = this.removeItem.bind(this);
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
    //this.setState({ education: [...this.state.education, this.addItem(e)] });
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
    this.setState({ awards: [...this.state.awards, this.addItem(e)] });
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

  removeItem(list, id) {
    let newList = [];
    list.forEach((item) => {
      if (item.id !== id) newList = [...newList, item];
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
        <CV cv={this.state} removeAwards={this.removeAwards} />
      </div>
    );
  }
}

export default App;
