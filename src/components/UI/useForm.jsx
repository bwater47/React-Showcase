import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email) || !formData.name) {
      setErrorMessage('Email or name is invalid');
      return;
    } else if (!formData.message) {
      setErrorMessage('Message is invalid');
      return;
    }
    alert(`Hello ${formData.name}, I will reach out as soon as possible!`);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return {
    formData,
    errorMessage,
    handleInputChange,
    handleFormSubmit,
  };
};