import React, { Component } from 'react';

class EditMember extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            
            <div class="individual-member-container" id="member-fields">
                
                <span class="tracker-group-field-text">Name: </span>
                <input class="member-name-input" type="text" name="memberName" value={this.props.name}></input>

                <span class="tracker-group-field-text">Company: </span>
                <input class="member-company-input" type="text" name="memberCompany" value={this.props.company}></input>
            </div>
        )
    }
}

export default EditMember;