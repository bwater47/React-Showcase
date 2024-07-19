import '../Styles/Form.css';
import { useForm } from './UI/useForm.jsx';

export default function Form() {
  const { formData, errorMessage, handleInputChange, handleFormSubmit } = useForm();

  return (
    <div className="container text-center">
      <h1>Hello {formData.name}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={formData.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={formData.message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
