import React from 'react'
import IndivProdCard from '../IndivProdCard/IndivProdCard'
import prod1 from '../../Assets/1st_prod_1.jpg'
import prod2 from '../../Assets/1st_prod_2.jpg'
import prod3 from '../../Assets/1st_prod_3.jpg'
import './styles.css'

import {useSelector} from 'react-redux';

const BestSellers = () => {

    const data = useSelector(reducer => reducer.products)
    console.log(data);
    
    const prods = Object.keys(data)
    console.log(prods)

    return (
        <div className = "BestSellers">
            <div className="heading">
                <h1>best Sellers</h1>
            </div>
            <div className="cards">
                {
                    prods.map((obj, index) => {
                        console.log(obj.thumb)
                        return(
                            <IndivProdCard key = {index} thumb = {`${data[obj].thumb}`} category = {data[obj].category} title = {data[obj].title} price = {data[obj].price} />
                        )
                    })
                }
                {/* <IndivProdCard thumb = {prod1} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
                <IndivProdCard thumb = {prod1} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
                <IndivProdCard thumb = {prod1} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
                <IndivProdCard thumb = {prod1} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
                <IndivProdCard thumb = {prod1} category = "T-SHIRT" title = "Crew Neck" price = {49.99} />
                <IndivProdCard thumb = {prod1} category = "T-SHIRT" title = "Crew Neck" price = {49.99} /> */}
            </div>
        </div>
    )
}

export default BestSellers
