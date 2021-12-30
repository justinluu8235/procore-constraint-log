import React, {Component} from 'react' ;
import axios from 'axios';
import ConstraintItem from './ConstraintItem';
import NewItem from './NewItem'
import Navbar from '../Navbar';
import ItemIndexHeader from './ItemIndexHeader';
import './ConstraintItemIndex.css'

class ConstraintItemIndex extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:[], 
            newConstraints: [],
            trackerName: ''
        }
    }


    componentDidMount(){
        let temp = window.location.pathname.split('/')
        let trackerId = temp[2];

        axios.get(`http://localhost:3000/constraintItem/${trackerId}`)
        .then((response) => {
            this.setState({
                data: response.data.constraintItemArr, 
                trackerName: response.data.trackerName
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    displayConstraintItems(){
        const displayItems = this.state.data.map((constraint, idx) => {
            return <ConstraintItem key={idx} 
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


    render(){
        return(
            <div>
                <Navbar/>
                <ItemIndexHeader trackerName={this.state.trackerName}/>
                {this.displayConstraintItems()}
                {this.state.newConstraints}
                <input type="button" class="add-constraint-button" name="button" value="Add a Constraint" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default ConstraintItemIndex;