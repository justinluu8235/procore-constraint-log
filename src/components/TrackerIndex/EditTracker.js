import React, { Component } from 'react';
import './EditTracker.css'
import Navbar from '../Navbar';
import axios from 'axios';
import EditMember from './EditMember'
const { REACT_APP_SERVER_URL } = process.env;

class EditTracker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            firstNameInput: '',
            firstCompanyInput: '',
            trackerNameVal: '',
            group: [],
            trackerID: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        let addMemberButton = document.querySelector('#addMemberButton');
        let infoFieldDiv = document.querySelector('#member-fields');
        let allMembersDiv = document.querySelector('#all-members');
        let clone = infoFieldDiv.cloneNode(true);
        let inputArray = clone.querySelectorAll('input');
        for (let i = 0; i < inputArray.length; i++) {
            let inputElement = inputArray[i];
            inputElement.value = '';
        }
        allMembersDiv.appendChild(clone);
    }

    handleChange(event) {

        this.setState({
            trackerNameVal: event.target.value
        })
    }

    componentDidMount() {
        let temp = window.location.pathname.split('/')
        let trackerId = temp[2];

        axios.get(`${REACT_APP_SERVER_URL}/constraintTracker/${trackerId}`)
            .then((response) => {
                let firstName = response.data.constraintTracker.group[0].name;
                let firstCompany = response.data.constraintTracker.group[0].company;
                let trackerName = response.data.constraintTracker.trackerName
                this.setState({
                    data: response.data.constraintTracker,
                    firstNameInput: firstName,
                    firstCompanyInput: firstCompany,
                    trackerNameVal: trackerName,
                    trackerID: trackerId
                })

            })
            .catch((err) => {
                console.log(err);
            })
    }

    displayMembers() {

        let temp = window.location.pathname.split('/')
        let trackerId = temp[2];

        axios.get(`${REACT_APP_SERVER_URL}/constraintTracker/${trackerId}`)
            .then((response) => {
                let group = response.data.constraintTracker.group;
                group.shift();

                const displayGroupMembers = group.map((member, idx) => {
                    return <EditMember key={idx} name={member.name} company={member.company} />
                })

                this.setState({
                    group: displayGroupMembers
                })


                return displayGroupMembers;
            })
            .catch((err) => {
                console.log(err);
            })
    }




    render() {

        let formLink = `${REACT_APP_SERVER_URL}/constraintTracker/${this.state.trackerID}`

        return (
            <div>
                <Navbar />
            
            <div className="edit-tracker">
                

                <h1 className="edit-tracker-title">Edit Constraint Tracker</h1>

                <div className="head-label-container">
                    <span className="label-text">General</span>
                </div>

                <form action={formLink} method="POST">
                    <div className="new-tracker-container">
                        <div className="general-info-container">
                            <div>General Information</div>
                        </div>

                        <div className="new-tracker-name-container">
                            <span className="tracker-name-field-text">Tracker Name:</span>

                            <div className="tracker-name-input-container">
                                <input className="tracker-name-input" type="text" name="trackerName" value={this.state.trackerNameVal} onChange={this.handleChange}></input>
                            </div>
                        </div>

                        <div className="new-tracker-group-container-5">
                            <span className="tracker-group-field-text-1">Group Members:</span>
                            <div className="group-members-container-edit" id="all-members">
                                <div className="individual-member-container-edit">
                                    <div class="edit-member-row">
                                        <span className="tracker-group-field-text">Name: </span>
                                        <input className="member-name-input" type="text" name="memberName" value={this.state.firstNameInput} onChange={this.handleChange}></input>
                                    </div>
                                    <div class="edit-member-row">
                                        <span className="tracker-group-field-text">Company: </span>
                                        <input className="member-company-input" type="text" name="memberCompany" value={this.state.firstCompanyInput} onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                {this.displayMembers()}
                                {this.state.group}

                                <div className="individual-member-container-edit" id="member-fields">
                                    <div class="edit-member-row">
                                        <span className="tracker-group-field-text">Name: </span>
                                        <input className="member-name-input" type="text" name="memberName"></input>
                                    </div>
                                    <div class="edit-member-row">
                                        <span className="tracker-group-field-text">Company: </span>
                                        <input className="member-company-input" type="text" name="memberCompany"></input>
                                    </div>
                                </div>

                            </div>
                            <input type="button" name="button" className="add-button" value="Add another Member" id="addMemberButton" onClick={this.handleClick} />
                        </div>

                    </div>

                    <div className="submission-footer">
                        <div className="discard-create-container">

                            <input type="submit" className="create-button-2" value="Update" />

                        </div>
                    </div>
                </form>

            </div>
            </div>
        )
    }
}

export default EditTracker;