import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './object.css'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import Star from './components/stat'

// import avatar from './assets/user.png'

function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    // let starIcon = contact.isFavorite ? starFilled : starEmpty
    // let arialIcon = contact.isFavorite
    // let arialLabel = contact.isFavorite ? "Remove from favorites" : "Add to favorite"
    function toggleFavorite() {
        console.log("Toggle Favorite");
        setContact((prev) => {
            return {
                ...prev,
                isFavorite: !prev.isFavorite
            }
        })
    }
    return (
        <main>
            <article className="card">
                {/* <img
                    src={FaRegUserCircle}
                    className="avatar"
                    alt="User profile picture of John Doe"
                /> */}
                <FaRegUserCircle className='user' />
                <div className="info">
                    {/* <button
                        onClick={toggleFavorite}
                        aria-pressed={arialIcon}
                        aria-label={arialLabel}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt="empty star icon"
                            className="favorite"
                        />
                    </button> */}
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

export default App
