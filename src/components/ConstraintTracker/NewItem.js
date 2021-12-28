import React, {Component} from 'react'; 

class NewItem extends Component {
    render(){
        return(
            <div>
                <form action={`http://localhost:3000/constraintItem/${this.props.id}`} method="POST">
                    
                    <label for="itemName"><p>Constraint Name</p></label>
                    <input type="text" name="itemName" />
                    <br></br>
                    <input type="submit" />
                </form>

            </div>
        )
    }
}


export default NewItem;