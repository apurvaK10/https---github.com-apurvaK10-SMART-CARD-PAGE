import React, { useState } from 'react';
import AdminLogin from '../components/AdminLogin';
import RegistrationForm from '../components/RegistrationForm';
import SignUp from '../components/SignUp';

function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleSignUp = () => setShowSignUp(true);

  if (isLoggedIn) {
    return <RegistrationForm />;
  }

  return (
    <div>
      {showSignUp ? (
        <SignUp onSignUp={() => setShowSignUp(false)} />
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
      {!showSignUp && (
        <button onClick={handleSignUp}>Sign Up</button>
      )}
    </div>
  );
}

export default AdminPage;
