import React, { useState } from 'react';
import './styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import sgn from './images/signup.png';
const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>

        <div className='form-content-left'>
          <img className='form-img' src={sgn} alt='signup' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default SignUp;