import './AppCard.css'

const AppCard = ({data, onClick}) => {

    // This was harder to figure out than it seems...
    const handleClick = () => {
        onClick(data)
    }

    return (
    <div className="app-card" onClick={handleClick}>

    {
        // Only add a logo if the file route exists
        data.appLogo &&
        <img src={data.appLogo} alt={data.appName} content='no' className='logo'/>
    }
    
    <p className='texto'>{data.appName}</p>
    {/* {
        data.appEula.map(
            eula => (
                <p className='texto'>{eula}</p>
                )
                )
            } */}
    
    </div>
    )
}

export default AppCard
