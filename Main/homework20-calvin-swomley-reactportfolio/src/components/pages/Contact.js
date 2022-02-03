import React, { useState } from 'react';
import './style.css';

//import email validation checker
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'fullName') {
      setFullName(inputValue);
    } else {
      setMessageContent(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !fullName) {
      setErrorMessage('Email or full name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    alert(`Thank you ${fullName}. Your email has been sent.`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFullName('');
    setEmail('');
    setMessageContent('');
  };

  return (
    <div>
      <h2>Send Calvin an Email:</h2>
      <form className="form">
      <input
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="text"
          placeholder="First and Last Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email Address"
        />
        <input
          value={messageContent}
          name="messageContent"
          onChange={handleInputChange}
          type="text"
          placeholder="Message Content"
        />
        <button type="button" onClick={handleFormSubmit}>Send</button>
      </form>
  
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;