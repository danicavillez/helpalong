import React, { Component } from 'react';
import Dropdown from './layout/Dropdown';
import Immediate from './layout/Immediate';


class MentalHealth extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { value: 'King' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <h1> Mental Health Resources</h1>
                <Dropdown/>
                <Immediate/>
            </div>
        );
    }

}

export default MentalHealth;