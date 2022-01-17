import React, { Component } from 'react';
import './NewItem.css'
const { REACT_APP_SERVER_URL } = process.env;

class NewItem extends Component {
    render() {
        return (
            <div>
                <div class="new-tracker-group-container">
                    <form action={`${REACT_APP_SERVER_URL}/constraintItem/${this.props.id}`} method="POST">
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
                                {/* <input class="new-field-input" type="text" name="bICTeam"></input> */}
                                <select name="bICTeam" class="new-field-input">
                                    <option value="Design Team">Design Team</option>
                                    <option value="General Contractor">General Contractor</option>
                                    <option value="Trade Partner">Trade Partner</option>
                                    <option value="Owner">Owner</option>
                                </select>

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
                                <input class="new-field-input" type="date" name="targetDate"></input>
                            </div>
                        </div>

                        <div class="priority-level-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Priority Level: </span>
                                {/* <input class="new-field-input" type="text" name="priorityLevel"></input> */}
                                <select name="priorityLevel" class="new-field-input">
                                    <option value="Urgent">Urgent</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>

                            </div>
                        </div>

                        <div class="discard-create-container-3">
                            <button class="discard-button">
                                <span class="discard-text">Discard</span>
                            </button>

                            <input type="submit" class="create-button-3" value="Create" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default NewItem;