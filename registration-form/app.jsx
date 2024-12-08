import React from 'react';
import ReactDOM from 'react-dom/client';
import RegistrationForm from '../src/components/registeration/Register';


const App = () => {
  return (
    <div>
      <h1>World Book of Star Records - Registration</h1>
      <RegistrationForm />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
