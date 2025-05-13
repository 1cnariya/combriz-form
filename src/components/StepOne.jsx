// StepOne.jsx
import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const StepOne = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.city) newErrors.city = "City is required";

    if (!formData.phone || formData.phone.length < 10)
      newErrors.phone = "Valid phone number is required";

    if (!formData.altPhone || formData.altPhone.length < 10)
      newErrors.altPhone = "Valid alternate number is required";

    if (!formData.address) newErrors.address = "Address is required";

    if (!formData.zipcode) {
      newErrors.zipcode = "Zipcode is required";
    } else if (!/^\d{6}$/.test(formData.zipcode)) {
      newErrors.zipcode = "Zipcode must be 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="form-container">
      <h2>Register Yourself</h2>

      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      {errors.firstName && <span className="error">{errors.firstName}</span>}

      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      {errors.lastName && <span className="error">{errors.lastName}</span>}

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      {errors.city && <span className="error">{errors.city}</span>}

      <div className="phone-container">
        <PhoneInput
          country={"in"}
          value={formData.phone}
          onChange={(phone) => setFormData({ ...formData, phone })}
          inputStyle={{
            width: "100%",
            height: "48px",
            borderRadius: "10px",
            backgroundColor: "#1e293b",
            color: "white",
            border: "1px solid #334155",
          }}
          buttonStyle={{
            backgroundColor: "#1e293b",
            border: "none",
          }}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="phone-container">
        <PhoneInput
          country={"in"}
          value={formData.altPhone}
          onChange={(altPhone) => setFormData({ ...formData, altPhone })}
          inputStyle={{
            width: "100%",
            height: "48px",
            borderRadius: "10px",
            backgroundColor: "#1e293b",
            color: "white",
            border: "1px solid #334155",
          }}
          buttonStyle={{
            backgroundColor: "#1e293b",
            border: "none",
          }}
        />
        {errors.altPhone && <span className="error">{errors.altPhone}</span>}
      </div>

      <textarea
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      ></textarea>
      {errors.address && <span className="error">{errors.address}</span>}

      <input
        type="text"
        placeholder="Zipcode"
        value={formData.zipcode}
        onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
      />
      {errors.zipcode && <span className="error">{errors.zipcode}</span>}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepOne;
