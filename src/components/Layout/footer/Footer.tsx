import React from 'react'
import styled from 'styled-components'
import theme from 'assets/theme/theme'

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    padding: 1rem 0 1rem 0;

    .copyright {
        
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <h3>
                Follow me on Social Media
            </h3>
            <div className='copyright'>
                Copyright © 2023 Nikki Rae 
            </div>
        </StyledFooter>
    )
}

export default Footer