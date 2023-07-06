import { useLocation } from "react-router-dom"
import { useState } from "react"
import AppsJSON from "../apps.json"
import AppCard from "../components/AppCard"
import AppModal from "../components/AppModal"

const ResultsPage = () => {
    const {state} = useLocation()
    const {userAge} = state
    const apps = AppsJSON

    const [selectedButton, setSelectedButton] = useState(null); 

    const openModal = (button) => {
        setSelectedButton(button);
    }

    const closeModal = () => {
        setSelectedButton(null);
    }

    return (
    <div className='container'>
        <p>Según tu edad ({userAge} años), éstas son las aplicaciones y servicios web que probablemente usas:</p>
        
        <div className="card-container">
        {
            // Creates all the buttons
            apps.map(
                app => (
                    <AppCard onClick={openModal} key={app.appName} data={app} />
                )
            )
        }
        </div>

        {
            selectedButton && (
                <AppModal onCloseModal={closeModal} modalData={selectedButton}/>
            )
        }

    </div>
    )
}

export default ResultsPage
