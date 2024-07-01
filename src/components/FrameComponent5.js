import { useMemo } from "react";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  frameDivAlignSelf,
  frameDivPadding,
  frameDivWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      padding: frameDivPadding,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf, frameDivPadding, frameDivWidth]);

  return (
    <div className="promise-content-parent" style={frameDivStyle}>
      <div className="promise-content">
        <div className="promise-message">
          <h1 className="we-delivered-our-container4">
            <p className="we-delivered-our3">We Delivered our</p>
            <p className="promises-next-for-you2">
              <span>{`Promises, `}</span>
              <b className="next-for-you2">next For You?</b>
            </p>
          </h1>
          <h1 className="we-delivered-our-container5">
            <p className="we-delivered-our4">We Delivered our</p>
            <p className="promises-next-for-you3">
              <span>{`Promises, `}</span>
              <b className="next-for-you3">next For You?</b>
            </p>
          </h1>
        </div>
        <div className="promise-link">
          <button className="link31">
            <b className="talk-with-team5">Talk with Team</b>
            <div className="link-icon2">
              <img className="svg-icon16" alt="" src="/svg.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="service-container1">
        <div className="service-divider">
          <div className="horizontal-divider3" />
          <div className="horizontal-divider4" />
        </div>
        <div className="service-list">
          <div className="service-items1">
            <div className="service-items-child" />
            <button className="service-entry">
              <div className="website-ui4">{`Website UI `}</div>
            </button>
            <div className="design-types">
              <button className="design-items">
                <div className="graphic-design5">Graphic Design</div>
              </button>
              <button className="design-items1">
                <div className="corporate-newsletter4">
                  Corporate Newsletter
                </div>
              </button>
            </div>
          </div>
          <button className="app-container1">
            <div className="app-name">
              <div className="appsaas-design4">App/SAAS Design</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
