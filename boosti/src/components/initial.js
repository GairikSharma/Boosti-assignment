import React, {useState} from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import Header from './header'

function Initial() {
    const [modal, setModal] = useState(false)
    const showModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    
    return (
        <>
            <div className="initial-content">
                <h1>Please Sign in to access this page!</h1>
                <button className="signIn" onClick={showModal}>SIGN IN</button>
            </div>
            {
        modal && (
          <div className="modal-container">
            <div className="content">
              <button className="close-btn" onClick={closeModal}> <VscChromeClose style={{ color: "white", marginRight: "5px" }} /> CLOSE</button><br />
              <br />
              <hr />
              <Header />
            </div>
          </div>
        )
      }
        </>
    )
}

export default Initial