import React, { Component } from 'react';
import './UserDashboard.css';

export default class UserDashboard extends Component {
    myFunction = () => {
        const navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    render() {
        return(
            <React.Fragment>
                <svg style={{display: "none"}}>
                    <symbol id="down" viewBox="0 0 16 16">
                        <polygon points="3.81 4.38 8 8.57 12.19 4.38 13.71 5.91 8 11.62 2.29 5.91 3.81 4.38" />
                    </symbol>
                </svg>
                <header className="page-header">
                    <nav>
                        <div id="logoContainer">
                            <a href="#0">
                                <img className="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/vertical-logo.svg" alt="Queue logo"/>
                            </a>
                        </div>
                        <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
                            <svg style={{width:"20px", height:"20px", ariaHidden:"true"}}>
                                <use xlinkHref="#down"></use>
                            </svg>
                        </button>
                        <ul className="admin-menu">
                            <li className="menu-heading">
                                <h3>Admin</h3>
                            </li>
                            <li>
                                <a href="#0">
                                    {/* <svg>
                                        <use xlinkHref="#products"></use>
                                    </svg> */}
                                    <span>Pages</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    {/* <svg>
                                        <use xlinkHref="#customers"></use>
                                    </svg> */}
                                    <span>Users</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    {/* <svg>
                                        <use xlinkHref="#orders"></use>
                                    </svg> */}
                                    <span>Trends</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    {/* <svg>
                                        <use xlinkHref="#orders"></use>
                                    </svg> */}
                                    <span>Orders</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    {/* <svg>
                                        <use xlinkHref="#orders"></use>
                                    </svg> */}
                                    <span>Customers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    {/* <svg>
                                        <use xlinkHref="#orders"></use>
                                    </svg> */}
                                    <span>Inventory</span>
                                </a>
                            </li>
                            <li className="menu-heading">
                                <h3>Settings</h3>
                            </li>
                            <li>
                                <a href="#0">
                                    {/* <svg>
                                        <use xlink:href="#settings"></use>
                                    </svg> */}
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    {/* <svg>
                                        <use xlink:href="#options"></use>
                                    </svg> */}
                                    <span>Options</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    {/* <svg>
                                        <use xlink:href="#charts"></use>
                                    </svg> */}
                                    <span>Charts</span>
                                </a>
                            </li>
                            <li>
                                <button className="collapse-btn" aria-expanded="true" aria-label="collapse menu">
                                    {/* <svg aria-hidden="true">
                                        <use xlink:href="#collapse"></use>
                                    </svg> */}
                                    <span>Collapse</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="page-content">
                    <section className="grid">
                        <article></article>
                        <article></article>
                        <article></article>
                        <article></article>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}