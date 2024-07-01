import PropTypes from "prop-types";
import "./PackageThreeContent.css";

const PackageThreeContent = ({ className = "" }) => {
  return (
    <div className={`package-three-content ${className}`}>
      <img
        className="background-shape-icon2"
        loading="lazy"
        alt=""
        src="/rectangle-34628362@2x.png"
      />
      <div className="package-three-details">
        <div className="title-and-body2">
          <div className="title2">Festival Creative Design</div>
        </div>
      </div>
      <div className="package-three-action">
        <div className="action-button">
          {/* <div className="button-container1">
            <b className="get-details">Get Details</b>
          </div> */}
          <div className="benefits1">
            <div className="benefit5">
              <img className="check-icon10" alt="" src="/check.svg" />
              <div className="benefit-child2" />
              <div className="services-off10">48 Festival Post / Year</div>
            </div>
            <div className="benefit6">
              <img className="check-icon11" alt="" src="/check.svg" />
              <div className="benefit-child3" />
              <div className="services-off11">{`Customised Names & Photos`}</div>
            </div>
            <div className="benefit7">
              <img className="check-icon12" alt="" src="/check.svg" />
              <div className="benefit-child4" />
              <div className="services-off12">Revisions Accepted</div>
            </div>
            <div className="benefit8">
              <img className="check-icon13" alt="" src="/check.svg" />
              <div className="benefit-child5" />
              <div className="services-off13">
                Offer on other Design Package
              </div>
            </div>
            <div className="benefit9">
              <img className="check-icon14" alt="" src="/check.svg" />
              <div className="benefit-child6" />
              <div className="services-off14">Design Guidance / Year</div>
            </div>
          </div>
          <div className="button-container">
            <b className="get-now">Get Now</b>
          </div>
        </div>
      </div>
    </div>
  );
};

PackageThreeContent.propTypes = {
  className: PropTypes.string,
};

export default PackageThreeContent;
