import { useState } from "react"


const Button = ( {setCount} ) => {
  const [ count, setCount] = useState (0)

     return (
        <div>
        <button>
           onClick={ () => setCount (count+1) }
          agregar al carrito </button>
         </div>
    )
}

export default Button 
