import React from 'react'

function Form() {

  return (
    <>
        <form>
          <div className="formContainer" id="formScale">
            <label for="name" className="formTitles green">NAME</label>
             <input
              name="name"
            required/> 
            <label for="name" className="formTitles blue">EMAIL</label>
             <input
            name="email"
            required/>     
            <label for="message" className="formTitles purple">MESSAGE</label>
             <textarea
            name="message"
            required/>
         <div >
          </div>
          <div className="buttonWrapper">
          <button id='submit-btn'>SUBMIT</button>
          </div> 
          </div>
        </form>
    </>
  )
}

export default Form