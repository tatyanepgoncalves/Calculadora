import React, { useState } from 'react';
import Display from './components/Display/Display';
import Keypad from './components/Keypad/Keypad';
import "./styles/App.scss";

const App: React.FC = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    if (!isNaN(Number(value)) || value === '.') {
      setCurrentValue((prev) =>
        prev === '0' && value !== '.' ? value : prev + value
      );
    } else if (value === 'DEL') {
      setCurrentValue((prev) => prev.slice(0, -1) || '0');
    } else if (value === 'RESET') {
      setCurrentValue('0');
      setPreviousValue(null);
      setOperator(null);
    } else if (value === '=') {
      if (previousValue && operator) {
        const result = eval(
          `${previousValue} ${operator === 'x' ? '*' : operator} ${currentValue}`
        );
        setCurrentValue(String(result));
        setPreviousValue(null);
        setOperator(null);
      }
    } else {
      setOperator(value);
      setPreviousValue(currentValue);
      setCurrentValue('0');
    }
  };

  return (
    <div className="app">
      <Display value={currentValue} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
