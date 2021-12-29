import React, {Component} from 'react'; 

class NewItem extends Component {
    render(){
        return(
            <div>
                <form action={`http://localhost:3000/constraintItem/${this.props.id}`} method="POST">
                    
                    <label for="driver"><p>Driver</p></label>
                    <input type="text" name="driver" />

                    <label for="itemName"><p>Constraint Name</p></label>
                    <input type="text" name="itemName" />

                    <label for="bICTeam"><p>Ball In Court Team</p></label>
                    <input type="text" name="bICTeam" />

                    <label for="bICName"><p>Ball In Court Name</p></label>
                    <input type="text" name="bICName" />

                    <label for="description"><p>Description</p></label>
                    <input type="text" name="description" />

                    <label for="nextStep"><p>Next Steps</p></label>
                    <input type="text" name="nextStep" />

                    <label for="targetDate"><p>Target Date</p></label>
                    <input type="text" name="targetDate" />

                    <label for="priorityLevel"><p>Priority Level</p></label>
                    <input type="text" name="priorityLevel" />



                    <br></br>
                    <input type="submit" />
                </form>

            </div>
        )
    }
}


export default NewItem;