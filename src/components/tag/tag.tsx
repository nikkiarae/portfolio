import React from 'react'
import style from 'styled-components'

const TagContainer = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    padding: 0.1rem 0.5rem;
    border-radius: 0.5rem;
    margin-right: 0.3rem;
    height: 100%;
    .tag {
        margin: 0;
        color: white;
    }
`

interface ITag {
    name: String
}

const Tag = (tag: ITag) => {
    return (
        <TagContainer>
            <h6 className='tag'>{tag.name}</h6>
        </TagContainer>
        
    )
}

export default Tag