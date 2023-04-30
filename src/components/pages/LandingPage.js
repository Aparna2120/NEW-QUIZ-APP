import React from 'react'
import { Link } from 'react-router-dom'
import quiz from "../../assets/images/quiztime.png"
import '../../App.css'

export default function LandingPage() {
    return (
        <>
        
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="buttons text-center">
                        <Link to="/login">
                            <button className="primary-button">log in</button>
                        </Link>
                        <Link to="/register">
                            <button className="primary-button" id="reg_btn"><span>register </span></button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
        <img src={quiz} alt="" className='quiz' />
        </>
    )
}
