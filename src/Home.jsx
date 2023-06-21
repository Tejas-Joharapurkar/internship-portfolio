import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <nav>
                <h2>Ethnus MERN Internship Set2 Task in My-Portfilio</h2>
            </nav>
            <div className='about'>
                <h3>
                    Hello My name is Tejas Joharapurkar and this are all the React Projects for Ethnus MERN Internship Set2
                </h3>
            </div>
            <div className="container">
                <Link to="/App1" className='link'>Color Picker</Link>

                <Link to="/App2" className='link'>Age Calculator</Link>

                <Link to="/App3" className='link'>Calculator</Link>

                <Link to="/App4" className='link'>Record table</Link>

                <Link to="/App5" className='link'>Word Count</Link>
            </div>
        </>
    )
}

export default Home