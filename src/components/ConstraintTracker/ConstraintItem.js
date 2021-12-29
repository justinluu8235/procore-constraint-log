import React, {Component} from 'react';

class ConstraintItem extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.driver}
                {this.props.itemName}
                {this.props.bICTeam}
                {this.props.bICName}
                {this.props.description}
                {this.props.nextStep}
                {this.props.targetDate}
                {this.props.priorityLevel}
            </div>
        )
    }
}

export default ConstraintItem;