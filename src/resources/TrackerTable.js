import React, {Component} from 'react';
import './TrackerTable.css'

class TrackerTable extends Component{
    render(){
        return(
            <div>
                <div class="divider"></div>
                <div class="table-container">
                    <div class="table">
                        
                        <div class="table-head-row">
                            <span class="empty-cell"></span>

                            <div class="control-checkbox-container">
                                <label class="control-checkbox-label">
                                    <input class="control-checkbox" type="checkbox"></input>
                                </label>
                            </div>

                            <div class="empty-span"></div>

                            <div class="header-constraint-name">
                                <span class="header-constraint-name-text">Tracker Name</span>
                            </div>

                            <div class="header-constraint-group">
                                <span class="header-constraint-name-text">Group Members</span>
                            </div>


                        </div>

                        <div class="table-body">
                            {/* <div class="table-row">
                                <span class="empty-cell"></span>

                                <div class="checkbox-container">
                                    <label class="checkbox-label">
                                        <input class="checkbox" type="checkbox"></input>
                                    </label>
                                </div>

                                <div class="edit-view-container">
                                    <div class="edit-view-button-wrap">
                                        <a class="edit-view-button">
                                            <span>Edit</span>
                                        </a>

                                        <a class="edit-view-button">
                                            <span>View</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="constraint-name-row-container">
                                    <a class="constraint-name-text">
                                        Constraint Tracker 1
                                    </a>
                                </div>

                                <div class="group-row-container">
                                    <a class="group-text">
                                        Justin (WT), 
                                    </a>
                                </div>

                            </div> */}
                        </div>



                        
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackerTable ;