import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) tempErrors.email = "Valid email is required";
    if (!formData.phone.match(/^\d{10}$/)) tempErrors.phone = "Valid 10-digit phone number is required";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters long";
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        message: "",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Signup Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" value={formData.message} onChange={handleChange}></textarea>
                {errors.message && <small className="text-danger">{errors.message}</small>}
              </div>
              <button type="submit" className="btn btn-danger w-100">Submit</button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          {submittedData && (
            <div className="card p-4 shadow bg-light">
              <h2 className="text-center mb-4">Submitted Data</h2>
              <pre className="border rounded p-3 bg-white">{JSON.stringify(submittedData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
