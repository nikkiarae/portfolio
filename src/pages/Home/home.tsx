import React from 'react'
import style from 'styled-components'

const HomeContainer = style.div`
    height: 10rem;
    background: red;
`


const Home = () => {
    return (
        <HomeContainer>
            home
        </HomeContainer>
    )
}

export default Home