import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './styles/Form.css';
import GoogleButton from 'react-google-button';
import axios from "axios";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  function google(){
    axios.post("http://localhost:5000/auth/google", values).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        alert(res.data.message);
        // navigate("/");
      }
    }).catch(function (err) {
      alert("Error occured: " + err);
      console.log(err);
      // navigate("/sign-up");
    });
  }

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Create Your Account
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <p className='form-input-login'>or</p>
        <br />

        <div className='form-inputs' onClick={google}>
            <GoogleButton style={{ borderRadius: 2, width: 360 }} type="light" />
        </div>

        <span className='form-input-login'>
          Already have an account? Login <a href='Login'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;