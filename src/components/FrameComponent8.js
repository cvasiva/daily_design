import { useMemo } from "react";
import "./FrameComponent8.css";

const FrameComponent8 = ({ propWidth, propFlex }) => {
  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div className="frame-parent96" style={frameDiv5Style}>
      <div className="rectangle-parent24">
        <div className="frame-child61" />
        <img className="image-307-icon6" alt="" src="/image-307-12@2x.png" />
        <img
          className="image-1186-icon6"
          loading="lazy"
          alt=""
          src="/image-11861@2x.png"
        />
        <img className="image-307-icon7" alt="" src="/image-307-22@2x.png" />
        <img className="image-1186-icon7" alt="" src="/image-1186-11@2x.png" />
        <img className="image-1186-icon8" alt="" src="/image-1186-21@2x.png" />
        <img
          className="frame-child62"
          loading="lazy"
          alt=""
          src="/vector-30621.svg"
        />
      </div>
      <div className="horizontalborder3">
        <div className="link44">
          <div className="symbol45"></div>
        </div>
        <div className="link45">
          <div className="symbol46"></div>
        </div>
        <div className="link46">
          <div className="symbol47"></div>
        </div>
        <div className="wrapper-link2">
          <img
            className="link-icon4"
            loading="lazy"
            alt=""
            src="/link1@2x.png"
          />
        </div>
        <div className="link47">
          <div className="symbol48"></div>
        </div>
        <div className="link48">
          <div className="symbol49"></div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
