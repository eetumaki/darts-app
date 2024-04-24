import ThirdHTP from '../Images/ThirdHTP.png'
import dartBoard from '../Images/dartBoard.png'
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
            <p>Now you can insert your score by clicking on the dart board to reduce your score from the original points</p>
            <br />
            <div className='header'>
            <img src={ThirdHTP} alt='guide'/>
            <img src={dartBoard} alt='dart board' className='dart-board-image'/>
            </div>
            <p>On the bottom is a counter that tells you how many full Legs each player has won</p>
            </div>
            <br />
            <button onClick={()=>nextPage()} className="btn">Ready To Play</button>
        </div>
    )
}