import { IoMail } from "react-icons/io5";
import "./ContactInnerContainer.css";
// import ScrollCarousel from "scroll-carousel-react";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactInnerContainer = () => {
  return (
    <footer className="contact-inner-container">
      <div className="contact-cards">
        {/* <ScrollCarousel
          // smartSpeed={true}
          autoplay
          autoplaySpeed={80}
          speed={5}
        >
        <div className="d-flex gap-2">
          <div className="contact-card-items d-flex gap-2">
            <div>
              <img
                className="image-1186-icon"
                loading="lazy"
                alt="vector"
                src="/image-1186@2x.png"
              />
            </div>
            <div className="get-in-touch text-nowrap">Get in Touch</div>
          </div>
          <div className="contact-card-items gap-2">
            <img
              className="image-307-icon"
              loading="lazy"
              alt="vector"
              src="/image-307@2x.png"
            />
            <div className="get-in-touch text-nowrap">Availablefor Work</div>
          </div>
          <div className="contact-card-items d-flex gap-2">
            <div>
              <img
                className="image-1186-icon"
                loading="lazy"
                alt="vector"
                src="/image-1186@2x.png"
              />
            </div>
            <div className="get-in-touch text-nowrap">Get in Touch</div>
          </div>
          <div className="contact-card-items gap-2">
            <img
              className="image-307-icon"
              loading="lazy"
              alt="vector"
              src="/image-307@2x.png"
            />
            <div className="get-in-touch text-nowrap">Availablefor Work</div>
          </div>
          <div className="contact-card-items d-flex gap-2">
            <div>
              <img
                className="image-1186-icon"
                loading="lazy"
                alt="vector"
                src="/image-1186@2x.png"
              />
            </div>
            <div className="get-in-touch text-nowrap">Get in Touch</div>
          </div>
          <div className="contact-card-items gap-2">
            <img
              className="image-307-icon"
              loading="lazy"
              alt="vector"
              src="/image-307@2x.png"
            />
            <div className="get-in-touch text-nowrap">Availablefor Work</div>
          </div>
        </div>
        </ScrollCarousel> */}
        <div className="footer-info">
          <div className="footer-inner-container">
            <div className="footer-content">
              <div className="footer-content-container">
                <div className="footer-branding">
                  <b className="dailydesign1">Dailydesign.</b>
                  <div className="footer-brand-logo">
                    <div className="footer-brand-logo-child" />
                    <img
                      className="footer-brand-logo-item"
                      alt="vector"
                      src="/vector-3125-1.svg"
                    />
                  </div>
                </div>
                <div className="footer-brand-slogan">
                  <div className="creative-minds-for1">
                    Creative Minds for Creative eyes
                  </div>
                </div>
              </div>
              <div className="services-title">
                <div className="heading-336">Services</div>
              </div>
              {/* <div className="services-space-first">
                <div className="services-space-first1"></div>
              </div> */}
              <div className="emailflexp">
                <div className="services-space-first">
                  <div className="services-space-first1">
                    <BsFillTelephoneFill
                      className="fs-5"
                      style={{ color: "#FFC644" }}
                    />{" "}
                    +91 93443 38444
                  </div>
                </div>
                <div className="services-email">
                  <div className="dailydesigngmailcom">
                    <IoMail style={{ color: "#FFC644" }} className="fs-5" />{" "}
                    dailydesign@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-inner-container-inner">
              <img
                className="frame-child37"
                loading="lazy"
                alt="vector"
                src="/vector-3062.svg"
              />
            </div>
          </div>
          <div className="footer-links1">
            <div className="footer-links-container">
              <div className="footer-links-first">
                <div className="item-link">Web UI UX Design</div>
                <div className="item-link1">Web Development</div>
                <div className="item-link2">CMS Websites</div>
                <div className="item-link3">React, NextJs</div>
                <div className="item-link4">Website uplift</div>
              </div>
              <div className="footer-links-second">
                <div className="item-link5">SM Creatives</div>
                <div className="item-link6">Video Creation</div>
                <div className="item-link7">Pitch Deck</div>
                <div className="item-link8">Print BRanding</div>
              </div>
              <div className="footer-links-third">
                <div className="item-link9">Ui Ux Design</div>
                <div className="item-link10">Customised App design</div>
                <div className="item-link11">App Uplift Service</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <hr />
          <div className="horizontalborder">
            All Rights Reserved Copyright © 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactInnerContainer;
