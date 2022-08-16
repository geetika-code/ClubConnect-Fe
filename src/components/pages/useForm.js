import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/sign-up", values).then((res) => {
      console.log(JSON.stringify(res));
      // navigate("/");
      
    }).catch(function (err) {
      alert("Error occured: " + err);
      console.log(err);
      // navigate("/sign-up");
    });

    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
