import React, {Component} from 'react' ;
import axios from 'axios';
import ConstraintItem from './ConstraintItem';
import NewItem from './NewItem'
import Navbar from '../Navbar';
import ItemIndexHeader from './ItemIndexHeader';
import './ConstraintItemIndex.css'
import ConstraintSummary from '../ConstraintSummary/ConstraintSummary';
const { REACT_APP_SERVER_URL } = process.env;

class ConstraintItemIndex extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:[], 
            newConstraints: [],
            trackerName: '', 
            stats: {}
        }
    }


    componentDidMount(){
        let temp = window.location.pathname.split('/')
        let trackerId = temp[2];

        axios.get(`${REACT_APP_SERVER_URL}/constraintItem/${trackerId}`)
        .then((response) => {
            this.setState({
                data: response.data.constraintItemArr, 
                trackerName: response.data.trackerName, 
                stats: response.data.stats
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    displayConstraintItems(){
        
        const displayItems = this.state.data.map((constraint, idx) => {
            return <ConstraintItem key={idx} 
            keyC={idx}
            id={constraint._id}
            driver={constraint.driver}
            itemName={constraint.itemName}
            emailSubject={constraint.emailSubject}
            bICTeam={constraint.bICTeam}
            bICName={constraint.bICName}
            description={constraint.description}
            nextStep={constraint.nextStep}
            targetDate={constraint.targetDate}
            priorityLevel={constraint.priorityLevel}
            />
        })
        return displayItems;
    }
    
    handleClick = () => {
        let temp = window.location.pathname.split('/')
        let trackerId = temp[2];
        this.setState({
            newConstraints: [<NewItem id={trackerId}/>]
        })
    }

    handleOverviewClick = () => {
        let summaryDiv = document.querySelector('.constraint-summary');
        summaryDiv.classList.toggle("hidden");

        let toggleButton = document.querySelector('.toggle-summary-button');
        if(toggleButton.value == "Hide Overview"){
            toggleButton.value = "Show Overview";
        }
        else{
            toggleButton.value = "Hide Overview"
        }
        
    }


    render(){
        let temp = window.location.pathname.split('/')
        let trackerId = temp[2];
        return(
            <div>

                <Navbar />
                <ItemIndexHeader trackerName={this.state.trackerName}/>

                <h2 class="summary-title">Tracker Overview</h2>
                <input type="button" class="toggle-summary-button" name="button" value="Hide Overview" onClick={this.handleOverviewClick}/>
                <div class="constraint-summary">
                    <ConstraintSummary stats={this.state.stats} />
                </div>
                <div class="add-delete-tracker-container"> 
                    <input type="button" class="add-constraint-button" name="button" value="Add a Constraint" onClick={this.handleClick}/>
                    <form action={`${REACT_APP_SERVER_URL}/constraintTracker/${trackerId}/?_method=DELETE`} method="POST">
                        <input type="submit" class="delete-tracker-button" name="button" value="Delete Tracker" onClick={this.handleClick}/>     
                    </form>
                    
                </div>
                
                {this.state.newConstraints}
                {this.displayConstraintItems()}
                
                
            </div>
        )
    }
}

export default ConstraintItemIndex;