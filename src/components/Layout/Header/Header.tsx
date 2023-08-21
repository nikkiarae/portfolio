import React from 'react';
import { NavLink } from 'react-router-dom'
import style from 'styled-components'

import router from 'constants/router';
import theme from 'assets/theme/theme';

const HeaderContainer = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    padding: 0 2rem;

    ul {
        list-style-type: none; 
        li {
            display: inline;
            > * {
               padding: 2rem;
               color: white; 
               text-decoration: none;
            }
        }
    }
`

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Nikki Rae</h1>
            <nav>
            <ul>
                <li><NavLink to={router.home.url}>{router.home.name}</NavLink></li>
                <li><NavLink to={router.profile.url}>{router.profile.name}</NavLink></li>
                <li><NavLink to={router.portfolio.name}>{router.portfolio.name}</NavLink></li>
            </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header