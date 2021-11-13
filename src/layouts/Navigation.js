import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';

const list = [
    {
        name: "start",
        path: "/",
        exact: true
    },
    {
        name: "Produkty",
        path: "/products",
        exact: true
    },
    {
        name: "Kontakt",
        path: "/contact",
        exact: true
    },
    {
        name: "Panel Admina",
        path: "/admin",
        exact: true
    },
]

const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}
                     exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;