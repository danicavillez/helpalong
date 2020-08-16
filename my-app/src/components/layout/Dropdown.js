import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'King'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return(
            <h2> What County are you located in? :
            <select value={this.state.value} onChange={this.handleChange} classNameName="dropdown" id="county">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        County Name</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <option className="dropdown-item" value="Adams"> Adams</option>
                        <option className="dropdown-item" value="Asotin">Asotin</option>
                        <option className="dropdown-item" value="Benton">Benton</option>
                        <option className="dropdown-item" value="Chelan">Chelan</option>
                        <option className="dropdown-item" value="Clallam">Clallam</option>
                        <option className="dropdown-item" value="Clark">Clark</option>
                        <option className="dropdown-item" value="Columbia">Columbia</option>
                        <option className="dropdown-item" value="Cowlitz">Cowlitz</option>
                        <option className="dropdown-item" value="Douglas">Douglas</option>
                        <option className="dropdown-item" value="Ferry">Ferry</option>
                        <option className="dropdown-item" value="Franklin">Franklin</option>
                        <option className="dropdown-item" value="Garfield">Garfield</option>
                        <option className="dropdown-item" value="Grant">Grant</option>
                        <option className="dropdown-item" value="Grays Harbor">Grays Harbor</option>
                        <option className="dropdown-item" value="Island">Island</option>
                        <option className="dropdown-item" value="Jefferson">Jefferson</option>
                        <option className="dropdown-item" value="King">King</option>
                        <option className="dropdown-item" value="Kitsap">Kitsap</option>
                        <option className="dropdown-item" value="Kittitas">Kittitas</option>
                        <option className="dropdown-item" value="Klickitat">Klickitat</option>
                        <option className="dropdown-item" value="Lewis">Lewis</option>
                        <option className="dropdown-item" value="Lincoln">Lincoln</option>
                        <option className="dropdown-item" value="Mason">Mason</option>
                        <option className="dropdown-item" value="Okanogan">Okanogan</option>
                        <option className="dropdown-item" value="Pacific">Pacific</option>
                        <option className="dropdown-item" value="Pend Oreille">Pend Oreille</option>
                        <option className="dropdown-item" value="Pierce">Pierce</option>
                        <option className="dropdown-item" value="Skagit">Skagit</option>
                        <option className="dropdown-item" value="Skamania">Skamania</option>
                        <option className="dropdown-item" value="Snohomish">Snohomish</option>
                        <option className="dropdown-item" value="Spokane">Spokane</option>
                        <option className="dropdown-item" value="Stevens">Stevens</option>
                        <option className="dropdown-item" value="Thurtson">Thurston</option>
                        <option className="dropdown-item" value="Wahkiakum">Wahkiakum</option>
                        <option className="dropdown-item" value="Walla Walla">Walla Walla</option>
                        <option className="dropdown-item" value="Whatcom">Whatcom</option>
                        <option className="dropdown-item" value="Whitman">Whitman</option>
                        <option className="dropdown-item" value="Yakima">Yakima</option>
                    </div>
            </select>
            </h2>
        );
    }
}

export default Dropdown;