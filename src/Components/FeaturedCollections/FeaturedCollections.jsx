import React from 'react'
import './styles.css'

const FeaturedCollections = () => {
    return (
        <div className = "FeaturedCollections">
            <div className="heading">
                    <h1>Featured Collections</h1>
            </div>
            <div className="collections">
                <div className="collection1">
                    <div className="content">
                        <div className="heading">
                            t-shirts
                        </div>
                        <a href="/">
                            shop now
                        </a>
                    </div>
                </div>
                <div className="collection2">
                    <div className="content">
                        <div className="heading">
                            t-shirts
                        </div>
                        <a href="/">
                            shop now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCollections
