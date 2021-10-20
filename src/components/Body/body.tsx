import logo from '../../svgimageFiles/logo.svg';
import topcircle from '../../svgimageFiles/top-circle.svg';
import orangecircle from '../../svgimageFiles/leftOrangeCircle.svg';
import dottedDesign from '../../svgimageFiles/dottedDesign.svg'
import './body.css'

const Body = () => {
    return (
        <div className='bodyDiv' >
            <img src={topcircle} className="topCircle" alt="google developer student club" />
            <div className='bodySubDiv'> 
            <div>
                <h1 className='bodyHead'> Welcome to <br /> GDSC SNU </h1> 
                <p className='bodyText'>Google Developer Student Club (GDSC)  is a Google
                     <br /> Developers program for university students to learn 
                     <br /> web, mobile, and google technologies in a peer-to-peer 
                     <br /> learning environment. 
                </p> 
                <button className='bodyButton' > Join Us</button> 
                <button className='bodyButton' style={{background: 'white'}}> Contact us</button>
                <br />
                <img src={dottedDesign} className="dottedDesign" alt="google developer student club" />

             </div>    
                <img src={logo} className="App-logo" alt="logo" />
                <img src={orangecircle} className="orangeCircle" alt="google developer student club" />
            </div>
        </div>
    )
}

export default Body