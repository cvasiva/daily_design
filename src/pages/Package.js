import React from "react";
import "./Package.css";
import ddlogo from "../Images/ddlogo.png";
import business_plan from "../Images/business_plan.png"
const Package = () => {
  return (
    <>
      <div className="design-background-parent">
        {/* <div className="design-background">
          <img
            className="cfe6d56e2ae259ae5b08c-hexagon-icon"
            alt=""
            src="/647cfe6d56e2ae259ae5b08c-hexagonspherepng@2x.png"
          />
        </div> */}
        {/* <img
          className="fbf63a47311285c2410df-starpng-icon"
          alt=""
          src="/644fbf63a47311285c2410df-starpng@2x.png"
        /> */}
        <div className="daily-design-highlight">
          <div className="w-100">
            <div className="what-makes-daily-container">
              <span className="what-makes-daily-container1">
                <p className="what-makes-daily">What makes Daily Design</p>
                <p className="the-best-for-business">
                  <span>{`the `}</span>
                  <b className="best-for-business">best for Business?</b>
                </p>
              </span>
            </div>
            <div className="individual-design-manager">
              Individual Design Manager
            </div>
            <div className="individual-design-manager">24/7 Support</div>
            <div className="individual-design-manager">
              Personalized Attention
            </div>
            <div className="individual-design-manager">
              In house Designers with 12+ Years of Experience
            </div>
            <div className="individual-design-manager">
              Award-Winning Designs
            </div>
            <b className="individual-design-manager">
              100% Cost-Effective Pricing in Industry
            </b>
            <div className="individual-design-manager">
              Proven High ROI Designs
            </div>
            <div className="individual-design-manager">
              Full Stack Developers with 10+ Years of Experience
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="highlight-content">
              <div className="brand-highlight">
                <img src={ddlogo} alt="ddlogo" style={{width:"100%"}}/>
              </div>
              <div className="feature-containern">
                <img
                  className="background-items-icon"
                  alt=""
                  src="/background-items.svg"
                />
                <img
                  className="background-items-icon1"
                  alt=""
                  src="/background-items1.svg"
                />
                <img
                  className="background-items-icon2"
                  alt=""
                  src="/background-items2.svg"
                />
                <img
                  className="background-items-icon3"
                  alt=""
                  src="/background-items3.svg"
                />
                <img
                  className="background-items-icon4"
                  alt=""
                  src="/background-items4.svg"
                />
                <img
                  className="background-items-icon5"
                  alt=""
                  src="/background-items5.svg"
                />
                <img
                  className="background-items-icon6"
                  alt=""
                  src="/background-items6.svg"
                />
                <img
                  className="background-items-icon7"
                  alt=""
                  src="/background-items7.svg"
                />
              </div>
            </div>
            <div className="highlight-content1">
              <div className="others">Others</div>
              <div className="highlight-content-inner">
                <div className="group-parent">
                  <img className="group-icon3" alt="" src="/group2.svg" />
                  <img className="group-icon4" alt="" src="/group3.svg" />
                  <img className="group-icon5" alt="" src="/group4.svg" />
                  <img className="group-icon6" alt="" src="/group5.svg" />
                  <img className="group-icon7" alt="" src="/group6.svg" />
                  <img className="group-icon8" alt="" src="/group7.svg" />
                  <img className="group-icon9" alt="" src="/group8.svg" />
                  <img className="group-icon10" alt="" src="/group9.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="business_plan"><img src={business_plan} alt="business_plan" style={{width:"100%"}}/></div>
      </div>
      <div className="design-monks-description-conta">
        <div className="at-design-monks">
          At Design Monks, we've carved a unique niche in the UI UX domain,
          setting ourselves apart with a combination of creativity,
          client-centric approach, and strategic insight. Our reputation is
          built on consistently delivering standout UI UX, branding, product
          design, and web design that not only looks great but also drives brand
          growth
        </div>
      </div>
    </>
  );
};

export default Package;
