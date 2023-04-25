import React, {Component} from 'react';

class Experience extends Component    {
    constructor(props){
        super(props);
    }

    render(){
        return <div>{this.props.experience}</div>;
    }
}

export default Experience;