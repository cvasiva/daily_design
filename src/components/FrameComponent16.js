import FrameComponent12 from "./FrameComponent12";
import FrameComponent17 from "./FrameComponent17";
import "./FrameComponent16.css";

const FrameComponent16 = () => {
  return (
    <section className="menu-container-wrapper">
      <div className="menu-container">
        <div className="menu-container-child" />
        <div className="menu-content">
          <div className="home-wrapper">
            <div className="home">Home</div>
          </div>
          <div className="menu-wrapper">
            <div className="menu">Menu</div>
          </div>
          <div className="customize-wrapper">
            <div className="customize">Customize</div>
          </div>
          <div className="offer-zone-wrapper">
            <div className="offer-zone">Offer Zone</div>
          </div>
          <div className="my-wallet-wrapper">
            <div className="my-wallet">My Wallet</div>
          </div>
        </div>
        <div className="team-container-wrapper">
          <div className="team-container">
            <FrameComponent12
              yourWebsite="Your App "
              expertPartner="Design team"
              propWidth="unset"
              propGap="28px"
              propAlignSelf="stretch"
            />
            <div className="business-container-wrapper">
              <div className="business-container">
                <div className="business-content">
                  <div className="business2">
                    <div className="background23" />
                    <div className="full-app-design-wrapper">
                      <div className="full-app-design">Full App Design</div>
                    </div>
                    <div className="price-container-parent">
                      <div className="price-container1">
                        <b className="b6">₹29,000</b>
                      </div>
                      <div className="feature-container-wrapper">
                        <div className="feature-container">
                          <div className="upto-10-features-wrapper">
                            <div className="upto-10-features">
                              Upto 10 Features
                            </div>
                          </div>
                          <button className="more-details-group">
                            <div className="more-details2">More Details</div>
                            <div className="vector-wrapper25">
                              <img
                                className="vector-icon44"
                                alt=""
                                src="/vector-13.svg"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="line-frame">
                        <div className="frame-child71" />
                      </div>
                      <FrameComponent17
                        vector="/vector-29.svg"
                        personalDesignManager="Personal Design Manager"
                        handoverTime="/vector-29.svg"
                        vector1="/vector-29.svg"
                        unlimitedRevisions="Unlimited Revisions"
                        services="/vector-29.svg"
                        contactImage="/vector-29.svg"
                      />
                    </div>
                  </div>
                  <div className="agency3">
                    <div className="background24" />
                    <div className="dashboard-saas-wrapper">
                      <div className="dashboard-saas">Dashboard SAAS</div>
                    </div>
                    <div className="frame-parent114">
                      <div className="wrapper8">
                        <b className="b7">₹33,000</b>
                      </div>
                      <div className="frame-parent115">
                        <div className="all-dashboard-ui-designs-wrapper">
                          <div className="all-dashboard-ui">
                            All Dashboard UI designs
                          </div>
                        </div>
                        <button className="button1">
                          <div className="button-item" />
                          <b className="start-my-design1">Start My Design</b>
                        </button>
                      </div>
                      <div className="line-wrapper1">
                        <div className="frame-child72" />
                      </div>
                      <FrameComponent17
                        vector="/vector-71.svg"
                        personalDesignManager="Design Manager"
                        handoverTime="/vector-71.svg"
                        vector1="/vector-71.svg"
                        unlimitedRevisions="Unlimited Revision"
                        services="/vector-71.svg"
                        contactImage="/vector-71.svg"
                        propPadding="var(--padding-8xs) 0rem 0rem"
                        propColor="#091315"
                        propDisplay="inline-block"
                        propMinWidth="7.313rem"
                        propPadding1="var(--padding-8xs) 0rem 0rem"
                        propColor1="#091315"
                        propPadding2="var(--padding-8xs) 0rem 0rem"
                        propColor2="#091315"
                        propPadding3="var(--padding-8xs) 0rem 0rem"
                        propColor3="#091315"
                        propPadding4="var(--padding-8xs) 0rem 0rem"
                        propColor4="#091315"
                      />
                    </div>
                  </div>
                </div>
                <div className="service-list1">
                  <div className="pricing-can-reduce-container">
                    <p className="pricing-can-reduce">
                      Pricing can reduce depends on the
                    </p>
                    <p className="features-and-process">
                      features and process*
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent16;
