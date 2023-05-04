import React, { Component } from "react";

//awards: [], // {[ [name: "", institution: "", date: ""], ...]}
class Awards extends Component {
  constructor(props) {
    super(props);

    this.state = { isShowing: false };
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
            <li
              key={award.id}
              onMouseEnter={() => {
                this.setState({ isShowing: true });
              }}
              onMouseLeave={() => {
                this.setState({ isShowing: false });
              }}
            >
              {award.name}

              {this.addPipeline(award.name, award.institution) && <> | </>}

              {award.institution}
              <> </>
              {award.date}
              {this.state.isShowing && <button onClick={() => this.props.removeAwards(this.props.awards, award.id)}>-</button>}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Awards;
