import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import LoadingScreen from './components/LoadingScreen';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <BrowserRouter>
      <CssBaseline />
      {isLoading ? <LoadingScreen /> : <Routing />}
    </BrowserRouter>
  );
};

export default App;
