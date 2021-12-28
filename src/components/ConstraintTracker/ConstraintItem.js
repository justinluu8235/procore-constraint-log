import React, {Component} from 'react';

class ConstraintItem extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.itemName}
            </div>
        )
    }
}

export default ConstraintItem;