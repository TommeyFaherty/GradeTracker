import React from 'react'; 
import Toolbar from './Toolbar.css'; 

const toolbar = props => (
<header className ="toolbar">
<nav className = "toolbar_nav">
    <div></div>
    <div className="toolbar_logo"> <a href="/"> THE LOGO</a></div>
    <div className ="toolbar_navigation-items">
        <ul>
            <li><a href="/">Test1</a></li>
            <li><a href="/">Test2</a></li>
        </ul>

        </div>
    </nav>

    </header>


); 

export default toolbar;