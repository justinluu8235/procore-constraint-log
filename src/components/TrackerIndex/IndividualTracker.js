import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './IndividualTracker.css'



class IndividualTracker extends Component {

    constructor(props) {
        super(props)
    }

    displayGroupMembers() {
        let groupArr = this.props.group;
        let membersString = 'Group Members: ';
        for (let i = 0; i < groupArr.length; i++) {
            membersString += `${groupArr[i].name} (${groupArr[i].company}), `
        }
        return membersString;
    }


    render() {
        return (
            <div>
                <h1></h1>

                <div class="table-row">
                    <span class="empty-cell"></span>

                    <div class="checkbox-container">
                        <label class="checkbox-label">
                            <input class="checkbox" type="checkbox"></input>
                        </label>
                    </div>

                    <div class="edit-view-container">
                        <div class="edit-view-button-wrap">
                            <a class="edit-view-button">
                                <span><Link 
                                style={{ color:"#282828"}}
                                to={{
                                pathname: `/editTracker/${this.props.id}`}}>Edit</Link></span>
                            </a>

                            <a class="edit-view-button">
                                <span> <Link 
                                style={{ color:"#282828"}}
                                to={{
                                pathname: `/constraints/${this.props.id}`}}>View</Link></span>
                            </a>
                        </div>
                    </div>

                    <div class="constraint-name-row-container">
                        <a class="constraint-name-text">
                            <Link to={{
                                pathname: `/constraints/${this.props.id}`
                            }}>{this.props.trackerName}</Link>
                        </a>
                    </div>

                    <div class="group-row-container">
                        <a class="group-text">
                            {this.displayGroupMembers()}
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default IndividualTracker;