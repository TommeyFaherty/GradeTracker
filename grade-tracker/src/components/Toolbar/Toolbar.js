import React from 'react';
import Toolbar from './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div></div>
            <div className="toolbar_logo"> <a href="/"> Gracker</a></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><button><a href="/">Home</a></button></li>
                    <li><a href="/">Contact</a></li>
                    <li className="spacer"> <a href="/">Login </a></li>


                </ul>

            </div>
        </nav>

    </header>


);

export default toolbar;