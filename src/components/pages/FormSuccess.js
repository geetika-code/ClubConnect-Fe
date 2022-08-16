import React from 'react';
import './styles/Form.css';
import suc from './images/img-4.svg';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={suc} alt='success-image' />
    </div>
  );
};

export default FormSuccess;