import React, { Component } from "react";

//awards: [], // {[ [name: "", institution: "", date: ""], ...]}
class Awards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.awards.name}

          {this.props.awards.name !== undefined &&
            this.props.awards.name !== "" &&
            this.props.awards.institution !== null &&
            this.props.awards.institution !== "" && <> | </>}

          {this.props.awards.institution}
          <> </>
          {this.props.awards.date}
        </div>
      </div>
    );
  }
}

export default Awards;
