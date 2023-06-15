import './AppCard.css'

const AppCard = ({data}) => {
    return (
    <div className='app-card'>
    
    <img src={data.appLogo} alt={data.appName} content='no' className='logo'/>
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
