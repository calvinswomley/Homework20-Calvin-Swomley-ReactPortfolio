import React, { useState } from 'react';

//import email validation checker
import { validateEmail } from '../../utils/helpers';

const styles = {
  form: {
    margin: '40px'
  },
  formInput: {
    display: 'block',
    marginTop: '5px',
    marginBottom: '5px',
    width: '60%'
  }
}

function Contact() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'fullName') {
      setFullName(inputValue);
    } else {
      setMessageContent(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !fullName) {
      setErrorMessage('Email or full name is invalid');
      return;
    }
    alert(`Thank you ${fullName}. Your email has been sent.`);

    setFullName('');
    setEmail('');
    setMessageContent('');
  };

  return (
    <div>
      <form style={styles.form}>
      <input
          style={styles.formInput}
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="text"
          placeholder="First and Last Name"
        />
        <input
          style={styles.formInput}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email Address"
        />
        <input
          style={styles.formInput}
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