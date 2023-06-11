import { useState } from "react";
import './Age.css'
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";


const Age = () => {
    const [age, setAge] = useState(13)
    const [goToResults, setGoToResults] = useState(false)

    const maxAge = 41
    const minAge = 12
    
    if (age > maxAge) {setAge(maxAge)}    
    if (age < minAge) {setAge(minAge)}
    
    
    const navigate = useNavigate()
    if (goToResults) {
        navigate('/dado-vuelta/results', { state: { userAge: age} })
        // return (
        // <Navigate to='/dado-vuelta/results'/>
        // )
    }

    return (
        <>
        <div className="age-holder">
            <p className="age-indicator">{age}</p>
            
            <div className="age-btn-holder">
                {/* Increase Age */}
                {
                    (age >= maxAge) ?
                    <button className="age-btn-disabled">+</button> :
                    <button className="age-btn" onClick={() => {setAge(age + 1)}}>+</button>
                }
                {/* Decrease Age */}
                {
                    (age <= minAge) ?
                    <button className="age-btn-disabled">-</button> :
                    <button className="age-btn" onClick={() => {setAge(age - 1)}}>-</button>
                }
            </div>
            
        </div>
        {
            (age >= maxAge || age <= minAge) ?
            <Alert warning="No contamos con información exacta para estos rangos etarios. Por favor, inserte una edad desde 13 hasta 40 años."></Alert> :
            <button onClick={ () => {setGoToResults(true)}}>Continuar</button>
        }
        </>
    )
}

export default Age
