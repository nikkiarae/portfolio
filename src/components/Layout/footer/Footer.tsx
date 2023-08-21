import React from 'react'
import styled from 'styled-components'
import theme from 'assets/theme/theme'

const StyledFooter = styled.div`
    height: 4rem;
    background-color: ${theme.primary};
`

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                Footer
            </div>
        </StyledFooter>
    )
}

export default Footer