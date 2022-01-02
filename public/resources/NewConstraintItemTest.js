import React, { Component } from 'react';
import './NewConstraintItemTest.css'

class NewConstraintItemTest extends Component {
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



                    <div class="new-tracker-group-container">

                        <div class="new-driver-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Driver: </span>
                                <input class="new-field-input" type="text" name="driver"></input>
                            </div>
                        </div>

                        <div class="new-constname-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Constraint Item Name: </span>
                                <input class="new-constname-input new-field-input" type="text" name="itemName"></input>
                            </div>
                        </div>

                        <div class="new-email-subject-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Email Subject Line: </span>
                                <input class="new-email-subject-input new-field-input" type="text" name="emailSubject"></input>
                            </div>
                        </div>

                        <div class="bic-container" >
                            <div class="individual-member-container">
                                <span class="tracker-group-field-text bic-team-text">BIC Team: </span>
                                <input class="new-field-input" type="text" name="bICTeam"></input>

                                <span class="tracker-group-field-text">BIC Name: </span>
                                <input class="new-field-input" type="text" name="bICName"></input>
                            </div>
                        </div>

                        <div class="new-description-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Description: </span>
                                <textarea class="text-area-input" name="description" cols="50" rows="5"></textarea>
                            </div>
                        </div>

                        <div class="new-next-step-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Next Step: </span>
                                <textarea class="next-step-text-area" name="nextStep" cols="50" rows="5"></textarea>
                            </div>
                        </div>

                        <div class="target-date-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Target Date: </span>
                                <input class="new-field-input" type="text" name="targetDate"></input>
                            </div>
                        </div>

                        <div class="priority-level-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Priority Level: </span>
                                <input class="new-field-input" type="text" name="priorityLevel"></input>
                            </div>
                        </div>

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


                <div class="submission-footer">

                </div>


            </div>
        )
    }
}

export default NewConstraintItemTest;