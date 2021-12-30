import React, { Component } from 'react';
import './EditTracker.css'
import Navbar from '../Navbar';
import axios from 'axios';
import EditMember from './EditMember'

class EditTracker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            firstNameInput: '',
            firstCompanyInput: ''
        }
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



    componentDidMount() {
        let temp = window.location.pathname.split('/')
        let trackerId = temp[2];

        axios.get(`http://localhost:3000/constraintTracker/${trackerId}`)
            .then((response) => {
                let firstName = response.data.constraintTracker.group[0].name;
                let firstCompany = response.data.constraintTracker.group[0].company;
                this.setState({
                    data: response.data.constraintTracker,
                    firstNameInput: firstName,
                    firstCompanyInput: firstCompany
                })

            })
            .catch((err) => {
                console.log(err);
            })
    }

    displayMembers(){

        let temp = window.location.pathname.split('/')
        let trackerId = temp[2];

        axios.get(`http://localhost:3000/constraintTracker/${trackerId}`)
        .then((response) => {
            let group = response.data.constraintTracker.group;
            group.shift();

            const displayGroupMembers = group.map((member, idx) => {
                return  <EditMember key={idx} name={member.name}  company={member.company} /> 
            })
            console.log(displayGroupMembers)
            return displayGroupMembers;
        })
        .catch((err) => {
            console.log(err);
        })
    }




    render() {
        return (
            <div class="edit-tracker">
                <Navbar />

                <h1 class="edit-tracker-title">New Constraint Tracker</h1>

                <div class="head-label-container">
                    <span class="label-text">General</span>
                </div>

                <form action="http://localhost:3000/constraintTracker" method="POST">
                    <div class="new-tracker-container">
                        <div class="general-info-container">
                            <div>General Information</div>
                        </div>

                        <div class="new-tracker-name-container">
                            <span class="tracker-name-field-text">Tracker Name:</span>

                            <div class="tracker-name-input-container">
                                <input class="tracker-name-input" type="text" name="trackerName" value={this.state.data.trackerName}></input>
                            </div>
                        </div>

                        <div class="new-tracker-group-container-5">
                            <span class="tracker-group-field-text-1">Group Members:</span>
                            <div class="group-members-container" id="all-members">
                                <div class="individual-member-container">
                                    <span class="tracker-group-field-text">Name: </span>
                                    <input class="member-name-input" type="text" name="memberName" value={this.state.firstNameInput}></input>

                                    <span class="tracker-group-field-text">Company: </span>
                                    <input class="member-company-input" type="text" name="memberCompany" value={this.state.firstCompanyInput}></input>
                                </div>
                                {this.displayMembers()}
                                <div class="individual-member-container" id="member-fields">
                                    <span class="tracker-group-field-text">Name: </span>
                                    <input class="member-name-input" type="text" name="memberName"></input>

                                    <span class="tracker-group-field-text">Company: </span>
                                    <input class="member-company-input" type="text" name="memberCompany"></input>
                                </div>

                            </div>
                            <input type="button" name="button" class="add-button" value="Add another Member" id="addMemberButton" onClick={this.handleClick} />
                        </div>

                    </div>

                    <div class="submission-footer">
                        <div class="discard-create-container">
                            <button class="discard-button">
                                <span class="discard-text">Discard</span>
                            </button>
                            <input type="submit" class="create-button-2" value="Create" />

                        </div>
                    </div>

                </form>








            </div>
        )
    }
}

export default EditTracker;