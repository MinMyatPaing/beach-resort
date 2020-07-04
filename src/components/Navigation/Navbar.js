import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

import logo from '../../images/logo.svg';

class Navbar extends Component {

    state = {
        showNav: false
    }

    switchShowNav = () => {
        this.setState({showNav: !this.state.showNav});
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/"><img src={logo} alt="Beach Resort Logo"/></Link>
                        <button type="button" className="nav-btn" onClick={this.switchShowNav}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.showNav ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;