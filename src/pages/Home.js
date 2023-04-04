import React,{useEffect, useState} from 'react'

const Home = () => {
  const [clics, setClics] = useState(0);

  const sumar = () => {
    setClics(clics + 1)
  }

  const restar = () => {
    setClics(clics - 1)
  }

  const restablecer = () => {
    setClics(0)
  }
  
  return (
   <div>
    <h1>Contador: {clics}</h1>
    <button onClick={restar}>Restar -1</button>
    <button onClick={restablecer}>Restablecer</button>
    <button onClick={sumar}>Sumar +1</button>
   </div>
  )
}

export default Home