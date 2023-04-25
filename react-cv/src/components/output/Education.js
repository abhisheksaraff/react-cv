import React, {Component} from 'react';

class Education extends Component    {
    constructor(props){
        super(props);
    }

    render(){
        return <div>{this.props.education}</div>;
    }
}

export default Education;