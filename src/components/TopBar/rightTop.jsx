import "./rightop.css";
import logo3 from "../../assests/search-normal.png";
import logo4 from "../../assests/Group640.png";
import logo5 from "../../assests/Group 602.png";
import logo6 from "../../assests/Mask Group.png";
import logo7 from "../../assests/arrow-down.png";
const RightTop = () => {
  return (
    <div className="box2">
      <div className="search-bar">
        <img src={logo3} alt="error" className="logo3" />
        <input placeholder="search for anything..." />
      </div>
      <div className="profile">
        <img src={logo4} alt="error" className="logo4" />
        <span className="right-corner">
          <img src={logo5} alt="error" className="logo5" />
          <span>
            <img src={logo6} alt="error" className="logo6" />
            <img src={logo7} alt="error" className="logo7" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default RightTop;
