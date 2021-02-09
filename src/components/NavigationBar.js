import React, {Component} from 'react';
import {Link} from "react-router-dom";


class NavigationBar extends Component {
    render() {
        return (
            <div className="bg-white">
                <div className="container">
                    <div className="row">
                        <div className="navbar navbar-expand-sm navbar-light">
                            <div className="navbar-collapse collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/counter-redux">Redux_Counter</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/image-response">Image_Response</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;