import React, { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import Confirmation from "./components/Confirmation";
import "./App.css"; // Optional but helps

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phone: "",
    altPhone: "",
    address: "",
    zipcode: "",
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
  });

  const handleSubmit = async () => {
    try {
      await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStep(3);
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="App">
      {step === 1 && (
        <StepOne formData={formData} setFormData={setFormData} nextStep={() => setStep(2)} />
      )}
      {step === 2 && (
        <StepTwo formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      )}
      {step === 3 && <Confirmation />}
    </div>
  );
}

export default App;
