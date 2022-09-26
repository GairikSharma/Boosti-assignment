import React, { useState } from 'react'
import '../styles/sign-in.css'
import { SiGoogletranslate } from 'react-icons/si'
import { AiFillFacebook } from 'react-icons/ai'
import Forgetpassword from './foget-password'

function Signin() {
    const [forgetpassword, setForgetpassword] = useState(false)


    const showForgetpassword = () => {
        setForgetpassword(true)
    }
    const cancelForgetpassword = () => {
        setForgetpassword(false)
    }
    return (
        <>


            {
                forgetpassword ? (
                    <Forgetpassword />
                ) : (
                    <div className="sign-in-form-container">
                        <div className="sign-in-form">
                            <form>
                                <input type="text" className='inp-email' />
                                <label className='label-email'>Email*</label>

                                <input type="password" className='inp-password' />
                                <label className='label-password'>Password*</label>

                                <button className="sign-in-btn">SIGN IN</button>
                            </form>
                            <div className='forgot-password' onClick={showForgetpassword}>Forgot Password?</div>
                            <div className="or-main">
                                <div className="or">
                                    OR
                                </div>
                            </div>
                            <button className="sign-in-btn-google">  <SiGoogletranslate className='icon-google' /> SIGN IN WITH GOOGLE</button>
                            <button className="sign-in-btn-facebook">  <AiFillFacebook className='icon-facebook' /> SIGN IN WITH FACEBOOK</button>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Signin