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

                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <a class="navbar-item">
                                    Rankings
                                </a>
                                <a class="navbar-item" title="calendarLink">
                                    Calendar
                                </a>
                                <a class="navbar-item">
                                    Player
                                </a>
                                <a class="navbar-item">
                                    News & Media
                                </a>
                                <a class="navbar-item">
                                    Match Centre
                                </a>
                                <a class="navbar-item" title="chinese-translation">
                                    中文
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}


export default Navbar;