import React from 'react'
// import thumbsDown from '../assets/thumbsDown.png'
import './ErrorPage.css'
import sadEmoji from '../assets/sadEmoji.png'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()

  const backButtonHandler = () => {
    navigate("/")
  }
  return (
    <div className="mainDiv">

      <div className='contentDiv'>
        <div className='img-Section'>
          <h1 className='failText'>Form Submission Failed</h1>
          <img className='imgEmoji' src={sadEmoji} alt='thumps-up-img' />
        </div>
        <div className='resultDiv'>
          <h1 className='responseText'>Please fill all the fields in the Form </h1>
        </div>
        <div className='buttonDiv'>
          <button className='Button' onClick={backButtonHandler} >Back to Form</button>
        </div>
      </div>

    </div>
  )
}

export default ErrorPage