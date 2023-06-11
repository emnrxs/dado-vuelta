import './About.css'

const About = () => {
    return (
        <>
        <div className="about" onClick={console.log("ABOUT!")}>
            <img src="/src/assets/about.svg" alt="" className='info'/>
        </div>
        </>
    )
}

export default About
