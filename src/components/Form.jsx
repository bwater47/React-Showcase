import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export const useForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the specific field error when it changes
    setErrorMessages({
      ...errorMessages,
      [name]: "",
    });
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    if (value.trim() === "") {
      errorMessage = "This field is required";
    } else if (name === "email" && !validateEmail(value)) {
      errorMessage = "Invalid email address";
    }

    setErrorMessages({
      ...errorMessages,
      [name]: errorMessage,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let newErrorMessages = {};
    let hasError = false;

    // Validate each field
    if (!formData.name.trim()) {
      newErrorMessages.name = "Name is required";
      hasError = true;
    }
    if (!validateEmail(formData.email)) {
      newErrorMessages.email = "Invalid email address";
      hasError = true;
    }
    if (!formData.message.trim()) {
      newErrorMessages.message = "Message is required";
      hasError = true;
    }

    if (hasError) {
      setErrorMessages(newErrorMessages);
      return;
    }

    alert(`Hello ${formData.name}, I will reach out as soon as possible!`);

    // Clear form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return {
    formData,
    errorMessages,
    handleInputChange,
    handleInputBlur,
    handleFormSubmit,
  };
};
