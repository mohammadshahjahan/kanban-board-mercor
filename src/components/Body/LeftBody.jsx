import "./LeftBody.css";
import cat from "../../assests/category.png";
import mes from "../../assests/message.png";
import task from "../../assests/task-square.png";
import user from "../../assests/profile-2user.png";
import set from "../../assests/setting-2.png";
import sq from "../../assests/add-square.png";
import ep19 from "../../assests/Union.png";
import lamp from "../../assests/lamp-on.png";

const LeftBody = () => {
  return (
    <div className="box3">
      <div className="left1">
        <div>
          <img src={cat} alt="error" />
          <span>Home</span>
        </div>
        <div>
          <img src={mes} alt="error" />
          <span>Messages</span>
        </div>
        <div>
          <img src={task} alt="error" />
          <span>Task</span>
        </div>
        <div>
          <img src={user} alt="error" />
          <span>Members</span>
        </div>
        <div>
          <img src={set} alt="error" />
          <span>Setting</span>
        </div>
      </div>
      <hr />
      <div className="left2">
        <div className="prj">
          <span>MY PROJECTS</span>
          <img src={sq} alt="error" />
        </div>
        <div>
          <ul className="bac">
            <li className="l1">
              <span>Mobile App</span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="l2">
              <span>Website Redesign</span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="l3">
              <span>Design System</span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="l4">
              <span>Wire Frames</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="union">
        <img
          src={ep19}
          alt="error"
          style={{ width: 160, height: 180 }}
          className="one"
        />
        <img src={lamp} alt="error" className="two" />
        <div className="msg">
          <strong>Thoughts Time</strong>
          <span>
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </span>
          <button>
            <strong>Write a message</strong>
          </button>
        </div>
      </div>
    </div>
  );
};
export default LeftBody;
