import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import './Navbar.css';

export const NavBar = () => {
    const [nav, setNav] = useState(false);

    const navButtons = [
        {name: "Stores",
        route: "/#test"},
        {name: "Drive",
        route: "/#test2"},
        {name: "Sell",
        route: "/#test3"},
        {name: "Dashboard",
        route: "/dashboard"}
    ]

    const openNav = () => {
        setNav(!nav);
    }

    return(
        <nav className={`nav ${nav ? 'open' : ''}`}>
            <div className="nav-menu flex-row">
                <div className="nav-brand">
                    <a href="/">Queue</a>
                </div>
                <div className="toggle-collapse">
                    <div className="toggle-icons">
                        <Icon name="bars" onClick={openNav}/>
                    </div>
                </div>
                <div>
                    <ul className="nav-items ">
                        {
                            navButtons.map(button=>{
                                return (
                                    <li className="nav-link">
                                        <a href={button.route}>{button.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <ul className="nav-items">
                        <li className="nav-link">
                            <a href="#">Sign in</a>
                        </li>
                        <li className="nav-link">
                            <a href="/register">Register</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}