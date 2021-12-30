import React, {Component} from 'react';
import './TrackersHeader.css';

class TrackersHeader extends Component{
    render(){
        return(
            <div class="header-bar">
                
                <div class="settings-icon-container">
                    <span class="settings-icon" data-jss-placeholder="icon" data-qa-tag="rfi-settings"><svg focusable="false" height="16px" width="16px" viewBox="0 0 1024 1024"><path d="M576 624.627c-61.12 35.904-139.648 14.528-174.848-47.616-35.264-62.080-14.272-141.824 46.848-177.664s139.648-14.528 174.848 47.68c35.328 62.016 14.272 141.696-46.848 177.6v0zM951.104 372.403l-145.216-32.768 12.864-41.536 31.808-102.592 22.4-72.32-64.64-38.016-145.28-85.184-151.040 167.296-28.864-32-122.176-135.296-209.92 123.2 54.208 174.976 12.864 41.472-218.112 49.152v246.336l218.112 49.216-12.864 41.472-31.808 102.72-22.4 72.256 209.92 123.2 151.040-167.232 28.864 32 122.176 135.232 64.64-38.016 145.28-85.184-22.4-72.256-31.808-102.72-12.864-41.472 218.112-49.216v-246.336l-72.896-16.384z" fill="currentColor"></path></svg></span>
                </div>

                <h1 class="header-title">CONSTRAINT TRACKERs</h1>

                <div class="tabs-bar">
                    <div class="tab-item">Items</div>
                </div>

                <div class="options-container">
                    
                    <div>
                        <button class="export-button">
                            <span class="export-text">Export</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-qa="ci-CaretDown" data-icon-prop="true" name="CaretDown" focusable="false" ><path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.5H17L12 14.5L7 9.5Z" fill="currentColor"></path></svg>
                        </button>
                    </div>
                    

                    <button class="reports-button">
                        <span class="report-text">Reports</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-qa="ci-CaretDown" data-icon-prop="true" name="CaretDown" focusable="false" ><path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.5H17L12 14.5L7 9.5Z" fill="currentColor"></path></svg>
                    </button>
                    <a href="/newTracker">
                    <button class="create-button-1">
                        <span class="create-index">
                            <span>
                                <svg focusable="false" height="16px" width="16px" viewBox="0 0 1024 1024"><path d="M448 128v319.936h-320v128h320v320.064h128v-320.064h319.936v-128h-319.936v-319.936z" fill="currentColor"></path></svg>
                                <span class="create-text">Create</span>
                            </span>
                        </span>
                        {/* <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="sc-eCstlR dAwGRS"><circle cx="24" cy="24" r="18" ></circle></svg> */}
                    </button>
                    </a>


                </div>


            </div>
        )
    }
}

export default TrackersHeader;