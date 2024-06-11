import React from 'react';
import { useState } from 'react';
import AppRoutes from './routes';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer/>
      <AppRoutes/>
    </>
  );
}

export default App;