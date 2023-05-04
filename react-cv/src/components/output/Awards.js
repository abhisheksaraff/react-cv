import React, { Component } from "react";

//awards: [], // {[ [name: "", institution: "", date: ""], ...]}
class Awards extends Component {
  constructor(props) {
    super(props);
  }

  addPipeline(name, institution) {
    if (
      name !== undefined &&
      name !== "" &&
      institution !== null &&
      institution !== ""
    )
      return true;
    return false;
  }

  render() {
    return (
      <ul>
        {this.props.awards.map((award) => {
          return (
            <li key={award.id}>
              {award.name}

              {this.addPipeline(award.name, award.institution) && <> | </>}

              {award.institution}
              <> </>
              {award.date}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Awards;
