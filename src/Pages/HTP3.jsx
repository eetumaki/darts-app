import ThirdHTP from '../Images/ThirdHTP.png'
import dartBoard from '../Images/dartBoard.png'
import { useNavigate } from 'react-router-dom'

export function HTP3() {
    const navigate = useNavigate()

    const nextPage = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <div className="howtoplay-container">
            <h1 className='header'>How To Play</h1>
            <br />
            <br />
            <p>After clicking "Confirm" you get back the game</p>
            <p>Now you can insert your score by clicking on the dart board to reduce your score from the original points</p>
            <br />
            <div className='howtoplay-image-container'>
            <img src={ThirdHTP} alt='guide'/>
            <img src={dartBoard} alt='dart board' className='dart-board-image'/>
            </div>
            <br />
            <p>On the bottom is a counter that tells you how many full Legs each player has won</p>
            <button onClick={()=>nextPage()} className="btn">Ready To Play</button>
            </div>
            <br />
            
        </div>
    )
}