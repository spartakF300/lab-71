import React from 'react';
import { Nav, NavItem, NavLink} from "reactstrap";
import {NavLink as Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="bg-warning">
            <Nav pills  className="border">
                <NavItem className="mt-3 mb-3 ml-auto">
                    <NavLink tag={Link} to="/" exact >Dishes</NavLink>
                </NavItem>
                <NavItem className="mt-3 mb-3 ">
                    <NavLink tag={Link} to="/orders">Orders</NavLink>
                </NavItem>

            </Nav>
        </div>
    );
};

export default Header;