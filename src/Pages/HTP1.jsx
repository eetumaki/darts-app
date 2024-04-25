import FirstHTP from '../Images/FirstHTP.png'
import { useNavigate } from 'react-router-dom'

export function HTP1() {
    const navigate = useNavigate()

    const nextPage = () => {
        navigate('/HTP2');
    };

    return (
        <div className="container">
            <div className="howtoplay-container">
            <h1 className='header'>How To Play</h1>
            <br />
            <br />
            <p>First choose do you want to play a game from 301 or 501 points</p>
            <p>Then choose how many games you want to play (Best of 3 for example means at least 2 games)</p>
            <br />
            <img src={FirstHTP} alt='guide'/>
            <br />
            <button onClick={()=>nextPage()} className="btn">Next</button>
            </div>
            
            
        </div>
    )
}