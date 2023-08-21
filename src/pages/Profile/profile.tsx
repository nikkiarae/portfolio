import React from "react"
import style from 'styled-components'
import theme from "assets/theme/theme"

import profileData from "data/profileData"

const StyledContainer = style.div`
    height: 100%;
    background: ${theme.background};
    color: ${theme.text.secondary};
`

const Profile = () => {
    return (
        <StyledContainer>
            Profile
        </StyledContainer>
    )
}

export default Profile