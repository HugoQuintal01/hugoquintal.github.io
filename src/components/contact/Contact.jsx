import React from 'react'
import './contact.css'
import { useState } from "react";

const Contact = () => {

const [inputFirstNameValue, setFirstNameValue] = useState("");
const [inputLastNameValue, setLastNameValue] = useState("");
const [inputEmailValue, setEmailValue] = useState("");
const [inputTextAreaValue, setTextAreaValue] = useState("");
const [checkBoxTerms, setCheckBoxTerms] = useState("");

let getTrue = false

function setClickSubmit(){
    console.log('You clicked submit.');
}

function getDisplayStyle() {
  return inputTextAreaValue.length > 0 ? 'block' : 'none';
}

function getDisplayStyleEmail() {
  return inputEmailValue.length > 0 ? 'block' : 'none';
}

if(checkBoxTerms === true){
  getTrue = false
}
else{
  getTrue = true
}

  return (
    <div className='letsContact'>
      <div className='titleContact'>
        <div>
          
        </div>
       <div>
        <h3>Contact <span className='yellow'>Me</span></h3>
       </div>
      </div>
      <div className='leftDiv'>
        <input id='firstNameInput' type="text" placeholder='First Name' onChange={(evt) => setFirstNameValue(evt.target.value)} value={inputFirstNameValue}/>
        <input id='lastNameInput' type="text" placeholder='Last Name' onChange={(evt) => setLastNameValue(evt.target.value)} value={inputLastNameValue}/>
        <input id='emailInput' type="email" placeholder='Email' onChange={(evt) => setEmailValue(evt.target.value)} value={inputEmailValue}/>
        <textarea id='textAreaInput' name="Write something..." cols="100" rows="5" placeholder='Write something...' onChange={(evt) => setTextAreaValue(evt.target.value)} value={inputTextAreaValue}></textarea>
        <div className='termsAndConditions'>
          <input type="checkbox" name="terms" id="terms" onChange={(evt) => setCheckBoxTerms(evt.target.checked)}/>
          <label class="termsLabel" for="terms"> I Agree Terms & Coditions</label><br></br>
        </div>
        <input id='submitInput' type="button" value="Submit" disabled={getTrue} onClick={setClickSubmit} />
      </div>
      <div className='rightDiv'>
        <h2>Hi</h2>
        <h3 className='textNomes'>{inputFirstNameValue} {inputLastNameValue},</h3>
        <p className='textAnswer' style={{display: getDisplayStyleEmail()}}>The answer will be sent as soon as possible to the email:</p>
        <p className='emailResponse'>{inputEmailValue}</p>
        <p className='textBrief' style={{display: getDisplayStyle()}}>I will try to be as brief as possible in answering the following message:</p>
        <p id='newTextArea' style={{display: getDisplayStyle()}}>"{inputTextAreaValue}"</p>
      </div>
    </div>
  )
}

export default Contact