import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component {
    render(){
        return(
            <nav class="navbar"id="navbar">
                    <div class="container" >

                        <div class="home-icon">
                            <svg focusable="false" height="16px" width="16px" viewBox="0 0 1024 1024">
                                <path d="M640 1024v-298.667c0-70.692-57.308-128-128-128s-128 57.308-128 128v298.667h-384v-512l512-512 512 512v512h-384z" fill="white"></path>
                            </svg>
                        </div>
                        
                        <div class="project-logo">
                            <img class="project-logo-image" src="../../images/project-logo.jpg"></img>
                        </div>

                        <div class="project-select">
                            <div class="project-info">
                                <div class="company-name">Whiting-Turner</div>
                                <div class="project-name">015977 - Bay View</div>
                            </div>
                            <div class="dropdown-container">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="dropdown-svg"><path d="M4 6H12L8 10L4 6Z"  class="dropdown-arrow"></path></svg>
                            </div>
                        </div>

                        <div class="tools-select">
                            <div class="tool-info">
                                <div class="tool-text">Project Tools</div>
                                <div class="tool-name">Constraint Trackers</div>
                            </div>
                            <div class="dropdown-container">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="dropdown-svg"><path d="M4 6H12L8 10L4 6Z"  class="dropdown-arrow"></path></svg>
                            </div>
                        </div>

                        <div class="favorite-bar"> 
                            <div class="star-icon">
                                <svg class="star-svg" focusable="false" height="16px" width="16px" viewBox="0 0 1024 1024"><path d="M512-0.005l120.861 366.692h391.136l-316.436 226.628 120.871 366.695-316.436-226.628-316.433 226.628 120.866-366.695-316.433-226.628h391.136l120.861-366.692z" fill="currentColor"></path></svg>
                            </div>
                            <div class="favrorites-container">
                                <div class="favorite-text">Favorites</div>
                                <nav class="favorites-nav">
                                <div class="favorite-1">
                                    Drawings
                                </div>
                                <div class="favorite-1">
                                    RFIs
                                </div>
                                <div class="favorite-1">
                                   <a class="favorite-1" href="/">Constraint Trackers</a>
                                </div>
                                <div class="favorite-1">
                                    More
                                    <div class="dropdown-container">
                                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="dropdown-svg"><path d="M4 6H12L8 10L4 6Z"  class="dropdown-arrow"></path></svg>
                                    </div>
                                </div>
                            </nav>
                            </div>
                        </div>

                        <div class="search">
                            <div class="search-container">
                                <div class="search-text-container">
                                    <span class="search-text">Search</span>
                                </div>
                                <div class="search-icon">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.16663 6.83333C2.16663 4.25966 4.25963 2.16666 6.83329 2.16666C9.40696 2.16666 11.5 4.25966 11.5 6.83333C11.5 9.407 9.40696 11.5 6.83329 11.5C4.25963 11.5 2.16663 9.407 2.16663 6.83333ZM15 14.1752L11.3308 10.506C12.1533 9.50033 12.6667 8.23333 12.6667 6.83333C12.6667 3.611 10.0545 1 6.83333 1C3.61217 1 1 3.611 1 6.83333C1 10.0557 3.61217 12.6667 6.83333 12.6667C8.23333 12.6667 9.5015 12.1533 10.506 11.3308L14.1752 15L15 14.1752Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 6.83333C0.5 3.33479 3.33609 0.5 6.83333 0.5C10.3306 0.5 13.1667 3.33479 13.1667 6.83333C13.1667 8.19497 12.7206 9.43775 11.9934 10.4614L15.7071 14.1752L14.1752 15.7071L10.4616 11.9935C9.43837 12.7208 8.19469 13.1667 6.83333 13.1667C3.33609 13.1667 0.5 10.3319 0.5 6.83333ZM6.83333 1.5C3.88824 1.5 1.5 3.88721 1.5 6.83333C1.5 9.77946 3.88824 12.1667 6.83333 12.1667C8.1074 12.1667 9.26566 11.7002 10.1892 10.944L10.5395 10.6572L14.1752 14.2929L14.2929 14.1752L10.6574 10.5397L10.9438 10.1895C11.7003 9.26447 12.1667 8.10726 12.1667 6.83333C12.1667 3.88721 9.77842 1.5 6.83333 1.5ZM6.83329 2.66666C4.53577 2.66666 2.66663 4.53581 2.66663 6.83333C2.66663 9.13085 4.53577 11 6.83329 11C9.13082 11 11 9.13085 11 6.83333C11 4.53581 9.13082 2.66666 6.83329 2.66666ZM1.66663 6.83333C1.66663 3.98352 3.98348 1.66666 6.83329 1.66666C9.6831 1.66666 12 3.98352 12 6.83333C12 9.68314 9.6831 12 6.83329 12C3.98348 12 1.66663 9.68314 1.66663 6.83333Z" fill="white"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div class="app-select">
                            <div class="app-info">
                                <div class="app-text">Apps</div>
                                <div class="app-name">Select an App</div>
                            </div>
                            <div class="dropdown-container">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="dropdown-svg"><path d="M4 6H12L8 10L4 6Z"  class="dropdown-arrow"></path></svg>
                            </div>
                        </div>

                        <div class="header-content">
                            <div class="help-icon-container">
                                <span class="help-icon" data-jss-placeholder="icon" data-header="icon-help"><svg focusable="false" height="16px" width="16px" viewBox="0 0 1024 1024"><path d="M650.323 452.845c-9.984 15.104-30.080 37.376-60.416 66.752-21.952 21.376-36.288 39.36-42.816 54.208-6.528 14.784-9.856 36.672-9.856 65.536h-61.248c0-32.832 3.968-59.328 11.712-79.296 7.872-20.096 24.896-43.072 51.264-68.992l27.52-27.2c8.32-7.808 14.912-16.064 19.904-24.448 9.152-14.912 13.76-30.464 13.76-46.528 0-22.4-6.656-41.92-20.032-58.496-13.376-16.512-35.648-24.704-66.688-24.704-38.208 0-64.768 14.144-79.424 42.624-8.192 15.808-12.992 38.656-14.144 68.48h-61.184c0-49.536 14.016-89.408 41.92-119.488 28.032-30.272 66.496-45.312 115.392-45.312 45.184 0 81.344 12.928 108.544 38.656 27.2 25.92 40.768 58.816 40.768 98.944 0 24.384-5.056 44.16-14.976 59.264v0zM474.579 767.981v-71.552h68.544v71.552h-68.544zM512.019-0.019c-282.816 0-512 229.248-512 512 0 282.816 229.184 512 512 512 282.752 0 512-229.184 512-512 0-282.752-229.248-512-512-512v0z" fill="currentColor"></path></svg></span>
                            </div>

                            <div class="alert-icon-container">
                                <span class="alert-icon" data-jss-placeholder="icon" data-header="icon-help"><svg focusable="false" height="16px" width="16px" viewBox="0 0 1024 1024"><path d="M511.968 963.814c-39.232 0-72.256-25.216-84.736-60.096h169.536c-12.48 34.88-45.568 60.096-84.8 60.096v0zM832 662.95v-214.95c0-147.008-124.576-295.002-263.968-321.242 12.224-13.568 19.904-31.168 19.904-50.816 0-41.856-34.048-75.968-75.968-75.968s-75.904 34.112-75.904 75.968c0 19.648 7.616 37.248 19.84 50.816-139.392 26.24-263.904 174.234-263.904 321.242v214.95l-128.032 233.050h300.608c13.952 68.672 74.624 127.974 147.392 127.974 72.832 0 133.44-59.302 147.392-127.974h300.608l-127.968-233.050z" fill="currentColor"></path></svg></span>
                            </div>

                            <div class="core-avatar-container">
                                <div class="avatar-name">JL</div>
                                <div class="avatar-circle"></div>
                            </div>

                        </div>

                        

                    </div>
                </nav>
        )
    }
}


export default Navbar;