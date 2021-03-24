import React from 'react'
import './styles.css'

const IndivProdCard = ({thumb, category, title, price}) => {
    return (
        <a  href = "/" className = "indivCard">
            <div className="thumb">
                    <img src={thumb} alt={title}/>
            </div>
            <div className="category">
                <h6>{category}</h6>
            </div>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="price">
                ${price}
            </div>
        </a>
    )
}

export default IndivProdCard
