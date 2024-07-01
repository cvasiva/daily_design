import { useMemo } from "react";
import "./ExtendedEntries.css";

const ExtendedEntries = ({
  visitUi2,
  visitUi1,
  heading3MyCPLFromDigitalA,
  heading3MyCPLFromDigitalA1,
  propPadding,
  propMarginTop,
  propHeight,
  propLeft,
  propTop,
  propHeight1,
  propPadding1,
  propPadding2,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const expandedContentStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
      height: propHeight,
    };
  }, [propMarginTop, propHeight]);

  const visitUi2IconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const visitUi1IconStyle = useMemo(() => {
    return {
      top: propTop,
      height: propHeight1,
    };
  }, [propTop, propHeight1]);

  const expandedDetailsStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const continuedExpansionStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className="extended-entries">
      <div className="expanded-content-wrapper" style={frameDiv1Style}>
        <div className="expanded-content" style={expandedContentStyle}>
          <img
            className="visit-ui-2-icon46"
            alt="visitUi2"
            src={visitUi2}
            style={visitUi2IconStyle}
          />
          <img
            className="visit-ui-1-icon46"
            alt="visitUi1"
            src={visitUi1}
            style={visitUi1IconStyle}
          />
        </div>
      </div>
      <div className="expanded-details" style={expandedDetailsStyle}>
        <div className="frame-parent50">
          <div className="heading-3-my-cpl-from-digita-parent19">
            <div className="heading-353">{heading3MyCPLFromDigitalA}</div>
            <div className="heading-354">{heading3MyCPLFromDigitalA1}</div>
          </div>
          <div className="continued-expansion" style={continuedExpansionStyle}>
            <div className="heading-3-my-cpl-from-digita-parent20">
              <div className="heading-355">2023</div>
              <div className="heading-356">2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendedEntries;
