import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BsTelephoneFill } from 'react-icons/bs';

import './HeroSection.css';

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxHuK-1TEKLG5jNbRHg40b_raXBuMI0tVXSfz2YimZEh9q-5cfQPbRlRo5yU9vOkB96/exec';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    Fullname: '',
    MobileNumber: '',
    Email: '',
    SchoolName: '',
    CityPincode: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setMessage({ type: 'success', text: 'Form submitted successfully!' });
        setFormData({
          Fullname: '',
          MobileNumber: '',
          Email: '',
          SchoolName: '',
          CityPincode: '',
        });
      } else {
        setMessage({ type: 'error', text: result.message || 'Submission failed.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error submitting form: ' + error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero-section" id="contact">
      <div className="hero-bg">
        <Container className="text-center hero-content">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Empower Your School with Smart ERP
          </h1>

          <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            An all-in-one platform to simplify administration, enhance communication, and improve student outcomes.
          </p>

          <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            Trusted by leading institutions. Designed for schools that care.
          </p>

          <span
            className="badge"
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-duration="800"
          >
            Secure, Fast & Easy to Use – Try it Today!
          </span>
        </Container>

        <div className="enquiry-section">
          <div className="enquiry-container">
            {/* Left: Call Section */}
            <div className="left-section">
              <BsTelephoneFill className="call-icon" />
              <p className="call-text"> Talk to Our Experts Today</p>
              <h3 className="call-number">7042386709</h3>
              <h2>OR</h2>
              <h5>Fill out the enquiry form to schedule a free demo.</h5>
            </div>

            {/* Right: Form Section */}
            <div className="right-section">
              <h4 className="form-title">Enquire Now –</h4>

              <form className="enquiry-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="Fullname"
                  placeholder="Full Name*"
                  value={formData.Fullname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="MobileNumber"
                  placeholder="Mobile Number*"
                  value={formData.MobileNumber}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address*"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="SchoolName"
                  placeholder="School / Institute Name*"
                  value={formData.SchoolName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="CityPincode"
                  placeholder="City / Pincode*"
                  value={formData.CityPincode}
                  onChange={handleChange}
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Enquiry'}
                </button>
                {message && (
                  <p
                    className={`form-message ${
                      message.type === 'success' ? 'success' : 'error'
                    }`}
                    style={{
                      marginTop: '10px',
                      color: message.type === 'success' ? 'white' : 'white',
                    }}
                  >
                    {message.text}
                  </p>
                )}

                <p className="terms">
                  I agree to the School ERP <a href="#">Terms of Use</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
