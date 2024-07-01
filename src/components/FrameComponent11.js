import { useMemo } from "react";
import "./FrameComponent11.css";

const FrameComponent11 = ({
  frameDivAlignSelf,
  frameDivAlignSelf1,
  buttonAlignSelf,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const frameDiv4Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf1,
    };
  }, [frameDivAlignSelf1]);

  const buttonStyle = useMemo(() => {
    return {
      alignSelf: buttonAlignSelf,
    };
  }, [buttonAlignSelf]);

  return (
    <div className="frame-parent71" style={frameDiv3Style}>
      <div className="starts-from-wrapper" style={frameDiv4Style}>
        <div className="starts-from">Starts From*</div>
      </div>
      <button className="button" style={buttonStyle}>
        <div className="button-child" />
        <div className="start-my-design">Start My Design</div>
      </button>
    </div>
  );
};

export default FrameComponent11;
