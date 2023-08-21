import React from 'react'
import style from 'styled-components'
import theme from 'assets/theme/theme'

const HomeContainer = style.div`
    height: 100%;
    background: ${theme.background};
    color: ${theme.text.secondary};
`


const Home = () => {
    return (
        <HomeContainer>
            home
        </HomeContainer>
    )
}

export default Home