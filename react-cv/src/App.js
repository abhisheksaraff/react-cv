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
    this.setDummyCV = this.addDummyCV.bind(this);

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

  removeEducation(e) {
    this.setState({
      education: this.removeItem(this.state.education, e.target.name),
    });
  }

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

  //adds a dummy cv to the CS section
  addDummyCV() {
    this.setState({
      name: "Thor Odinson",
      contact: {
        phone: "(123)456-7890",
        email: "thor@thunder.com",
        onlineProfile: "www.thorodinson.com",
      },
      experience: [
        {
          id: "defaultId1",
          position: "Manager",
          company: "Big Bank",
          city: "New York",
          state: "NY",
          startDate: "Mar 2023",
          endDate: "Present",
          responsibilities: [
            {
              id: "defaultId4",
              responsibility:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. ",
            },
            {
              id: "defaultId5",
              responsibility:
                "Ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non enim.",
            },
            {
              id: "defaultId6",
              responsibility:
                "Leo duis ut diam quam nulla porttitor massa id. Arcu non odio euismod lacinia at quis risus sed.",
            },
          ],
        },
        {
          id: "defaultId2",
          position: "Lead",
          company: "Software Company",
          city: "Los Angeles",
          state: "CA",
          startDate: "Aug 2018",
          endDate: "Mar 2023",
          responsibilities: [
            {
              id: "defaultI4",
              responsibility:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. ",
            },
            {
              id: "defaultId5",
              responsibility:
                "Ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non enim.",
            },
            {
              id: "defaultId6",
              responsibility:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              id: "defaultId7",
              responsibility:
                "Leo duis ut diam quam nulla porttitor massa id. Arcu non odio euismod lacinia at quis risus sed.",
            },
          ],
        },
        {
          id: "defaultId3",
          position: "Developer",
          company: "Local Company",
          city: "Pensacola",
          state: "FL",
          startDate: "Feb 2014",
          endDate: "Aug 2018",
          responsibilities: [
            {
              id: "defaultId4",
              responsibility:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. ",
            },
            {
              id: "defaultId5",
              responsibility:
                "Ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non enim.",
            },
            {
              id: "defaultId6",
              responsibility:
                "Leo duis ut diam quam nulla porttitor massa id. Arcu non odio euismod lacinia at quis risus sed.",
            },
          ],
        },
      ],
      skills: [
        {
          id: "defaultId1",
          heading: "Platforms",
          skills: "Windows, Mac, iOS, Android, Linux",
        },
        {
          id: "defaultId2",
          heading: "Languages",
          skills: "Java, Javascript, HTML, CSS, SQL, C, C++",
        },
        {
          id: "defaultId3",
          heading: "Frameworks",
          skills:
            "React, Node.js, MongoDB, Express.js, Spring, Springboot, Git, Bootstrap, Firebase, RestAPI",
        },
      ],
      education: [
        {
          id: "defaultId1",
          institution: "MSc CS",
          graduationDate: "Sept 2027",
          description: "Masters in Computer Science, with High Honours",
          city: "Toronto",
          state: "ON",
        },
        {
          id: "defaultId2",
          institution: "BSc CS",
          graduationDate: "May 2023",
          description: "Bachelors in Computer Science, with High Honours",
          city: "Vancouver",
          state: "BC",
        },
      ],
      awards: [
        {
          id: "defaultId1",
          name: "Outstanding Performer",
          institution: "Excellent Institution",
          date: "Mar 2018",
        },
        {
          id: "defaultId2",
          name: "The Go-Getter",
          institution: "Non-Profit Organization",
          date: "Nov 2021",
        },
      ],
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

        <button onClick={this.setDummyCV}>Add a Default Resume</button>

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
