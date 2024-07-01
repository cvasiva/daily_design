import { useMemo } from "react";
import "./FrameComponent17.css";

const FrameComponent17 = ({
  vector,
  personalDesignManager,
  handoverTime,
  vector1,
  unlimitedRevisions,
  services,
  contactImage,
  propPadding,
  propColor,
  propDisplay,
  propMinWidth,
  propPadding1,
  propColor1,
  propPadding2,
  propColor2,
  propPadding3,
  propColor3,
  propPadding4,
  propColor4,
}) => {
  const frameDiv6Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const personalDesignManagerStyle = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propColor, propDisplay, propMinWidth]);

  const unlimitedRevisionsStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const nDAAgreementStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const pricingNoteStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const unlimitedRevisions1Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const dividerStyle = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const daysHandoverTimeStyle = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const contactFormStyle = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  const vIPSupportStyle = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div className="manager-container-parent">
      <div className="manager-container1">
        <div className="vector-wrapper24" style={frameDiv6Style}>
          <img className="vector-icon42" alt="" src={vector} />
        </div>
        <div
          className="personal-design-manager"
          style={personalDesignManagerStyle}
        >
          {personalDesignManager}
        </div>
      </div>
      <div className="n-d-a">
        <div className="unlimited-revisions" style={unlimitedRevisionsStyle}>
          <img className="handover-time-icon" alt="" src={handoverTime} />
        </div>
        <div className="nda-agreement" style={nDAAgreementStyle}>
          NDA Agreement
        </div>
      </div>
      <div className="pricing-note-parent">
        <div className="pricing-note" style={pricingNoteStyle}>
          <img className="vector-icon43" alt="" src={vector1} />
        </div>
        <div className="unlimited-revisions1" style={unlimitedRevisions1Style}>
          {unlimitedRevisions}
        </div>
      </div>
      <div className="team-button">
        <div className="divider" style={dividerStyle}>
          <img className="services-icon" alt="" src={services} />
        </div>
        <div className="days-handover-time" style={daysHandoverTimeStyle}>
          28 Days Handover Time
        </div>
      </div>
      <div className="contact-form-parent">
        <div className="contact-form" style={contactFormStyle}>
          <img className="contact-image-icon" alt="" src={contactImage} />
        </div>
        <div className="vip-support1" style={vIPSupportStyle}>
          24/7 VIP Support
        </div>
      </div>
    </div>
  );
};

export default FrameComponent17;
