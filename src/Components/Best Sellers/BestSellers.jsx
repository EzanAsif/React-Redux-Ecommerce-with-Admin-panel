import React from 'react'
import IndivProdCard from '../IndivProdCard/IndivProdCard'
import prod1 from '../../Assets/1st_prod_1.jpg'
import prod2 from '../../Assets/1st_prod_2.jpg'
import prod3 from '../../Assets/1st_prod_3.jpg'
import './styles.css'

const BestSellers = () => {
    return (
        <div className = "BestSellers">
            <div className="heading">
                <h1>best Sellers</h1>
            </div>
            <div className="cards">
                <IndivProdCard thumb = {prod1} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
                <IndivProdCard thumb = {prod2} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
                <IndivProdCard thumb = {prod3} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
                <IndivProdCard thumb = {prod1} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
                <IndivProdCard thumb = {prod2} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
                <IndivProdCard thumb = {prod3} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
            </div>
        </div>
    )
}

export default BestSellers
