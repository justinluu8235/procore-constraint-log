import React, { Component } from 'react';
import './ConstraintItem.css'
import EditItem from './EditItem';

class ConstraintItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editItem : []
        }
    }

    handleClick = () => {
        let trimName = this.props.itemName.replace(/\s/g, "");
        let hideDiv = document.querySelector(`.${trimName}`)
        hideDiv.remove();
        let temp = window.location.pathname.split('/')
        let trackerID = temp[2];
        this.setState({
            editItem: [<EditItem trackerId={trackerID} itemId={this.props.id} key={this.props.keyC}/>]
        })
    }

    render() {
        let trimName = this.props.itemName.replace(/\s/g, "");
        return (

            <div class="new-tracker">

                <div class={`new-tracker-container ${trimName}`}>

                    <div class="new-tracker-group-container-1">

                        <div class="new-driver-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Driver: </span>
                                {this.props.driver}
                            </div>
                        </div>

                        <div class="new-constname-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Constraint Item Name: </span>
                                {this.props.itemName}
                            </div>
                        </div>

                        <div class="new-email-subject-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Email Subject Line: </span>
                                {this.props.emailSubject}
                            </div>
                        </div>

                        <div class="bic-container" >
                            <div class="individual-member-container">
                                <span class="tracker-group-field-text">BIC Team: </span>
                                {this.props.bICTeam}

                                <span class="tracker-group-field-text">BIC Name: </span>
                                {this.props.bICName}
                            </div>
                        </div>

                        <div class="description-container">
                            <div class="new-field-container-1">
                                <span class="tracker-group-field-text">Description: </span>
                                <div class="description-display">
                                    {this.props.description}
                                </div>

                            </div>
                        </div>

                        <div class="next-step-container">
                            <div class="new-field-container-1">
                                <span class="tracker-group-field-text">Next Step: </span>
                                <div class="description-display">
                                {this.props.nextStep}
                                </div>
                            </div>
                        </div>

                        <div class="target-date-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Target Date: </span>
                                {this.props.targetDate}
                            </div>
                        </div>

                        <div class="priority-level-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Priority Level: </span>
                                {this.props.priorityLevel}
                            </div>
                        </div>

                        <div class="discard-create-container-6">
                            {/* <button class="discard-button-6">
                                <span class="discard-text">Discard</span>
                            </button> */}
                            <form action={`http://localhost:3000/constraintItem/${this.props.id}/?_method=DELETE`} method="POST">
                                 <input type="submit" class="discard-button-6" value="Discard" />      
                            </form>
                            <button class="create-button-6" onClick={this.handleClick}>
                                <span class="create-text">Edit</span>
                            </button>
                        </div>


                    </div>

                </div>
                {this.state.editItem}
            </div>

        )
    }
}

export default ConstraintItem;