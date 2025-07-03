import React, { useState } from "react";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Inside handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com", otp: otp.join("") }), // replace email dynamically
      });

      const data = await res.json();
      if (res.ok) {
        alert("OTP Verified!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
        <p className="text-sm mb-6 text-gray-600">
          Enter the 4-digit code sent to your email
        </p>
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
