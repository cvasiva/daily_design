import { useMemo } from "react";
import "./FrameComponent12.css";

const FrameComponent12 = ({
  yourWebsite,
  expertPartner,
  propWidth,
  propGap,
  propAlignSelf,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propGap, propAlignSelf]);

  return (
    <div className="your-website-expert-partner-parent" style={frameDiv2Style}>
      <h1 className="your-website-expert-container">
        <span>
          <span>{yourWebsite}</span>
          <span className="expert-partner">{expertPartner}</span>
        </span>
      </h1>
      <div className="frame-wrapper37">
        <button className="years-experienced-professional-wrapper">
          <div className="years-experienced-professional1">
            12+ Years Experienced Professionals
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent12;
