//GamePage.jsx
import React from 'react'
import { Header } from '../components/Header'
import { Score } from '../components/Score'
import { Link } from 'react-router-dom'

export function GamePage() {
    return(
        <div>
            <Header />
            <div className='container'>
                <Score />
            </div>
            <Link to="/">Back to Introduction</Link>
        </div>
    )
}