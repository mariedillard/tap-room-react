import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div>
            <h1>Heaven & Hops</h1>
            <Link to="/">Home</Link> | <Link to="/beers">Beers</Link> | <Link to="/about">About</Link> 
        </div>
    );
}

export default Header;