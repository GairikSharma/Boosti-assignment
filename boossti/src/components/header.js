import React, { useState } from 'react'
import '../styles/header.css'
import Signin from './sign-in';
import Forgetpassword from './foget-password';
import SignUp from './sign-up';

function Header() {
    const [signin, setSignin] = useState(true)
    const [signup, setSignup] = useState(false)
    const [forgetpassword, setForgetpassword] = useState(false)

    const showSignin = () => {
        setSignin(true)
        setSignup(false)
        setForgetpassword(false)
    }
    const showSignup = () => {
        setSignin(false)
        setSignup(true)
        setForgetpassword(false)
    }

    const showForgetpassword = () => {
        setForgetpassword(true)
        setSignin(false)
        setSignup(false)
    }

    return (
        <>
            
            <div className="header">
                <div className="header-child">
                    <div className="signin" onClick={showSignin}>
                        SIGN-IN
                    </div>
                    <div className="sign-up" onClick={showSignup}>
                        SIGN-UP
                    </div>
                </div>
            </div>
            <br />
            
            {
                signin && <Signin />
            }
            {
                signup && <SignUp />
            }
            {
                forgetpassword && <Forgetpassword />
            }
        </>
    )
}

export default Header