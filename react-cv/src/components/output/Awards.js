import React, {Component} from 'react';

class Awards extends Component    {
    constructor(props){
        super(props);
    }

    render(){
        return <div>{this.props.awards}</div>;
    }
}

export default Awards;