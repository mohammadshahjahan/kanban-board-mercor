import "./leftTop.css";
import logo from "../../assests/colorfilter.png";
import logo2 from "../../assests/gropu639.png";
const LeftTop = () => {
  return (
    <div className="box1">
      <span className="left-corner">
        <img src={logo} alt="error" className="colorfilter" />
        <span className="text-span">
          <strong>Project M.</strong>
        </span>
      </span>
      <span className="left-right-image">
        <img src={logo2} alt="erroe" className="logo2" />
      </span>
    </div>
  );
};

export default LeftTop;
