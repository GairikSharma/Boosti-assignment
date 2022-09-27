import React, { useState } from 'react'
import '../styles/nav.css'
import Header from './header';
import Initial from './initial';

function Navbar() {
    const [header, setHeader] = useState(false)
    const showHeader = () => {
        setHeader(true)
        setInitial(false)
    }
    const [initial, setInitial] = useState(true)
    
    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <div className="logo-text">
                        Boosti
                    </div>
                </div>
                <button className="sign-in" onClick={showHeader}>
                    SIGNIN
                </button>
            </header>
            {
                header && (
                    <Header />
                )
            }
            {
                initial && (
                    <Initial />
                )
            }
        </>
    )
}

export default Navbar