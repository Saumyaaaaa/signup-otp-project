import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(90); // 90 seconds countdown
  const [isTimerActive, setIsTimerActive] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isTimerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
  }, [isTimerActive, timer]);

  const handleVerifyOTP = () => {
    // Simulate OTP verification
    if (otp.length === 6) { // Assuming OTP is 6 digits
      console.log(`Verifying OTP: ${otp}`);
      // Navigate to the intermediate design page
      navigate('/form');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  const handleRequestNewCode = () => {
    if (!isTimerActive) {
      // Reset timer and simulate sending a new OTP
      setTimer(90);
      setIsTimerActive(true);
      console.log('Sending new OTP...');
    } else {
      alert('Please wait before requesting a new code.');
    }
  };

  return (
    <div>
      <h1>Verify your Email</h1>
      <p>Please enter the 6-digit code we just sent to s*********a@xyz.com</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOTP}>Verify</button>
      <div>
        {isTimerActive ? (
          <p>Wait {Math.floor(timer / 60)}:{('0' + (timer % 60)).slice(-2)} seconds before requesting a new code.</p>
        ) : (
          <button onClick={handleRequestNewCode}>Request New Code</button>
        )}
      </div>
    </div>
  );
};

export default OTPVerification;