import React, { Component } from 'react';
import './Item.css'

class Item extends Component {
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
                                Justin
                            </div>
                        </div>

                        <div class="new-constname-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Constraint Item Name: </span>
                                IQ Panel Procurement
                            </div>
                        </div>

                        <div class="new-email-subject-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Email Subject Line: </span>
                                Subject Line 1
                            </div>
                        </div>

                        <div class="bic-container" >
                            <div class="individual-member-container">
                                <span class="tracker-group-field-text">BIC Team: </span>
                                Rosendin

                                <span class="tracker-group-field-text">BIC Name: </span>
                                Colton
                            </div>
                        </div>

                        <div class="new-description-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Description: </span>
                                Conflicts within the middling orders were more pronounced than peaceful cooperation. Tariffs
                                on imports were a boon to domestic manufacturers but a burden on merchants. Distribution of
                                largesse from the central government, whether paintings donated to provincial museums or
                                subsidies provided to struggling industries let to disputes about favoritism among cities and
                                regions. The issue of state support for sectarian schools became a contentious issue between
                                devout and secular citizens. The location of the railroad network, which speedily spread
                                through most of Europe in the 1840s and 1850s, became a matter of virtual economic life and
                                death across the map. And, … limitations on the right to vote on the basis of income were sore
                            </div>
                        </div>

                        <div class="new-next-step-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Next Step: </span>
                                Conflicts within the middling orders were more pronounced than peaceful cooperation. Tariffs
                                on imports were a boon to domestic manufacturers but a burden on merchants. Distribution of
                                largesse from the central government, whether paintings donated to provincial museums or
                            </div>
                        </div>

                        <div class="target-date-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Target Date: </span>
                                12-31-21
                            </div>
                        </div>

                        <div class="priority-level-container">
                            <div class="new-field-container">
                                <span class="tracker-group-field-text">Priority Level: </span>
                                Urgent
                            </div>
                        </div>

                        <div class="discard-create-container">
                            <button class="discard-button">
                                <span class="discard-text">Discard</span>
                            </button>

                            <button class="create-button" >
                                <span class="create-text">Edit</span>
                            </button>
                        </div>



                    </div>


                </div>


            </div>
        )
    }
}

export default Item;