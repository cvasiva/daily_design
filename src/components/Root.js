import Services from "./Services";
import PackageTwo from "./PackageTwo";
import PackageThreeContent from "./PackageThreeContent";
import PropTypes from "prop-types";
import "./Root.css";

const Root = ({ className = "" }) => {
  return (
    <div className={`root ${className}`}>
      <header className="packages-counter">
        <div className="counter">
          <div className="counter1">
            <div className="our-creative-packages-container">
              <span className="our-creative-packages-container1">
                <span>
                  <b>Our Creative Packages</b>
                </span>
                <span className="have-supported-700-people">
                  <span>{` `}</span>
                  <span>Have Supported 700+ People!</span>
                </span>
              </span>
            </div>
          </div>
          <Services />
        </div>
      </header>
      <section className="package-one">
        <div className="package-one-content">
          <div className="package-one-body">
            <img
              className="background-shape-icon"
              loading="lazy"
              alt=""
              src="/rectangle-34628361@2x.png"
            />
            <div className="package-one-details">
              <div className="benefits-title-parent">
                <div className="benefits-title">
                  <div className="title-and-body">
                    <div className="title">Start-up Design Essentials</div>
                  </div>
                  <div className="benefits11">
                    <div className="benefit">
                      <img className="check-icon" alt="" src="/check.svg" />
                      <div className="benefit-child" />
                      <div className="services-off">Logo with 3 Designs</div>
                    </div>
                    <div className="benefit1">
                      <img className="check-icon1" alt="" src="/check.svg" />
                      <div className="benefit-item" />
                      <div className="services-off1">Business Cards</div>
                    </div>
                    <div className="benefit2">
                      <img className="check-icon2" alt="" src="/check.svg" />
                      <div className="benefit-inner" />
                      <div className="services-off2">Business letterhead</div>
                    </div>
                    <div className="benefit3">
                      <img className="check-icon3" alt="" src="/check.svg" />
                      <div className="ellipse-div" />
                      <div className="services-off3">Digital Thumbnails</div>
                    </div>
                    <div className="benefit4">
                      <img className="check-icon4" alt="" src="/check.svg" />
                      <div className="benefit-child1" />
                      <div className="services-off4">Monthly N</div>
                    </div>
                  </div>
                </div>
                <div className="button-container">
                  <b className="get-now">Get Now</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PackageTwo />
        <div className="package-three">
          <PackageThreeContent />
        </div>
      </section>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;
