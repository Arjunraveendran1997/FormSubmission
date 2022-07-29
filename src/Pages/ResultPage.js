import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./ResultPage.css"
import thumpsup from '../assets/thumpsUp.png'

function ResultPage() {

  const navigate = useNavigate()
  const { state } = useLocation()
  const { name, email, phonenumber } = state

  const backHandler = () => {
    navigate("/")
  }

  return (
    <div className="Main-container">

      <div className='content-section'>
        <div className='imgSection'>
          <h1 className='successText'>Form Submitted Successfully</h1>
          <img className='imgView' src={thumpsup} alt='thumps-up-img' />
        </div>
        <div className='resultSection'>
          <h1 className='text'>ThankYou <span className='boldText'>{name}</span> for submitting the form.</h1>
          <h1 className='text'> We will update our status in your mail : <span className='boldText'>{email}</span></h1>
          <h1 className='text'>We will contact you in <span className='boldText'>{phonenumber}</span></h1>
        </div>
        <div className='buttonView'>
          <button onClick={backHandler} className='backButton' >Back to Form</button>
        </div>
      </div>

    </div>
  )
}

export default ResultPage