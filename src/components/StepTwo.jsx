// StepTwo.jsx
import React, { useState } from "react";

const StepTwo = ({ formData, setFormData, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.accountHolder) newErrors.accountHolder = "Account holder name is required";
    
    if (!formData.accountNumber) {
      newErrors.accountNumber = "Account number is required";
    } else if (!/^\d+$/.test(formData.accountNumber)) {
      newErrors.accountNumber = "Only digits allowed";
    }

    if (!formData.ifsc) newErrors.ifsc = "IFSC code is required";
    if (!formData.bankName) newErrors.bankName = "Bank name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = () => {
    if (validate()) {
      handleSubmit();
    }
  };

  return (
    <div className="form-container">
      <h2>Bank Details</h2>

      <input
        type="text"
        placeholder="Account Holder Name"
        value={formData.accountHolder}
        onChange={(e) => setFormData({ ...formData, accountHolder: e.target.value })}
      />
      {errors.accountHolder && <span className="error">{errors.accountHolder}</span>}

      <input
        type="text"
        placeholder="Account Number"
        value={formData.accountNumber}
        onChange={(e) => {
          const val = e.target.value;
          if (/^\d*$/.test(val)) {
            setFormData({ ...formData, accountNumber: val });
          }
        }}
      />
      {errors.accountNumber && <span className="error">{errors.accountNumber}</span>}

      <input
        type="text"
        placeholder="IFSC Code"
        value={formData.ifsc}
        onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
      />
      {errors.ifsc && <span className="error">{errors.ifsc}</span>}

      <input
        type="text"
        placeholder="Bank Name"
        value={formData.bankName}
        onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
      />
      {errors.bankName && <span className="error">{errors.bankName}</span>}

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default StepTwo;
