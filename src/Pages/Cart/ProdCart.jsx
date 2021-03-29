import React from 'react'
import {Link} from 'react-router-dom'


const ProdCart = ({name, price, qty, size, total}) => {

    console.log(name)

    return (
        <div className = "ProdCart">
            <h3>{name}</h3>
            {qty}
            <br/>
            {size}
            <br/>
            ${total}
        </div>
    )
}

export default ProdCart
