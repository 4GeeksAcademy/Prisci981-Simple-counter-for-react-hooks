import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import SimpleCounter from './components/SimpleCounter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const one = Math.floor(counter / 1) % 10;
  const two = Math.floor(counter / 10) % 10;
  const three = Math.floor(counter / 100) % 10;
  const four = Math.floor(counter / 1000) % 10;

  return (
    <SimpleCounter
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
