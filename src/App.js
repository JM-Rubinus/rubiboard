import React from 'react';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Auth/Signup';
import Deliveries from './pages/Deliveries';
import Verifying from './pages/Verifying';
import Orders from './pages/Orders';
import Payments from './pages/Payments';
import Reports from './pages/Reports';
import Account from './pages/Account';

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
          <Route path="/orders" element={<Orders />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
