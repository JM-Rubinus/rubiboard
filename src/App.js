import React from 'react';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Auth/Signup';
import Deliveries from './pages/Deliveries';
import Verifying from './pages/Verifying';

const App = () => {
  return (
    <>
      <div className="bg-basicDark">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/verifying" element={<Verifying />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
