import React from 'react';
import {Link} from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Sahil Khan</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;