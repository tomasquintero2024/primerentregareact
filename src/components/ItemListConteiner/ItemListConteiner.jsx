import React from 'react'
import Button from '../Button/Button'

const ItemListConteiner = (props) => {
    return (
        <div>
            <h2>{props.saludo}</h2>
        <Button setCount={props.setCount} count= {props.count} />
        </div>
    )
}

export default ItemListConteiner

