import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = { isShowing: false };

    this.onClickEvent = () => {
      this.setState({ isShowing: false });
      this.props.deleteContact();
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

        {/* opens profileLink in a new window */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https:\\${this.props.contact.onlineProfile}`}
        >
          {this.props.contact.onlineProfile}
        </a>
        {this.state.isShowing && <button onClick={this.onClickEvent}>-</button>}
      </div>
    );
  }
}

export default Contact;
