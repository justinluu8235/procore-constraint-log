import React, {Component} from 'react';
import {Link} from 'react-router-dom'



class IndividualTracker extends Component {

    constructor(props){
        super(props)
    }

    displayGroupMembers(){
        let groupArr = this.props.group;
        let membersString = 'Group Members: ';
        for(let i=0; i<groupArr.length; i++){
            membersString += `${groupArr[i].name} (${groupArr[i].company}), `
        }
        return membersString;
    }


    render(){
        return(
            <div>
                <h1><Link to= {{
                    pathname: `/constraints/${this.props.id}`  
                }}>Tracker Name: {this.props.trackerName}</Link></h1>
                {this.displayGroupMembers()}
            </div>
        )
    }
}

export default IndividualTracker;