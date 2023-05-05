import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Contact</h4>
        <form onSubmit={this.props.setContact}>
          <label>
            Phone Number :
            <input type="text" name="phone" />
          </label>
          <label>
            Email :
            <input type="text" name="email" />
          </label>
          <label>
            Link to Profile :
            <input type="text" name="onlineProfile" />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Contact;
