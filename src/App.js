import "./App.css";
import LeftTop from "./components/TopBar/leftTop";
import RightTop from "./components/TopBar/rightTop";
import LeftBody from "./components/Body/LeftBody";
import RightBody from "./components/Body/RightBody";

function App() {
  return (
    <div className="App">
      <div className="App2">
        <div className="top-header">
          <LeftTop />
          <RightTop />
        </div>
        <div className="body">
          <LeftBody />
          <RightBody />
        </div>
      </div>
    </div>
  );
}

export default App;
