import React from 'react'
import style from 'styled-components'
import { PortfolioItem } from 'data/portfolioData'
import Tag from 'components/tag/tag'

const CardContainer = style.div`
    display: flex;
    flex: 1;
    justify-content: center;
    .card {
        width: 90%;
        background: #fff;
        border: 1px solid #ccc;
        transition: 0.3s;
    }

    .card-body {
        padding: 1rem;
      }
    
    .card:hover {
        transform: scale(1.1);
        box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
    }
    .card-body .btn:hover {
        transform: scale(1.1);
    }

    .card-image {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        filter: contrast(70%);
        &::before {
          content: "";
        display: block;
          padding-top: 56.25%; // 16:9 aspect ratio
        }
        @media(min-width: 40rem) {
          &::before {
            padding-top: 66.6%; // 3:2 aspect ratio
          }
        }
      }

    .card-image--fence {
     background-image: url(https://unsplash.it/800/600?image=59);
    }

    .tags {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        height: 2rem;
    }
`

const PortfolioCard = (portfolioItem: PortfolioItem) => {
    return (
        <CardContainer>
            <div className="card">
                <div className='card-header'>
                    <div className="card-image card-image--fence"></div>
                </div>
                <div className='card-body'>
                    <h2>{portfolioItem.title}</h2>
                    <div className="tags">
                        { portfolioItem.frameworks.map((fw, idx) => {
                            return (
                                <Tag key={idx} name={fw} />
                            )
                        })}
                        { portfolioItem.software.map((sw, idx) => {
                            return (
                                <Tag key={idx} name={sw} />
                            )
                        })}
                    </div>
                    <p>{portfolioItem.description}</p>
                </div>
            </div>
        </CardContainer>
    )
}

export default PortfolioCard