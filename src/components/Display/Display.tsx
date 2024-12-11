import "./Display.scss";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({value}) => {
  return <section className="display">{value}</section>;
}

export default Display;