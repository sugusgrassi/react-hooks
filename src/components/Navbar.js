import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            NavBar
            <br />
            <NavLink className="navLink" exact={true} activeClassName='is-active' to='/'>Intro Hooks</NavLink>
            <NavLink className="navLink" exact={true} activeClassName='is-active' to='/usestate'>UseState</NavLink>
            <NavLink className="navLink" exact={true} activeClassName='is-active' to='/useeffect'>UseEffect</NavLink>
            <NavLink className="navLink" exact={true} activeClassName='is-active' to='/useref'>UseRef</NavLink>
        </div>
    )
}

export default Navbar
