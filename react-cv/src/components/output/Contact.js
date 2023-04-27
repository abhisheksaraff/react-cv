import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.contact.phone}

        {/* checks if either email or phone contain something, then renders a '|' after phone number*/}
        {this.props.contact.email !== undefined &&
          this.props.contact.email !== "" &&
          this.props.contact.phone !== undefined &&
          this.props.contact.phone !== "" && <> | </>}

        {this.props.contact.email}

        {/* checks if either email or phone or onlineProfilne contain something, then renders a '|' before onlineProfile */}
        {((this.props.contact.phone !== undefined &&
          this.props.contact.phone !== "" &&
          this.props.contact.onlineProfile !== undefined &&
          this.props.contact.onlineProfile !== "") ||
          (this.props.contact.email !== undefined &&
            this.props.contact.email !== "" &&
            this.props.contact.onlineProfile !== undefined &&
            this.props.contact.onlineProfile !== "")) && <> | </>}

        <a rel="noopener noreferrer" target="_blank" href={`https:\\${this.props.contact.onlineProfile}`}>
          {this.props.contact.onlineProfile}
        </a>

      </div>
    );
  }
}

export default Contact;
