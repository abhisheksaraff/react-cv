import React, { Component } from "react";

class Date extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.startDate}

        {/* renders , if startDate and endDate are not undefined/empty */}
        {this.props.startDate !== undefined &&
          this.props.startDate !== "" &&
          this.props.endDate !== undefined &&
          this.props.endDate !== "" && <>, </>}

        {this.props.endDate}
      </div>
    );
  }
}

export default Date;
