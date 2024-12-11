import './Keypad.scss';
import Button from '../Button/Button';

interface KeypadProps {
  onButtonClick: (value: string) => void;
}

const keys = [
  '7', '8', '9', 'DEL',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '.', '0', '/', 'x',
  'RESET', '='
];

const Keypad: React.FC<KeypadProps> = ({ onButtonClick }) => {
  return (
    <div className="keypad">
      {keys.map((key) => (
        <Button
          key={key}
          label={key}
          onClick={() => onButtonClick(key)}
          variant={key === '=' ? 'danger' : key === 'RESET' || key === 'DEL' ? 'secondary' : 'primary'}
        />
      ))}
    </div>
  );
};

export default Keypad;

