import FrameComponent8 from "./FrameComponent8";
import "./GroupComponent2.css";

const GroupComponent2 = () => {
  return (
    <section className="footer-container-parent">
      <div className="footer-container">
        <footer className="footer-columns">
          <div className="left-column">
            <div className="column-titles">
              <div className="get-in-touch9">Get in Touch</div>
            </div>
            <div className="column-titles1">
              <div className="availablefor-work9">{`Availablefor Work `}</div>
            </div>
            <div className="get-in-touch10">Get in Touch</div>
            <div className="column-titles2">
              <div className="availablefor-work10">{`Availablefor Work `}</div>
            </div>
            <div className="image-column">
              <div className="get-in-touch11">Get in Touch</div>
              <img
                className="image-307-icon9"
                loading="lazy"
                alt=""
                src="/image-3072@2x.png"
              />
            </div>
          </div>
          <div className="services-column">
            <div className="services-container">
              <div className="services-content">
                <div className="inner-content1">
                  <div className="service-list2">
                    <div className="heading-3107">Services</div>
                    <div className="service-links1">
                      <div className="link-items">
                        <div className="item-link46">Web UI UX Design</div>
                        <div className="item-link47">Web Development</div>
                        <div className="item-link48">CMS Websites</div>
                        <div className="item-link49">React, NextJs</div>
                        <div className="item-link50">Website uplift</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="design-links">
                  <div className="more-links">
                    <div className="item-link51">SM Creatives</div>
                    <div className="item-link52">Video Creation</div>
                    <div className="item-link53">Pitch Deck</div>
                    <div className="item-link54">Print BRanding</div>
                  </div>
                </div>
                <div className="email-column">
                  <div className="email-container">
                    <div className="email-content">
                      <div className="inner-email">
                        <div className="email-details">
                          <div className="icon-row">
                            <div className="symbol52"></div>
                          </div>
                          <div className="empty">+880 1798-155521</div>
                        </div>
                      </div>
                      <div className="address-row">
                        <div className="address-details">
                          <div className="symbol53"></div>
                        </div>
                        <div className="dailydesigngmailcom3">
                          dailydesign@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-items">
                    <div className="item-link55">Ui Ux Design</div>
                    <div className="item-link56">Customised App design</div>
                    <div className="item-link57">App Uplift Service</div>
                  </div>
                </div>
              </div>
              <div className="social-links2">
                <FrameComponent8 propWidth="unset" propFlex="1" />
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="availablefor-work11">{`Availablefor Work `}</div>
    </section>
  );
};

export default GroupComponent2;
