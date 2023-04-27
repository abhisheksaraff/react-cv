import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onChange={this.props.setContact}>
          <label>
            Phone Number :
            <input type="text" name="phone"/>
          </label>
          <label>
            Email :
            <input type="text" name="email"/>
          </label>
          <label>
            Link to Profile :
            <input type="text" name="onlineProfile"/>
          </label>
        </form>
      </div>
    );
  }
}

export default Contact;
