import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DevelopmentTechnologyIcons.css";

const DevelopmentTechnologyIcons = ({
  className = "",
  divgroup,
  visualStudio,
  propFlex,
  propMinWidth,
  propPadding,
}) => {
  const developmentTechnologyIconsStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const developmentTechnologyLogosStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`development-technology-icons ${className}`}
      style={developmentTechnologyIconsStyle}
    >
      <div
        className="development-technology-logos"
        style={developmentTechnologyLogosStyle}
      >
        <img className="divgroup-icon" alt="divgroup" src={divgroup} />
      </div>
      <div className="visual-studio">{visualStudio}</div>
    </div>
  );
};

DevelopmentTechnologyIcons.propTypes = {
  className: PropTypes.string,
  divgroup: PropTypes.string,
  visualStudio: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default DevelopmentTechnologyIcons;
