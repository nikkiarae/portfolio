import React from 'react';
import { NavLink } from 'react-router-dom'

import router from 'constants/router';

const Header = () => {
    return (
        <div>
            <nav>
            <ul>
                <li><NavLink to={router.home.url}>{router.home.name}</NavLink></li>
                <li><NavLink to={router.profile.url}>{router.profile.name}</NavLink></li>
                <li><NavLink to={router.portfolio.name}>{router.portfolio.name}</NavLink></li>
            </ul>
            </nav>
        </div>
    )
}

export default Header