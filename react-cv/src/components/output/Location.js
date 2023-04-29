import React, { Component } from "react";

class Location extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.city}

        {/* renders , if city and state are not undefined/empty */}
        {this.props.city !== undefined &&
          this.props.city !== "" &&
          this.props.state !== undefined &&
          this.props.state !== "" && <>, </>}

        {this.props.state}
      </div>
    );
  }
}

export default Location;
