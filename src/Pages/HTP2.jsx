import SecondHTP from '../Images/SecondHTP.png'
import { useNavigate } from 'react-router-dom'

export function HTP2() {
    const navigate = useNavigate()

    const nextPage = () => {
        navigate('/HTP3');
    };

    return (
        <div className="container">
            <div className="howtoplay-container">
            <h1 className='header'>How To Play</h1>
            <br />
            <br />
            <p>After clicking "Set Player Names" you get this window</p>
            <br />
            <img src={SecondHTP} alt='guide'/>
            <br />
            <p>After choosing the names for both players click confirm</p>
            <button onClick={()=>nextPage()} className="btn">Next</button>
            </div>
            <br />
            
        </div>
    )
}