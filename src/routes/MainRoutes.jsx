import React from 'react';
import { Routes, Route } from 'react-router-dom';

import FormPage from '../components/FormPage';
import OTPVerification from '../components/OTPVerification';
import SignUp from '../components/SignUp';


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
};

export default MainRoutes;