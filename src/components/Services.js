import PropTypes from "prop-types";
import "./Services.css";

const Services = ({ className = "" }) => {
  return (
    <div className={`services22 ${className}`}>
      <div className="service-icons">
        <div className="icon-wrapper">
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
        <div className="graphic-design">{`Graphic Design `}</div>
      </div>
      <div className="website-service">
        <div className="website-content">
          <div className="website-image">
            <img className="image-icon" alt="" src="/image.svg" />
          </div>
          <div className="website-development-service">
            Website Development Service
          </div>
        </div>
      </div>
      <div className="service-icons1">
        <div className="service-icons-inner">
          <img className="frame-childsss" alt="" src="/group-1707478586.svg" />
        </div>
        <div className="app-saas">APP / SAAS Development Service</div>
      </div>
    </div>
  );
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
