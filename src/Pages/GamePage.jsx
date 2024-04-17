//GamePage.jsx
import React from 'react'
import { Header } from '../components/Header'
import { Score } from '../components/Score'
import { useNavigate } from 'react-router-dom'


export function GamePage() {
    const navigate = useNavigate()

    const IntroductionPage = () => {
        navigate('/')
    }

    return(
        <div>
            <Header />
            <div className='container'>
                <Score />
            </div>
        <button onClick={IntroductionPage} className='intro-button'>Introduction Page</button>
            
        </div>
    )
}