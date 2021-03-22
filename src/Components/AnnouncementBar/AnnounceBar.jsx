import React from 'react'
import './styles.css'

const AnnounceBar = ({text}) => {
    return (
        <div className = "AnnounceBar">
            <a href="/">
                <p>{text}</p>
            </a>
        </div>
    )
}

export default AnnounceBar
