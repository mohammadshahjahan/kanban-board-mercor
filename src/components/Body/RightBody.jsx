import "./RightBody.css";
import ig from "../../assests/Group 643.png";
import ig2 from "../../assests/Group 646.png";
import ig3 from "../../assests/Group 647.png";
import ig4 from "../../assests/Group 617.png";
import Board from "./board";

const RightBody = () => {
  return (
    <div className="right-body">
      <div className="div-one">
        <div className="div1">
          <span className="right-body-text">Mobile App</span>
          <img src={ig} alt="error" />
        </div>
        <img src={ig2} alt="error" />
      </div>
      <div className="div-two">
        <img src={ig3} alt="error" className="imagy" />
        <img src={ig4} alt="error" className="imagy2" />
      </div>
      <Board className="board" />
    </div>
  );
};
export default RightBody;
