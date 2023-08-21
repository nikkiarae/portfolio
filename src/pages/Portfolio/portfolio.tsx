import React from 'react'
import style from 'styled-components'
import theme from 'assets/theme/theme'

import portfolioData from 'data/portfolioData'
import PortfolioCard from 'components/portfolioCard/portfolioCard'

const PortfolioContainer = style.div`
    background: ${theme.background};
    color: ${theme.text.secondary};
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
    padding: 50px;
`

const Portfolio = () => {
    return (
        <PortfolioContainer>
            {portfolioData.map((item, idx) => {
                return (
                    <PortfolioCard 
                        key={idx}
                        title={item.title} 
                        description={item.description} 
                        frameworks={item.frameworks} 
                        software={item.software} 
                    />
                )
            })}
        </PortfolioContainer>
    )
}

export default Portfolio