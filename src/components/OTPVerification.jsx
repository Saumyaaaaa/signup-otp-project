// src/components/OTPVerification.jsx
import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from '../assets/logo.svg';

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(90); // Timer in seconds
  const [isTimerActive, setIsTimerActive] = useState(true);
  const navigate = useNavigate(); // Initialize navigate function

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
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      console.log("Verifying OTP:", enteredOtp);
      // Navigate to FormPage on successful verification
      navigate('/form'); // Change this to the correct path for FormPage
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  const handleRequestNewCode = () => {
    if (!isTimerActive) {
      setTimer(90);
      setIsTimerActive(true);
      console.log("New OTP requested...");
    } else {
      alert("Please wait before requesting a new code.");
    }
  };

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Ensure only one character
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 bg-gradient-to-br from-purple-500 to-orange-500 p-6 flex flex-col justify-center">
          <Button
            type="link"
            className="text-white mb-6"
            icon={<ArrowLeftOutlined />}
          >
            Back
          </Button>
          <h1 className="text-4xl font-bold mb-6 text-white">Layout Cards</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cards */}
            {[ /* Card data */ ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white bg-opacity-10 rounded-lg shadow-lg text-white"
              >
                <div className="text-2xl">{item.flag}</div>
                <h2 className="text-lg font-semibold mt-2">{item.country}</h2>
                <p className="text-sm opacity-80">{item.type}</p>
                <p className="text-sm mt-4">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 bg-white p-10 flex flex-col justify-center">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-center mb-2">
            Verify your Email
          </h2>
          <p className="text-sm text-center mb-8">
            Please enter the 6 digit code we just sent to{" "}
            <span className="font-bold">s*********a@xyz.com</span>
          </p>
          {/* OTP Inputs */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {otp.map((digit, index) => (
              <React.Fragment key={index}>
                <Input
                  id={`otp-input-${index}`}
                  className="w-12 h-12 text-center border border-gray-300 text-lg"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                />
                {/* Add dash after the third input */}
                {index === 2 && (
                  <span className="text-lg font-bold">-</span>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Verify Button */}
          <Button
            type="primary"
            className="w-full h-12 bg-red-600 text-white text-lg"
            onClick={handleVerifyOTP}
          >
            Verify
          </Button>
          {/* Timer/Request New Code */}
          <div className="text-center text-sm mt-4">
            {isTimerActive ? (
              <p>
                Wait {Math.floor(timer / 60)}:{("0" + (timer % 60)).slice(-2)}{" "}
                seconds before requesting a new code.
              </p>
            ) : (
              <Button
                type="link"
                className="text-red-500"
                onClick={handleRequestNewCode}
              >
                Request New Code
              </Button>
            )}
          </div>
          <p className="text-xs text-center mt-8 text-gray-500">
            By continuing, you’re agreeing to Nobody's{" "}
            <a href="#" className="text-blue-500">
              Terms of Service
            </a>
            ,{" "}
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>
            , and{" "}
            <a href="#" className="text-blue-500">
              Cookie Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;