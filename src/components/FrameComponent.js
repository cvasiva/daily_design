import "./FrameComponent.css";
import Navbar from "./Navbar";

const FrameComponent = () => {
  return (
    <header className="frame-header">
      <div className="rectangle-parent16">
        <div className="frame-child46" />
        <div className="background-frame">
          <div className="background18">
            <div className="free3">FREE*</div>
          </div>
        </div>
        <div className="schedule-a-call-with-design-ma-frame">
          <div className="schedule-a-call3">
            Schedule a Call with Design Manager
          </div>
        </div>
        <div className="ellipse-wrapper2">
          <img
            className="frame-child47"
            loading="lazy"
            alt=""
            src="/ellipse-16626@2x.png"
          />
        </div>
        <div className="connect-now-container">
          <b className="connect-now4">Connect Now</b>
        </div>
        <div className="frame-wrapper32">
          <img className="frame-child48" alt="" src="/group-17074785741.svg" />
        </div>
      </div>
      <Navbar/>
    </header>
  );
};

export default FrameComponent;
