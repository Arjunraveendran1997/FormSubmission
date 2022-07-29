import React, { useState } from 'react'
import './Formpage.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom'
import ImageUploading from 'react-images-uploading';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase-config';




function FormPage() {
  const navigate = useNavigate();
  const [rangeValue, setRangeValue] = useState("18")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [gender, setGender] = useState("")
  const [intrest, setIntrest] = useState("")
  const [difficult, setDifficult] = useState("")
  const [commentInput, setCommentInput] = useState(false)
  const [isError, setIsError] = useState(false)
  const [images, setImages] = useState([]);
  const [addUser, setAddUser] = useState([])
  const maxNumber = 69;
  const usersCollectionRef = collection(db, "FormUser")


  const imglength = images.length

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };


  // dropdown values
  const options = [
    'Below 5 Lakhs', '5 Lakhs to 10 Lakhs', '10-15 Lakhs', 'Above 15 Lakhs'
  ];
  const defaultOption = options[0];

  // checking function




  const submitHandler = (e) => {
    e.preventDefault();
    const createUser = async () => {
      const data = await addDoc(usersCollectionRef, { name: name !== "", email: (email !== ""), phonenumber: (number !== "") })
      setAddUser(data)
      console.log(addUser)
    }

    if (name.length === 0 || email.length === 0 || number.length === 0 || gender === "" || intrest === ""
      || difficult === "" || imglength === 0 || !commentInput) {
      setIsError(true)

    } else {
      navigate("/result", { state: { name: name, email: email, phonenumber: number } })

    }
    createUser()
  }


  // Slider Functions
  const rangeValueChangeHandler = (event) => {
    setRangeValue(event.target.value)
  }

  const errorPageHandler = () => {
    navigate("/error")
  }



  return (
    <div className='container'>
      <div className='title-div'>
        <h1 className='title'>Fill the Form</h1>
      </div>

      <div className='form-container'>
        <form className='form-section' onSubmit={submitHandler} >

          <div className='input-div'>
            <div className='sub-first-div'>
              <label className='label-section'>Name:</label>
            </div>
            <div className='sub-second-div'>
              <input
                className='input-box'
                name="name"
                placeholder='Enter your name'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {isError && name.length === 0 ? <p className='errorText'>Please enter your Name</p> : ""}

            </div>
          </div>

          <div className='input-div'>
            <div className='sub-first-div'>
              <label className='label-section'>Email:</label>
            </div>
            <div className='sub-second-div'>
              <input className='input-box'
                name='email'
                placeholder='enter your Email'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {isError && email.length === 0 ? <p className='errorText'>Please enter your Email</p> : ""}

            </div>
          </div>


          <div className='input-div'>
            <div className='sub-first-div'>
              <label className='label-section'>Phone Number:</label>
            </div>
            <div className='sub-second-div'>
              <input className='input-box'
                placeholder='enter your phone number'
                name='phonenumber'
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)} />
              {isError && number.length === 0 ? <p className='errorText'>Please Enter your Number</p> : ""}
            </div>

          </div>

          <div className='input-div'>
            <div className='sub-first-div'>
              <label className='label-section'>Age:</label>
            </div>
            <div className='range'>
              <div className='field'>
                <input id="typeinp" type="range" min="18" max="32" value={rangeValue} step="1" onChange={rangeValueChangeHandler} />
              </div>
              <div className='slider-value'>
                <span>{rangeValue}</span>
              </div>

            </div>
          </div>

          <div className='input-div'>
            <div className='sub-first-div'>
              <label className='label-section'>Gender:</label>
            </div>
            <div className='sub-second-div'>
              <input className='input-radio'
                type="radio"
                value="Male"
                name="gender"
                onChange={() => setGender("Female")}
              />
              <span className='radio-text'>Male</span>
              <input className='input-radio'
                type="radio"
                value="Female"
                name="gender"
                onChange={() => setGender("Female")}
              />
              <span className='radio-text'>Female</span>
              <input className='input-radio'
                type="radio"
                value="Other"
                name="gender"
                onChange={() => setGender("Female")}
              />
              <span className='radio-text'>Other</span>
              {isError && gender === "" ? <p className='errorGenderText'>Please select any</p> : ""}
            </div>

          </div>

          <div className='input-div'>
            <div className='sub-first-div'>
              <label className='label-section'>Interest:</label>
            </div>
            <div className='sub-second-div' >
              <input className='input-radio'
                type="checkbox" name="topping" value={intrest}
                onChange={() => setIntrest("Health")}
              /><span className='radio-text'>Health</span>
              <input className='input-radio'
                type="checkbox" name="topping" value="Finance"
                onChange={() => setIntrest("Finance")}
              /><span className='radio-text'>Finance</span>
              <input className='input-radio'
                type="checkbox"
                name="topping" value="Technology"
                onChange={() => setIntrest("Technology")}
              /><span className='radio-text'>Technology</span>
              <input className='input-radio'
                type="checkbox" name="topping" value="Music"
                onChange={() => setIntrest("Music")}
              /><span className='radio-text'>Music</span>
              {isError && intrest === "" ? <p className='errorIntrestText'>Please select any</p> : ""}

            </div>
          </div>

          <div className='input-div'>
            <div className='sub-first-div'>
              <label className='label-section'>Income:</label>
            </div>
            <div className='sub-second-div'>
              <Dropdown className='myClassName' options={options} value={defaultOption} placeholder="Select an option" />
            </div>
          </div>

          <div className='input-div'>
            <div className='sub-first-div'>
              <label className='label-section'>Difficulty:</label>
            </div>
            <div className='sub-second-div' >
              <input className='input-radio'
                type="radio"
                value="Easy"
                name="Difficulty"
                onChange={() => setDifficult("Easy")}
              />
              <span className='radio-text'>Easy</span>
              <input className='input-radio'
                type="radio"
                value="Moderate"
                name="Difficulty"
                onChange={() => setDifficult("Moderate")}
              />
              <span className='radio-text'>Moderate</span>
              <input className='input-radio'
                type="radio"
                value="Difficult"
                name="Difficulty"
                onChange={() => setDifficult("Difficult")}
              />
              <span className='radio-text'>Difficult</span>
              {isError && difficult === "" ? <p className='errorDifficultyText'>Please select any</p> : ""}

            </div>
          </div>

          <div className='input-div'>
            <div className='sub-first-div'>
              <label className='label-section'>Other Comments:</label>
            </div>
            <div className='sub-second-div'>
              <textarea className='inputAreafield'
                name='comments'
                placeholder='Your comments here...'
                type="textarea"
                onChange={() => setCommentInput(true)} />
              {isError && !commentInput ? <p className='errorAreaText'>Please add a proof</p> : ""}
            </div>

          </div>

          <div className='input-div'>
            <div className='img-first-div'>
              <label className='label-section'>Upload proof:</label>
            </div>
            <div className='sub-image-div'>
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (

                  <div className="upload__image-wrapper">
                    <button className='uploadButton'
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Upload
                    </button>
                    &nbsp;

                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image['data_url']} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          <button className='addButton' onClick={() => onImageUpdate(index)}>Add</button>
                          <button className='removeButton' onClick={() => onImageRemove(index)}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
              {isError && imglength === 0 ? <p className='errorProofText'>Please add a proof</p> : ""}
            </div>
          </div>

          <div>
            {
              isError && <button className='errorButton' onClick={errorPageHandler} >Go to Error Page</button>
            }

            <button type='submit' value="submit" className='submit-button'>Submit</button>
          </div>



        </form>
      </div>
    </div>
  )
}

export default FormPage