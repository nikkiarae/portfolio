import React from 'react'
import style from 'styled-components'
import { PortfolioItem } from 'data/portfolioData'

const CardContainer = style.div`
`

const PortfolioCard = (portfolioItem: PortfolioItem) => {
    return (
        <CardContainer>
            <div className='card-header'>
                <h2>{portfolioItem.title}</h2>
                { portfolioItem.frameworks.map((fw, idx) => {
                    return (
                        <h5 key={idx}>{fw}</h5>
                    )
                })}
                { portfolioItem.software.map((sw, idx) => {
                    return (
                        <h5 key={idx}>{sw}</h5>
                    )
                })}
            </div>
            <div className='card-body'>
                <p>{portfolioItem.description}</p>
            </div>
        </CardContainer>
    )
}

export default PortfolioCard