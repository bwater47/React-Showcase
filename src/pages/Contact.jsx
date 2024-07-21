import "../Styles/Contact.css";
import { useForm } from "../components/Form";

export default function Contact() {
  const { formData, errorMessages, handleInputChange, handleInputBlur, handleFormSubmit } = useForm();

  return (
    <div className="contact-container text-center">
      <h1>Hello {formData.name || "Friend"}!</h1>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <input
          className="contact-input"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="email"
          placeholder="Email"
        />
        {errorMessages.email && <p className="error-text">{errorMessages.email}</p>}
        
        <input
          className="contact-input"
          value={formData.name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="Name"
        />
        {errorMessages.name && <p className="error-text">{errorMessages.name}</p>}
        
        <textarea
          className="contact-textarea"
          value={formData.message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder="Message"
          rows="5"
        />
        {errorMessages.message && <p className="error-text">{errorMessages.message}</p>}
        
        <button className="contact-button" type="submit">Submit</button>
      </form>
    </div>
  );
}
