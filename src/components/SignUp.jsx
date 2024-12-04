import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = () => {
    // Simulate sending OTP
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
    console.log(`Sending OTP ${otp} to ${email}`);
    // Navigate to OTP verification page
    navigate('/otp-verification');
  };

  return (
    <div>
      <h1>Sign-Up Page</h1>
      <input
        type="text"
        placeholder="Enter your phone number or email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
    </div>
  );
};
export default SignUp;