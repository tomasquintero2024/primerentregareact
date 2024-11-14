import React from 'react'
import "./navBar.css"

const NavBar = ( {count} ) => {
    return (

        <div className= 'flex'>
            <h3> NavBar</h3>
            <CartWidget count ={count}/>
        </div>
        )
}

export default NavBar