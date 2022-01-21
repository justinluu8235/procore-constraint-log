import React, { Component } from 'react';
import axios from 'axios';
import './EditItem.css'
const {REACT_APP_SERVER_URL} = process.env;

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driver: '',
            itemName: '',
            emailSubject: '',
            bICTeam: '',
            bICName: '',
            description: '',
            nextStep: '',
            targetDate: '',
            priorityLevel: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let input = event.target.value
        this.setState({
            [event.target.name]: input.trim()
        })
    }


    componentDidMount() {
        let trackerId = this.props.trackerId;
        let itemId = this.props.itemId;

        axios.get(`${REACT_APP_SERVER_URL}/constraintItem/edit/${itemId}`)
            .then((response) => {
                let data = response.data.constraintItem;
                this.setState({
                    driver: data.driver,
                    itemName: data.itemName,
                    emailSubject: data.emailSubject,
                    bICTeam: data.bICTeam,
                    bICName: data.bICName,
                    description: data.description,
                    nextStep: data.nextStep,
                    targetDate: data.targetDate,
                    priorityLevel: data.priorityLevel
                })

            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        let trimName = this.state.itemName.replace(/\s/g, "");
        trimName = trimName.replace("'", "");
        trimName = trimName.replace(/[0-9]/g, '');
        return (
            <div class={`${trimName}`}>
                <div class="new-tracker-group-container">
                    <form action={`${REACT_APP_SERVER_URL}/constraintItem/edit/${this.props.itemId}`} method="POST">
                        <div class="new-driver-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Driver: </span>
                                <input class="new-field-input" type="text" name="driver" value={this.state.driver} onChange={this.handleChange} required></input>
                            </div>
                        </div>

                        <div class="new-constname-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Constraint Item Name: </span>
                                <input class="new-constname-input new-field-input" type="text" name="itemName" value={this.state.itemName} onChange={this.handleChange} required></input>
                            </div>
                        </div>

                        <div class="new-email-subject-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Email Subject Line: </span>
                                <input class="new-email-subject-input new-field-input" type="text" name="emailSubject" value={this.state.emailSubject} onChange={this.handleChange}></input>
                            </div>
                        </div>

                        <div class="bic-container" >
                            <div class="individual-member-container">
                                <span class="tracker-group-field-text bic-team-text">BIC Team: </span>
                                {/* <input class="new-field-input" type="text" name="bICTeam" value={this.state.bICTeam} onChange={this.handleChange}></input> */}
                                <select name="bICTeam" class="new-field-input" value={this.state.bICTeam} onChange={this.handleChange}>
                                    <option value="Design Team">Design Team</option>
                                    <option value="General Contractor">General Contractor</option>
                                    <option value="Trade Partner">Trade Partner</option>
                                    <option value="Owner">Owner</option>
                                </select>

                                <span class="tracker-group-field-text">BIC Name: </span>
                                <input class="new-field-input" type="text" name="bICName" value={this.state.bICName} onChange={this.handleChange}></input>
                            </div>
                        </div>

                        <div class="new-description-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Description: </span>
                                <textarea class="text-area-input-edit" name="description" cols="50" rows="5" value={this.state.description} onChange={this.handleChange}></textarea>
                            </div>
                        </div>

                        <div class="new-next-step-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Next Step: </span>
                                <textarea class="next-step-text-area-edit" name="nextStep" cols="50" rows="5" value={this.state.nextStep} onChange={this.handleChange}></textarea>
                            </div>
                        </div>

                        <div class="target-date-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Target Date: </span>
                                <input class="date-input-edit" type="date" name="targetDate" value={this.state.targetDate} onChange={this.handleChange}></input>
                            </div>
                        </div>

                        <div class="priority-level-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Priority Level: </span>
                                {/* <input class="new-field-input" type="text" name="priorityLevel" value={this.state.priorityLevel} onChange={this.handleChange}></input> */}
                                <select name="priorityLevel" class="new-field-input" value={this.state.priorityLevel} onChange={this.handleChange}>
                                    <option value="Urgent">Urgent</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>

                        <div class="discard-create-container">
                            
                           

                            <input type="submit" class="create-button-3" value="Update" />
                        </div>
                    </form>
                    <form action={`${REACT_APP_SERVER_URL}/constraintItem/${this.props.itemId}/?_method=DELETE`} method="POST">
                                 <input type="submit" class="discard-button-3" value="Discard" />      
                    </form>
                </div>
            </div>
        )
    }
}

export default EditItem;