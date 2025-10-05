import "./App.css";
import { SquaresEcho } from "square-echo";
import Work from "./components/Work";
import About from "./components/About";
import Status from "./components/Status";

function App() {
  return (
    <div className="main">
      {/* <SquaresEcho whiteBackground={false} zIndex={1} length={24} /> */}
      <div className="port">
        <h1>
          Louise Fraser{" "}
          <span className="grey">
            is an engineer <span className="ovo">&</span> designer
          </span>
        </h1>
        <div className="content">
          <div className="left">
            <div className="top box">
              <About />
            </div>
            <div className="bottom box">
              <Status />
            </div>
          </div>
          <div className="right box">
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
