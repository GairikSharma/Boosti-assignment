import React, { useState } from 'react'
import '../styles/sign-in.css'
import Signin from './sign-in';


function Forgetpassword() {
  const [cancelforgetpassword, setCancelforgetpassword] = useState(false)
  const closeForgetpassword = () => {
    setCancelforgetpassword(true)
  }
  return (
    <>

      {
        cancelforgetpassword ? (
          <Signin />
        ) : (
          
          <div className="sign-in-form-container">
            
            <div className="sign-in-form">
              
              <form>
                <input type="text" className='inp-email' />
                <label className='label-email'>Email*</label>

                <button className="sign-in-btn">GET PASSWORD RESET CODE</button>
                <button className='cancel-btn' onClick={closeForgetpassword}>CANCEL</button>
              </form>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Forgetpassword