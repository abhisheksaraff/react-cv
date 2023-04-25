import React, {Component} from 'react';

class Contact extends Component    {
    constructor(props){
        super(props);
    }

    render(){
        return <div>{this.props.contact}</div>;
    }
}

export default Contact;