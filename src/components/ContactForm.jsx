import React, { useState } from "react";
import '../styles/ContactForm.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");


  function handleChange(e) {
    const { name, value } = e.target;


    if(name === "phone"){
        const onlyNumbers = value.replace(/\D/g, "").slice(0,10);
        
        setFormData((prev)=>({
            ...prev,
            phone: onlyNumbers
        }))


        setErrors((prev)=>({
            ...prev,
            phone: ""
        }))
        return;
        
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newError = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    // Name Validation
    if (formData.name.trim() === "") {
      newError.name = "Name is required";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email.trim() === "") {
      newError.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "Please enter a valid email";
    }

    // Phone Validation
    if (formData.phone.trim() === "") {
      newError.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newError.phone = "Phone number must be 10 digits";
    }

    // Subject Validation
    if (formData.subject.trim() === "") {
      newError.subject = "Subject is required";
    }

    // Message Validation
    if (formData.message.trim() === "") {
      newError.message = "Message is required";
    } else if (formData.message.length > 500) {
      newError.message = "Message cannot exceed 500 characters";
    }

    // Set Errors
    setErrors(newError);

    // Stop if any error exists
    if (Object.values(newError).some((error) => error !== "")) {
      return;
    }

    // Success
    console.log(formData);
    setSuccessMessage("Your message has been sent successfully!");

    // Reset Form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setErrors({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <div className="error-msg">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <div className="error-msg">{errors.email}</div>}
        </div>

       <div className="form-group">
  <label>Phone</label>

  <div className="phone-input">
    <span className="country-code">+91</span>

    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="9876543210"
    />
  </div>

  {errors.phone && (
    <div className="error-msg">{errors.phone}</div>
  )}
</div>

        {/* Subject */}
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
          />
          {errors.subject && (
            <div className="error-msg">{errors.subject}</div>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
          />
          {errors.message && (
            <div className="error-msg">{errors.message}</div>
          )}
        </div>

        <button type="submit">Send Message</button>

        {successMessage && (
         <div className="success-msg">
          {successMessage}
        </div>
      )}
      </form>
    </div>
  );
}

export default Contact;