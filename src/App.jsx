import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [contador, setContador] = useState(0)

  function add() {
    if(contador === 10){
      toast.success("Numero maximo atingido!")
      return
    }
    setContador(contador + 1)
  }

  function decremento() {
    if(contador === 0) {
      toast.warn("Limite minimo atingido!")
      return
    }
    setContador(contador - 1)
  }

  return (
    <div className="container">
      <ToastContainer autoClose={3000}/>
        <button onClick={add}>+</button>
        <h1>{contador}</h1>
        <button onClick={decremento}>-</button>
    </div>
  )
}

export default App
