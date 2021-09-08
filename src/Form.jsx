import React from 'react'

function Form() {

  return (
    <>
      <form className="formContainer">
          <div className='contact'>
            <h2 className="formNameTitle">YOUR FULL NAME</h2>
            <input
              required />
            <h2 className="formEmailTitle">EMAIL ADDRESS</h2>
            <input
              required />
              <h2 className="formMessageTitle">MESSAGE</h2>
              <textarea
                className="textarea"
                name='message'
                required />
          </div>
          <input />
        </form>
    </>
  )
}

export default Form