import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Benefit.css";

const Benefit = ({
  className = "",
  check,
  servicesOFF,
  check1,
  servicesOFF1,
  check2,
  servicesOFF2,
  check3,
  servicesOFF3,
  check4,
  servicesOFF4,
  servicesOFF5,
  propPadding,
  propPadding1,
  propFontWeight,
  propFontWeight1,
  propFontWeight2,
  propFontWeight3,
  propPadding2,
  propDisplay,
  propMinWidth,
  propFlex,
  propFontWeight4,
}) => {
  const benefitStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const benefit1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const servicesOFFStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight,
    };
  }, [propFontWeight]);

  const servicesOFF1Style = useMemo(() => {
    return {
      fontWeight: propFontWeight1,
    };
  }, [propFontWeight1]);

  const servicesOFF2Style = useMemo(() => {
    return {
      fontWeight: propFontWeight2,
    };
  }, [propFontWeight2]);

  const servicesOFF3Style = useMemo(() => {
    return {
      fontWeight: propFontWeight3,
    };
  }, [propFontWeight3]);

  const benefit2Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const servicesOFF4Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      flex: propFlex,
      fontWeight: propFontWeight4,
    };
  }, [propDisplay, propMinWidth, propFlex, propFontWeight4]);

  return (
    <div className={`benefit ${className}`} style={benefitStyle}>
      <div className="benefits">
        <div className="benefit1" style={benefit1Style}>
          <img className="check-icon" alt="check" src={check} />
          <div className="benefit-child" />
          <div className="services-off" style={servicesOFFStyle}>
            {servicesOFF}
          </div>
        </div>
        <div className="benefit2">
          <img className="check-icon1" alt="check" src={check} />
          <div className="benefit-item" />
          <div className="services-off1" style={servicesOFF1Style}>
            {servicesOFF1}
          </div>
        </div>
        <div className="benefit3">
          <img className="check-icon2" alt="check2" src={check2} />
          <div className="benefit-inner" />
          <div className="services-off2" style={servicesOFF2Style}>
            {servicesOFF2}
          </div>
        </div>
        <div className="benefit4">
          <img className="check-icon3" alt="check3" src={check3} />
          <div className="benefit-child1" />
          <div className="services-off3" style={servicesOFF3Style}>
            {servicesOFF3}
          </div>
        </div>
        <div className="benefit5" style={benefit2Style}>
          <img className="check-icon4" alt="check4" src={check4} />
          <div className="benefit-child2" />
          <div className="services-off4" style={servicesOFF4Style}>
            {servicesOFF4}
          </div>
        </div>
        <div className="benefit5" style={benefit2Style}>
          <img className="check-icon4" alt="check4" src={check4} />
          <div className="benefit-child2" />
          <div className="services-off4" style={servicesOFF4Style}>
            {servicesOFF5}
          </div>
        </div>
      </div>
    </div>
  );
};

Benefit.propTypes = {
  className: PropTypes.string,
  check: PropTypes.string,
  servicesOFF: PropTypes.string,
  check1: PropTypes.string,
  servicesOFF1: PropTypes.string,
  check2: PropTypes.string,
  servicesOFF2: PropTypes.string,
  check3: PropTypes.string,
  servicesOFF3: PropTypes.string,
  check4: PropTypes.string,
  servicesOFF4: PropTypes.string,
  servicesOFF5: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
  propFontWeight: PropTypes.any,
  propFontWeight1: PropTypes.any,
  propFontWeight2: PropTypes.any,
  propFontWeight3: PropTypes.any,
  propPadding2: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propFontWeight4: PropTypes.any,
};

export default Benefit;
