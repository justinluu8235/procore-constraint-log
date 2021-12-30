import React, {Component} from 'react';
import Navbar from './Navbar';
import TrackersHeader from './TrackerIndex/TrackersHeader';
// import TrackerTable from '../../resources/TrackerTable';
// import NewTrackerTest from '../resources/NewTrackerTest';
// import NewConstraintItemTest from '../resources/NewConstraintItemTest'
import Item from '../resources/Item';

class Test extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                {/* <NewConstraintItemTest/> */}
                <Item/>
            </div>
        )
    }
}


export default Test;