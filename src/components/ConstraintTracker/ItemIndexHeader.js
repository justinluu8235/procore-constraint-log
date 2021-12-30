import React, {Component} from 'react';
import './ItemIndexHeader.css';

class ItemIndexHeader extends Component{
    render(){
        return(
            <div class="header-bar">
                
                <div class="settings-icon-container">
                    <span class="settings-icon" data-jss-placeholder="icon" data-qa-tag="rfi-settings"><svg focusable="false" height="16px" width="16px" viewBox="0 0 1024 1024"><path d="M576 624.627c-61.12 35.904-139.648 14.528-174.848-47.616-35.264-62.080-14.272-141.824 46.848-177.664s139.648-14.528 174.848 47.68c35.328 62.016 14.272 141.696-46.848 177.6v0zM951.104 372.403l-145.216-32.768 12.864-41.536 31.808-102.592 22.4-72.32-64.64-38.016-145.28-85.184-151.040 167.296-28.864-32-122.176-135.296-209.92 123.2 54.208 174.976 12.864 41.472-218.112 49.152v246.336l218.112 49.216-12.864 41.472-31.808 102.72-22.4 72.256 209.92 123.2 151.040-167.232 28.864 32 122.176 135.232 64.64-38.016 145.28-85.184-22.4-72.256-31.808-102.72-12.864-41.472 218.112-49.216v-246.336l-72.896-16.384z" fill="currentColor"></path></svg></span>
                </div>

                <h1 class="header-title">{this.props.trackerName} Constraint Items</h1>

            </div>
        )
    }
}

export default ItemIndexHeader;