import { useLocation } from "react-router-dom"

const ResultsPage = () => {
    const {state} = useLocation()
    const {userAge} = state

    console.log(userAge)

    return (
    <div className='container'>
        <h1>Results Page</h1>
        <p>User's age is {userAge}</p>
    </div>
    )
}

export default ResultsPage
