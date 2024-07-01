import "./InstagramPostMockup1.css";

const InstagramPostMockup1 = () => {
  return (
    <div className="instagram-post-mockup">
      <div className="top-banner">
        <img className="logo-icon" loading="lazy" alt="" src="/logo@2x.png" />
        <b className="interaktell">Interaktell</b>
        <div className="bilbao-spain-wrapper">
          <div className="bilbao-spain">Bilbao, Spain</div>
        </div>
      </div>
      <div className="post-format-dark">
        <div className="hola-this-is-a-text-based-pos-wrapper">
          <b className="hola-this-is-container">
            <p className="hola">Hola,</p>
            <p className="this-is-a">this is a text-based post.</p>
            <p className="blank-line">&nbsp;</p>
            <p className="enjoy">Enjoy!</p>
          </b>
        </div>
      </div>
      <div className="bottom-banner">
        <div className="group-icons">
          <img
            className="bookmarksimple-icon"
            alt=""
            src="/bookmarksimple@2x.png"
          />
          <div className="icon-set">
            <img className="heart-icon" alt="" src="/heart.svg" />
            <img className="chatcircle-icon" alt="" src="/chatcircle.svg" />
            <img
              className="paperplanetilt-icon"
              alt=""
              src="/paperplanetilt.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramPostMockup1;
