import React, {Component} from 'react';
import Navbar from '../Navbar';
import './NewTracker.css'
const {REACT_APP_SERVER_URL} = process.env;

class NewTracker extends Component{

    handleClick(){
        let addMemberButton = document.querySelector('#addMemberButton');
        let infoFieldDiv = document.querySelector('#member-fields');
        let allMembersDiv = document.querySelector('#all-members');
        let clone = infoFieldDiv.cloneNode(true);
        let inputArray = clone.querySelectorAll('input');
        for(let i=0; i<inputArray.length; i++){
            let inputElement = inputArray[i];
            inputElement.value = '';
        }
        allMembersDiv.appendChild(clone);
    }


    render(){
        return(
            <div class="new-tracker">
                <Navbar/>

                <h1 class="new-tracker-title">New Constraint Tracker</h1>

                <div class="head-label-container">
                    <span class="label-text">General</span>
                </div>

                <form action={`${REACT_APP_SERVER_URL}/constraintTracker`} method="POST">
                <div class="new-tracker-container">
                    <div class="general-info-container">
                        <div>General Information</div>
                    </div>

                    <div class="new-tracker-name-container">
                        <span class="tracker-name-field-text">Tracker Name:</span>
                        
                        <div class="tracker-name-input-container">
                            <input class="tracker-name-input" type="text" name="trackerName"></input>
                        </div>
                    </div>

                    <div class="new-tracker-group-container-5">
                        <span class="tracker-group-field-text-1">Group Members:</span>
                        <div class="group-members-container" id="all-members">
                            <div class="individual-member-container">
                                <span class="tracker-group-field-text">Name: </span>
                                <input class="member-name-input" type="text" name="memberName"></input>

                                <span class="tracker-group-field-text">Company: </span>
                                <input class="member-company-input" type="text" name="memberCompany"></input>
                            </div>

                            <div class="individual-member-container" id="member-fields">
                                <span class="tracker-group-field-text">Name: </span>
                                <input class="member-name-input" type="text" name="memberName"></input>

                                <span class="tracker-group-field-text">Company: </span>
                                <input class="member-company-input" type="text" name="memberCompany"></input>
                            </div>

                        </div>
                        <input type="button" name="button" class="add-button" value="Add another Member" id="addMemberButton" onClick={this.handleClick}/>
                    </div>

                </div>

                <div class="submission-footer">
                    <div class="discard-create-container">
                        <button class="discard-button">
                            <span class="discard-text">Discard</span>
                        </button>
                        <input type="submit" class="create-button-2" value="Create"/>
                        
                    </div>
                </div>
                
                </form>
                    


         
                    
       

         
            </div>
        )
    }
}

export default NewTracker;