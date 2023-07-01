import { useLocation } from "react-router-dom"
import AppsJSON from "../apps.json"
import AppCard from "../components/AppCard"
import AppModal from "../components/AppModal"

const ResultsPage = () => {
    const {state} = useLocation()
    const {userAge} = state
    const apps = AppsJSON

    console.log(userAge)
    const test = "AAA"

    return (
    <div className='container'>
        <p>Según tu edad ({userAge} años), éstas son las aplicaciones y servicios web que probablemente usas:</p>
        
        <div className="card-container">
        {
            apps.map(
                app => (
                    // <AppCard key={Math.random()} data={app}/>
                    <AppCard key={app.appName} data={app} />
                )
            )
        }
        </div>

        {/* <AppModal /> */}

    </div>
    )
}

export default ResultsPage
