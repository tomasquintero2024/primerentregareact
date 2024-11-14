
import './App.css'

import Button from './components/Button/Button'
import NavBar from './components/navBar/navBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'



function App() {
  const [ count, setCount] = useState (0)


  return (
    <>
   <NavBar count={count}/>
   <ItemListConteiner  saludo = "hola" setCount ={setCount}/>
  
   </>
  )
}

export default App
