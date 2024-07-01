import React from "react";
import "./Checkpage.css";
import appscreens from "../Images/appscreens.webp";
import { useNavigate } from "react-router-dom";
function Checkpage() {
  const navigate = useNavigate();
  const handlechange = () => {
    navigate("/viewportfolio");
  };
  return (
    <div className="rectangle-parent5">
      <div className="frame-child12" />
      <div className="recent-projects-content">
        <div className="background-items" />
        <div className="recent-projects-title-containe">
          <div className="checkout-our-recent-projects-parent">
            <div className="checkout-our-recent-container">
              <span>{`Checkout our `}</span>
              <span className="recent-projects">Recent Projects</span>
            </div>
            <div className="recent-projects-subtitle-conta">
              <div className="serving-customized-needs1">
                Serving customized needs for start-ups
              </div>
            </div>
          </div>
        </div>
        <div className="devices-apple-iphone-12-mi-parent">
          <div style={{ width: "100%" }}>
            <img src={appscreens} alt="appscreens" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div className="view-portfolio-button-containe">
        <div className="view-portfolio-parent" onClick={handlechange}>
          <div className="view-portfolio">View Portfolio</div>
          <div className="view-portfolio-button-icon-con">
            <img className="vector-icon3" alt="" src="/vector2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkpage;
