import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Typography, message } from 'antd';

const { Title } = Typography;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Function to validate email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendOTP = () => {
    if (!isValidEmail(email)) {
      message.error('Please enter a valid email address.');
      return;
    }
    // Simulate sending OTP
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
    console.log(`Sending OTP ${otp} to ${email}`);
    // Navigate to OTP verification page
    navigate('/otp-verification');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <Title level={2} className="text-center mb-6">Sign Up</Title>
        <Input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <Button 
          type="primary" 
          onClick={handleSendOTP} 
          className="w-full"
        >
          Send OTP
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
