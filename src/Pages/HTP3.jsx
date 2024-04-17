import ThirdHTP from '../Images/ThirdHTP.png'
import { useNavigate } from 'react-router-dom'

export function HTP3() {
    const navigate = useNavigate()

    const nextPage = () => {
        navigate('/GamePage');
    };

    return (
        <div>
            <div>
            <h1 className='header'>How To Play</h1>
            <br />
            <br />
            <p>After clicking "Confirm" you get back the game</p>
            <p>Now you can insert your score to the input box and click "Confirm" to reduce your score from the original points</p>
            <br />
            <img src={ThirdHTP} alt='guide'/>
            <p>On the bottom is a counter that tells you how many full Legs each player has won</p>
            </div>
            <br />
            <button onClick={()=>nextPage()} className="btn">Ready To Play</button>
        </div>
    )
}