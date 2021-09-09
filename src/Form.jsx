import React from "react";

function Form() {
  return (
    <>
      <div className="contact green">
        <img src="contact.png" alt="Contact Us!" />
      </div>
      <form>
        <div className="formContainer" id="formScale">
          <label for="name" className="formTitles red">
            NAME
          </label>
          <input name="name" className="red" required />
          <label for="name" className="formTitles blue">
            EMAIL
          </label>
          <input name="email" className="blue" required />
          <label for="message" className="formTitles purple">
            MESSAGE
          </label>
          <textarea name="message" className="purpleDeeper" required />
          <div></div>
          <div className="buttonWrapper">
            <button id="submit-btn">SUBMIT</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
