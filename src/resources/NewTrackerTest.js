import React, { Component } from 'react';
import './NewTrackerTest.css'

class NewTrackerTest extends Component {
    render() {
        return (
            <div class="new-tracker">
                <h1 class="new-tracker-title">New Constraint Tracker</h1>

                <div class="head-label-container">
                    <span class="label-text">General</span>
                </div>

                <div class="new-tracker-container">
                    <div class="general-info-container">
                        <div>General Information</div>
                    </div>

                    <div class="new-tracker-name-container">
                        <span class="tracker-name-field-text">Tracker Name:</span>
                        <div class="tracker-name-input-container">
                            <input class="tracker-name-input"></input>
                        </div>
                    </div>


                    <div class="new-tracker-group-container">
                        <span class="tracker-group-field-text">Group Members:</span>
                        <div class="group-members-container" id="all-members">
                            <div class="individual-member-container">
                                <span class="tracker-group-field-text">Name: </span>
                                <input class="member-name-input"></input>

                                <span class="tracker-group-field-text">Company: </span>
                                <input class="member-company-input"></input>
                            </div>

                            <div class="individual-member-container">
                                <span class="tracker-group-field-text">Name: </span>
                                <input class="member-name-input"></input>

                                <span class="tracker-group-field-text">Company: </span>
                                <input class="member-company-input"></input>
                            </div>





                            <input type="button" name="button" class="add-button" value="Add another Member"/>
                        </div>
                    </div>


                </div>


                <div class="submission-footer">
                    <div class="discard-create-container">
                        <button class="discard-button">
                            <span class="discard-text">Discard</span>
                        </button>

                        <button class="create-button" >
                            <span class="create-text">Create</span>
                        </button>
                    </div>
                </div>


            </div>
        )
    }
}

export default NewTrackerTest;