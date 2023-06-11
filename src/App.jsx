import { useState } from 'react'
import './App.css'
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <About></About>
    <div className='container'>
      <img src="/src/assets/logo.svg" alt="" />
        <h1>Dado Vuelta</h1>
        <p>Dado Vuelta es una herramienta que te permite ver que es lo que muchas APPs realmente hacen a nuestras espaldas.</p>
        <button>Comenzar</button>
    </div>
    </>
  )
}

export default App
