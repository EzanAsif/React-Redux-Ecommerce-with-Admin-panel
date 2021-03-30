import React from 'react'
import {Link} from 'react-router-dom'


const ProdCart = ({thumb, name, price, qty, size, total}) => {

    console.log(name)

    return (
        <>
            <div className = "ProdCart">
                <img className = "thumb" src={thumb} alt=""/>
                <div className="details">
                    <h3>{name}</h3>
                    <h4>Quantity : {qty}</h4>
                    <h4>Size : {size}</h4>
                    
                </div>
                <div className="total">
                    <h3>${total}</h3>    
                </div>
            </div>
        </>
    )
}

export default ProdCart
