import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Typography, Row, Col, Card } from 'antd';

const { Title } = Typography;

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
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <Card className="w-full max-w-md shadow-lg rounded-lg p-8 bg-white">
        <Title level={2} className="text-center mb-6 text-gray-800">Create Your Account</Title>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Input
              type="text"
              placeholder="Enter your phone number or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </Col>
          <Col span={24}>
            <Button 
              type="primary" 
              onClick={handleSendOTP} 
              className="w-full py-3"
              size="large"
            >
              Send OTP
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SignUp;
