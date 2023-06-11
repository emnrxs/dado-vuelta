import { Navigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useState } from 'react'


const StartPage = () => {
    const [goToAge, setGoToAge] = useState(false)
    
    if (goToAge) {
        return (
        <Navigate to="/dado-vuelta/age"/>
        )
    }

    return (
    <div className='container'>
        <img src={logo} alt="" />
        <h1>Dado Vuelta</h1>
        <p>Dado Vuelta es una herramienta que te permite ver que es lo que muchas APPs realmente hacen a nuestras espaldas.</p>
        <button onClick={() => {setGoToAge(true)}}>Comenzar</button>
    </div>
    )
}

export default StartPage
