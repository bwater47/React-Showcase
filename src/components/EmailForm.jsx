import { useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";
import Modal from "../components/Modal";

const EmailForm = ({ formData, setFormData }) => {
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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

    const serviceId = "service_gewmj8o"; // Verify this ID
    const templateId = "template_15y9tlk"; // Verify this ID
    const publicKey = "4nJKhzG30rj7k3Fhn"; // Verify this key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Brennan Waterbury",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);

        // Set the modal message and open the modal
        setModalMessage(
          `Hello ${
            formData.name || "Friend"
          }, I will reach out as soon as possible!`
        );
        setIsModalOpen(true);
        // Clear form data after a short delay
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }, 500); // Adjust delay as needed
      })
      .catch((error) => {
        console.error("There was an error sending the email:", error);
        console.log("Error details:", error.response);
      });
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={modalMessage}
      />
      <h1>Hello {formData.name || "Friend"}!</h1>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <input
          className="contact-input"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        {errorMessages.name && (
          <p className="error-text">{errorMessages.name}</p>
        )}

        <input
          className="contact-input"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        {errorMessages.email && (
          <p className="error-text">{errorMessages.email}</p>
        )}

        <textarea
          className="contact-textarea"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          rows="5"
        />
        {errorMessages.message && (
          <p className="error-text">{errorMessages.message}</p>
        )}

        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default EmailForm;
