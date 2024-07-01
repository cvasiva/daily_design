/* eslint-disable react/jsx-no-target-blank */
import "./GroupComponent4.css";
import { FaStar } from "react-icons/fa";
// import clutchlogo from "../Images/clutchlogo.png";
// import googlelogo from "../Images/googlelogo.png";
// import trustpilotlogo from "../Images/trustpilotlogo.png";
// import fiverlogo from "../Images/fiverlogo.png";
import { useEffect, useRef } from "react";
// import video from "../Images/video.mp4";
import trust from "../Images/trust.png";
import mobilebg from "../Images/mobilebg.webp";
import { PiStarFourFill } from "react-icons/pi";
import ScrollCarousel from "scroll-carousel-react";
import FrameHome9 from "../Images/HomeImages/FrameHome9.png";
import FrameHome8 from "../Images/HomeImages/FrameHome8.png";
import FrameHome7 from "../Images/HomeImages/FrameHome7.png";
import FrameHome10 from "../Images/HomeImages/FrameHome10.png";
import FrameHome6 from "../Images/HomeImages/FrameHome6.png";
import FrameHome5 from "../Images/HomeImages/FrameHome5.png";
import FrameHome4 from "../Images/HomeImages/FrameHome4.png";
import FrameHome3 from "../Images/HomeImages/FrameHome3.png";
import FrameHome2 from "../Images/HomeImages/FrameHome2.png";
import FrameHome1 from "../Images/HomeImages/FrameHome1.png";
const GroupComponent4 = () => {
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div className="" style={{ width: "100%" }}>
      {/* <video
        src={video}
        type="video/mp4"
        autostart
        autoPlay
        className="videoTag"
        playsInline
        loop
        muted
        alt="All the devices"
        ref={videoEl}
      /> */}
      <div className="crafting-dreams-content-parent">
        <img
          className="desktop-1-icon"
          alt="mobilebg"
          src="/desktop-1@2x.png"
        />
        <img className="desktop-1-icon_mobile" alt="mobilebg" src={mobilebg} />
        <div className="crafting-dreams-content">
          <div className="were-crafting-digital-dreams-parent">
            <div className="were-crafting-digital-container">
              <span>
                <p className="were">We’re</p>
                <p className="crafting-digital-dreams">
                  Crafting Digital Dreams
                </p>
              </span>
            </div>
            <div className="were-crafting-digital-containerwe">
              <span>
                <p className="werewe">We’re Crafting</p>
                <p className="crafting-digital-dreams">Digital Dreams</p>
              </span>
            </div>
            <div className="india-talents-content-wrapper">
              <div className="india-talents-content">
                <div className="india-talents-content-inner">
                  <div className="projects-heading-parent">
                    <div className="projects-heading" />
                    <div className="frame-item" />
                    <div className="portfolio" />
                  </div>
                </div>
                <div className="from-indias-talents text-nowrap">
                  {" "}
                  #From India’s Talents
                </div>
                <div className="india-talents-content-inner">
                  <div className="projects-heading-parent">
                    <div className="projects-heading" />
                    <div className="frame-item" />
                    <div className="portfolio" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fbf63a47311285c2410df-starpng-wrapper">
          <img
            className="fbf63a47311285c2410df-starpng-icon1"
            alt=""
            src="/644fbf63a47311285c2410df-starpng@2x.png"
          />
        </div>
        <div className="clutch-logo-background">
          <img className="rectangle-icon" alt="" src="/rectanglecard@2x.png" />
        </div>
        <div className="client-logos">
          <div className="clutch-content-parent">
            <div className="d-flex gap-4">
              <div className="clutch-content">
                <div className="clutch-logosvg-parent">
                  <img
                    className="clutch-logosvg-icon"
                    alt=""
                    src="/clutchlogosvg.svg"
                  />
                  <div className="clutch-rating">
                    <div className="clutch-stars">
                      <b className="b">4.9</b>
                      <div className="clutch-stars-container-wrapper">
                        <div className="clutch-stars-container">
                          <div className="symbol">
                            <FaStar />
                          </div>
                          <div className="symbol1">
                            <FaStar />
                          </div>
                          <div className="symbol2">
                            <FaStar />
                          </div>
                          <div className="symbol3">
                            <FaStar />
                          </div>
                          <div className="symbol4">
                            <FaStar />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="google-content-parent">
                <div className="google-content">
                  <div className="google-logosvg-parent">
                    <img
                      className="google-logosvg-icon"
                      alt=""
                      src="/googlelogosvg@2x.png"
                    />
                    <div className="google-rating">
                      <b className="question">5.0</b>
                      <div className="google-stars-container-wrapper">
                        <div className="google-stars-container">
                          <div className="symbol5">
                            <FaStar />
                          </div>
                          <div className="symbol6">
                            <FaStar />
                          </div>
                          <div className="symbol7">
                            <FaStar />
                          </div>
                          <div className="symbol8">
                            <FaStar />
                          </div>
                          <div className="symbol9">
                            <FaStar />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="talents-icon1" alt="" src="/talents1.svg" />
              </div>
            </div>
            <div className="d-flex gap-4">
              <div className="image-rating-content-parent">
                <div className="image-rating-content">
                  <div className="image-103954-parent">
                    <img
                      className="image-103954-icon"
                      alt=""
                      src="/image-103954@2x.png"
                    />
                    <img
                      className="image-103955-icon"
                      alt=""
                      src="/image-103955@2x.png"
                    />
                  </div>
                  <div className="image-rating-details">
                    <b className="consultation">4.9</b>
                    <div className="image-rating-stars">
                      <div className="image-stars-container">
                        <div className="symbol10">
                          <FaStar />
                        </div>
                        <div className="symbol11">
                          <FaStar />
                        </div>
                        <div className="symbol12">
                          <FaStar />
                        </div>
                        <div className="symbol13">
                          <FaStar />
                        </div>
                        <div className="symbol14">
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="talents-icon2" alt="" src="/talents2.svg" />
              </div>
              <div className="symbol-rating-content-wrapper">
                <div className="symbol-rating-content">
                  <div className="symbol-rating-content-inner">
                    <img
                      className="group-icon"
                      alt=""
                      src="/group-1707478848@2x.png"
                    />
                  </div>
                  <div className="symbol-rating-details">
                    <div className="client-logo-wrapper">
                      <b className="client-logo">4.9</b>
                    </div>
                    <div className="symbol-rating-stars">
                      <div className="symbol15">
                        <FaStar />
                      </div>
                    </div>
                    <div className="symbol-rating-stars1">
                      <div className="symbol16">
                        <FaStar />
                      </div>
                    </div>
                    <div className="symbol-rating-stars2">
                      <div className="symbol17">
                        <FaStar />
                      </div>
                    </div>
                    <div className="symbol-rating-stars3">
                      <div className="symbol18">
                        <FaStar />
                      </div>
                    </div>
                    <div className="symbol-rating-stars4">
                      <div className="symbol19">
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trust">
            <div className="text-center py-5">
              <img
                src={trust}
                alt="trust"
                style={{ zIndex: "10", width: "60%", position: "relative" }}
              />
            </div>
          </div>
        </div>
        <div className="team-container123">
          <a
            href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask questions via WhatsApp"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div className="link1">
              <b className="talk-with-team">Talk with Team</b>
              <div className="talk-icon">
                <img className="svg-icon" alt="" src="/svg.svg" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="home_dev5_card">
        <ScrollCarousel autoplay autoplaySpeed={40} speed={3} direction="ltr">
          <div className="d-flex w-100 gap-3 py-1">
            <div>
              {" "}
              <PiStarFourFill />
            </div>
            <div className="home_webfont w-100 text-nowrap">
              Web Development & Design
            </div>
          </div>
          <div className="d-flex w-100 gap-3 py-1">
            <div>
              <PiStarFourFill />
            </div>
            <div className="home_webfont w-100 text-nowrap">
              Mobile applications
            </div>
          </div>
          <div className="d-flex w-100 gap-3 py-1">
            <div>
              {" "}
              <PiStarFourFill />
            </div>
            <div className="home_webfont w-100 text-nowrap">UX / UI Design</div>
          </div>
          <div className="d-flex w-100 gap-3 py-1">
            <div>
              {" "}
              <PiStarFourFill />
            </div>
            <div className="home_webfont w-100 text-nowrap">
              E - Commerce website
            </div>
          </div>
          <div className="d-flex w-100 gap-3 py-1">
            <div>
              <PiStarFourFill />
            </div>
            <div className="home_webfont w-100 text-nowrap">
              Branding & Design
            </div>
          </div>
          <div className="d-flex w-100 gap-3 py-1">
            <div>
              <PiStarFourFill />
            </div>
            <div className="home_webfont w-100 text-nowrap">Dashboard UI</div>
          </div>
        </ScrollCarousel>
      </div>
      <div className="mt-5">
        <ScrollCarousel
          // smartSpeed={true}
          autoplay
          autoplaySpeed={80}
          speed={5}
        >
          <div className="framasieflex">
            <div>
              {" "}
              <img
                src={FrameHome9}
                alt="FrameHome9"
                className="FrameHome9_style"
              />
            </div>
            <div>
              {" "}
              <img
                src={FrameHome8}
                alt="FrameHome9"
                className="FrameHome9_style"
              />
            </div>
            <div>
              {" "}
              <img
                src={FrameHome7}
                alt="FrameHome9"
                className="FrameHome9_style"
              />
            </div>
            <div>
              {" "}
              <img
                src={FrameHome10}
                alt="FrameHome9"
                className="FrameHome9_style"
              />
            </div>
            <div>
              {" "}
              <img
                src={FrameHome6}
                alt="FrameHome9"
                className="FrameHome9_style"
              />
            </div>
            <div>
              {" "}
              <img
                src={FrameHome5}
                alt="FrameHome9"
                className="FrameHome9_style"
              />
            </div>
            <div>
              {" "}
              <img
                src={FrameHome4}
                alt="FrameHome9"
                className="FrameHome9_style"
              />
            </div>
            <div>
              {" "}
              <img
                src={FrameHome3}
                alt="FrameHome9"
                className="FrameHome9_style"
              />
            </div>
            <div>
              {" "}
              <img
                src={FrameHome2}
                alt="FrameHome9"
                className="FrameHome9_style"
              />
            </div>
            <div>
              {" "}
              <img
                src={FrameHome1}
                alt="FrameHome9"
                className="FrameHome9_style"
              />
            </div>
          </div>
        </ScrollCarousel>
      </div>
    </div>
  );
};

export default GroupComponent4;
