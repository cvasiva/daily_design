import { useMemo } from "react";
import "./InstagramPostMockup.css";

const InstagramPostMockup = ({ propLeft, propRight, propBackgroundImage }) => {
  const instagramPostMockupStyle = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  const postFormatDarkStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className="instagram-post-mockup1" style={instagramPostMockupStyle}>
      <div className="top-banner1">
        <img className="logo-icon1" alt="" src="/logo@2x.png" />
        <div className="top-banner-inner">
          <div className="repeated-company-name-parent">
            <div className="repeated-company-name">
              <b className="interaktell1">Interaktell</b>
            </div>
            <div className="bilbao-spain1">Bilbao, Spain</div>
          </div>
        </div>
      </div>
      <div className="post-format-dark1" style={postFormatDarkStyle}>
        <div className="hola-this-is-a-text-based-pos-container">
          <b className="hola-this-is-container1">
            <p className="hola1">Hola,</p>
            <p className="this-is-a1">this is a text-based post.</p>
            <p className="blank-line1">&nbsp;</p>
            <p className="enjoy1">Enjoy!</p>
          </b>
        </div>
      </div>
      <div className="bottom-banner1">
        <div className="group-icons1">
          <img
            className="bookmarksimple-icon1"
            alt=""
            src="/bookmarksimple@2x.png"
          />
          <div className="icon-set1">
            <img className="heart-icon1" alt="" src="/heart.svg" />
            <img className="chatcircle-icon1" alt="" src="/chatcircle.svg" />
            <img
              className="paperplanetilt-icon1"
              alt=""
              src="/paperplanetilt.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramPostMockup;
