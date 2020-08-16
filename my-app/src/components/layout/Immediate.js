import React from 'react';

class Immediate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'No' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <h2> Do you need someone to talk to? 
            <select value={this.state.value} onChange={this.handleChange}>
                <option className="dropdown-item" value="Yes">Yes</option>
                <option className="dropdown-item" value="No">No</option>
            </select>
            </h2>
        );
    }
}

export default Immediate;