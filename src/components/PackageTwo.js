import PropTypes from "prop-types";
import "./PackageTwo.css";

const PackageTwo = ({ className = "" }) => {
  return (
    <div className={`package-two ${className}`}>
      <div className="package-two-child" />
      <img
        className="background-shape-icon1"
        loading="lazy"
        alt=""
        src="/rectangle-34628360@2x.png"
      />
      <div className="package-two-content">
        <div className="package-two-header">
          <div className="title-and-body1">
            <div className="title1">
              <p className="complete">Complete</p>
              <p className="social-media-design-kit">
                <span className="social-media-design-kit1">
                  <span className="social-media-design">
                    Social Media Design
                  </span>{" "}
                  kit
                </span>
              </p>
            </div>
          </div>
          <div className="features">
            <div className="feature-item-parent">
              <div className="feature-item">
                <img className="check-icon5" alt="" src="/check1.svg" />
                <div className="services-off5">20 Graphic Design Post</div>
              </div>
              <img className="feature-icon" alt="" src="/feature-icon.svg" />
            </div>
            <div className="frame-parent">
              <div className="check-parent">
                <img className="check-icon6" alt="" src="/check1.svg" />
                <div className="services-off6">10 Video Reels</div>
              </div>
              {/* <img className="frame-item" alt="" src="/feature-icon.svg" /> */}
            </div>
            <div className="frame-group">
              <div className="check-group">
                <img className="check-icon7" alt="" src="/check1.svg" />
                <div className="services-off7">Unlimited revisions</div>
              </div>
              <img className="frame-inner" alt="" src="/feature-icon.svg" />
            </div>
            <div className="feature-item-group">
              <div className="feature-item1">
                <img className="check-icon8" alt="" src="/check1.svg" />
                <div className="services-off8">{`Other Basic Design Guidance `}</div>
              </div>
              <div className="feature-icon1">
                <img
                  className="feature-icon-child"
                  loading="lazy"
                  alt=""
                  src="/feature-icon.svg"
                />
              </div>
            </div>
            <div className="check-container">
              <img className="check-icon9" alt="" src="/check2.svg" />
              <div className="services-off9">
                Access to design resources library
              </div>
            </div>
          </div>
          <div className="package-two-title">
            <div className="k-start-container">
              <span className="k">₹18K</span>
              <b className="start-free-trial"> | Start Free Trial</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PackageTwo.propTypes = {
  className: PropTypes.string,
};

export default PackageTwo;
