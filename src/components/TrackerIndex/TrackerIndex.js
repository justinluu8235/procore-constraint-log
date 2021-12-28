import axios from 'axios';
import React, {Component} from 'react' ;
import IndividualTracker from './IndividualTracker';


class TrackerIndex extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }


    componentDidMount(){
        axios.get('http://localhost:3000/constraintTracker')
        .then((response) => {
            this.setState({
                data: response.data.constraintTrackerArray
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }


    displayTrackers(){
        const displayTracker = this.state.data.map((tracker, idx) => {
            return <IndividualTracker key={idx} id={tracker._id} trackerName={tracker.trackerName} group={tracker.group} constraintsOpen={tracker.constraintsOpen}/>
        })
        return displayTracker;
    }


    render(){
        return(
            <div>
            {this.displayTrackers()}
            <br></br>
            <a href="/newTracker">Add a new Constraint Tracker</a>
            </div>
        )
    }
}

export default TrackerIndex;