import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import "./Benefits.css";

const Benefits = memo(
  ({
    className = "",
    servicesOFF,
    servicesOFF1,
    servicesOFF2,
    servicesOFF3,
    servicesOFF4,
    propHeight,
    propHeight1,
    propDisplay,
  }) => {
    const servicesOFFStyle = useMemo(() => {
      return {
        height: propHeight,
      };
    }, [propHeight]);

    const servicesOFF1Style = useMemo(() => {
      return {
        height: propHeight1,
        display: propDisplay,
      };
    }, [propHeight1, propDisplay]);

    return (
      <div className={`benefits ${className}`}>
        <div className="benefit">
          <input className="check" type="checkbox" />
          <div className="benefit-child" />
          <div className="services-off" style={servicesOFFStyle}>
            {servicesOFF}
          </div>
        </div>
        <div className="benefit1">
          <input className="check1" type="checkbox" />
          <div className="benefit-item" />
          <div className="services-off1">{servicesOFF1}</div>
        </div>
        <div className="benefit2">
          <input className="check2" type="checkbox" />
          <div className="benefit-inner" />
          <div className="services-off2" style={servicesOFF1Style}>
            {servicesOFF2}
          </div>
        </div>
        <div className="benefit3">
          <input className="check3" type="checkbox" />
          <div className="ellipse-div" />
          <div className="services-off3">{servicesOFF3}</div>
        </div>
        <div className="benefit4">
          <input className="check4" type="checkbox" />
          <div className="benefit-child1" />
          <div className="services-off4">{servicesOFF4}</div>
        </div>
      </div>
    );
  }
);

Benefits.propTypes = {
  className: PropTypes.string,
  servicesOFF: PropTypes.string,
  servicesOFF1: PropTypes.string,
  servicesOFF2: PropTypes.string,
  servicesOFF3: PropTypes.string,
  servicesOFF4: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Benefits;
