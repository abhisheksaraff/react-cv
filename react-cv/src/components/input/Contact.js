import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Contact :
            <input type="text" onChange={this.props.setContact} />
          </label>
        </form>
      </div>
    );
  }
}

export default Contact;
