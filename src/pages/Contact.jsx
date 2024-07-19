import Form from '/src/components/Form.jsx';

export default function Contact() {
  const { formData, handleInputChange, handleFormSubmit } = Form();

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
      <section>
        <h2>Other Ways to Contact Us</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: yourlinkedinprofile</p>
      </section>
    </div>
  );
}