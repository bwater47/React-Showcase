import  { useState } from "react";
import "../Styles/Contact.css"; // Adjust the import path as needed
import EmailForm from "../components/EmailForm";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="contact-container text-center">
      <EmailForm formData={formData} setFormData={setFormData} />
    </div>
  );
}
