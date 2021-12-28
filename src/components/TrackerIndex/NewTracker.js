import React, {Component} from 'react';

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
            <div>
                <p>New Tracker</p>
                <form action="http://localhost:3000/constraintTracker" method="POST">
                    
                    <label for="trackerName"><p>Tracker Name</p></label>
                    <input type="text" name="trackerName" />

                    <div id="all-members">
                        <label for="memberName"><p>Group Member Name</p></label>
                        <input type="text" name="memberName" />
                        <label for="memberCompany"><p>Group Member Company</p></label>
                        <input type="text" name="memberCompany" />

                        <div id="member-fields">
                            <label for="memberName"><p>Group Member Name</p></label>
                            <input type="text" name="memberName" />
                            <label for="memberCompany"><p>Group Member Company</p></label>
                            <input type="text" name="memberCompany" />
                        </div>
                    </div>
                    <label for="button"></label>
                    <input type="button" name="button" value="Add another Member" id="addMemberButton" onClick={this.handleClick}/>
            

                    <br></br>
                    <input type="submit" />
                </form>

         
            </div>
        )
    }
}

export default NewTracker;