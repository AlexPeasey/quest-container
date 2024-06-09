import logo from "../assets/tooltip__icon.svg"
import "../styles/Tooltip.scss"

interface TooltipPropTypes {
  content: string;
}

const Tooltip: React.FC<TooltipPropTypes> = ({ content }) => {
  return (
    <div className="tooltip">
      <img className="tooltip__icon" src={logo}></img>
      <div className="tooltip__content">{content}</div>
    </div>
  );
};

export default Tooltip;
