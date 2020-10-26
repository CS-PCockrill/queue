import React, { Component } from 'react';
import './UserDashboard.css';

export default class UserDashboard extends Component {
    render() {
        return(
            <React.Fragment>
                <svg>
                    <symbol id="down" viewBox="0 0 16 16">
                        <polygon points="3.81 4.38 8 8.57 12.19 4.38 13.71 5.91 8 11.62 2.29 5.91 3.81 4.38" />
                    </symbol>
                </svg>
                <header className="page-header">
                    <nav>
                        <a href="#0">
                            <img className="logo" src="" alt="Queue Delivery logo"/>
                        </a>
                        <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
                            <svg width="20" height="20" aria-hidden="true">
                                <use xlinkHref="#down"></use>
                            </svg>
                        </button>
                        <ul className="admin-menu">
                            <li className="menu-heading">
                                <h3>Administrator</h3>
                            </li>
                            <li>
                                <a href="#0">
                                    <svg>
                                        <use xlinkHref="#products"></use>
                                    </svg>
                                    <span>Products</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <svg>
                                        <use xlinkHref="#customers"></use>
                                    </svg>
                                    <span>Customers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <svg>
                                        <use xlinkHref="#orders"></use>
                                    </svg>
                                    <span>Manage Orders</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="page-content">
                    <section className="grid">
                        <article></article>
                        <article></article>
                        <article></article>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}