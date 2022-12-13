import React from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css';

const NavLinks = props => {
    return(
        <ul className="nav-links">
            <li>
                <NavLink to='/' >Spots users</NavLink>
            </li>
            <li>
                <NavLink to='/u1/places'>My spots</NavLink>
            </li>
            <li>
                <NavLink to='/places/new'>Add spots</NavLink>
            </li>
            <li>
                <NavLink to='/auth'>Authinticate</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;