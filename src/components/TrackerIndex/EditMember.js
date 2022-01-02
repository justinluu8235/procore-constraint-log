import React, { Component } from 'react';

class EditMember extends Component {

    constructor(props){
        super(props);
        this.state={
            memberName: this.props.name,
            memberCompany: this.props.company
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let input = event.target.value
        this.setState({
            [event.target.name]: input
        })
    }


    render() {
        return (
            
            <div className="individual-member-container" id="member-fields">
                
                <span className="tracker-group-field-text">Name: </span>
                <input className="member-name-input" type="text" name="memberName" value={this.state.memberName} onChange={this.handleChange}></input>

                <span className="tracker-group-field-text">Company: </span>
                <input className="member-company-input" type="text" name="memberCompany" value={this.state.memberCompany} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default EditMember;