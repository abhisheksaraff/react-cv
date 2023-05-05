import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = { isShowing: false };

    this.onClickEvent = () => {
      this.props.deleteName();

      //removes the ghost remove button left after removing name that stays there until you move the mouse
      this.setState({ isShowing: false });
    };
  }

  render() {
    return (
      <div
        onMouseEnter={() => {
          this.setState({ isShowing: true });
        }}
        onMouseLeave={() => {
          this.setState({ isShowing: false });
        }}
      >
        {this.props.name}
        {this.state.isShowing && <button onClick={this.onClickEvent}>-</button>}
      </div>
    );
  }
}

export default Name;
