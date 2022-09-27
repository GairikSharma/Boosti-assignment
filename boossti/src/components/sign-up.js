import React from 'react'
import '../styles/sign-up.css'
import {SiGoogletranslate} from 'react-icons/si'
import {AiFillFacebook} from 'react-icons/ai'

function SignUp() {
  return (
    <>
        <div className="sign-in-form-container">
                <div className="sign-in-form">
                    <form>
                        <label className='label-fname'>First name*</label><br />
                        <input type="text" className='inp-fname' placeholder='First name*'/>
                        
                        <label className='label-lname'>Last name*</label><br />
                        <input type="text" className='inp-lname'placeholder='Last name*'/>
                        
                        <label className='labelemail'>Email*</label><br />
                        <input type="email" placeholder='Email*' className='inp-email-signup'/>

                        <button className="submit-btn">SUBMIT</button>
                    </form>
                    
                    <div className="or-main">
                        <div className="or">
                            OR
                        </div>
                    </div>
                    <button className="sign-in-btn-google">  <SiGoogletranslate className='icon-google'/> SIGN IN WITH GOOGLE</button>
                    <button className="sign-in-btn-facebook">  <AiFillFacebook className='icon-facebook'/> SIGN IN WITH FACEBOOK</button>
                </div>
            </div>
    </>
  )
}

export default SignUp