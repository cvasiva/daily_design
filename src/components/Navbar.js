/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import "./GroupComponent5.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ddlogo from "../Images/ddlogo.png";
import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  const phoneNumber = "9344338444";
  return (
    <>
      <header className="navdispla">
        <div className="corporat">
          <div className="rectangle-parent">
            <div className="background px-1">
              <div className="free">FREE*</div>
            </div>
            <div className="schedule-a-consultation px-2">
              Schedule A Consultation
            </div>
            <img className="play-video-icon" alt="" src="/play-video@2x.png" style={{width:"2.5vw"}}/>
            <b className="try-now">Try Now</b>
            <img
              className="consultation-elements-child"
              alt=""
              src="/group-1707478574.svg"
            />
          </div>
        </div>
        <div className={colorChange ? " group-header1212" : "group-header"}>
          <div className="frame-child20" />
          <div className="frame-parent34">
            <div className="dailydesign-parent">
              <b className="dailydesign">Dailydesign.</b>
              <img className="frame-child21" alt="" src="/vector-3125.svg" />
            </div>
            <div className="creative-minds-for-creative-ey-wrapper">
              <div className="creative-minds-for">
                Creative Minds for Creative eyes
              </div>
            </div>
          </div>
          <div className="rectangle-parent10">
            <div className="frame-child22" />
            <div className="frame-wrapper18">
              <div className="link-about-us-parent">
                <div className="link-about">
                  <Link
                    to="/"
                    className={url === "/" ? " linkstyleactive" : "linkstyle"}
                  >
                    Home
                  </Link>
                </div>
                <div className="link-about">
                  <Link
                    to="/viewportfolio"
                    className={
                      url === "/viewportfolio"
                        ? " linkstyleactive"
                        : "linkstyle"
                    }
                  >
                    Our Works
                  </Link>
                </div>
                <div className="link-about">
                  <Link
                    to="/"
                    className={
                      url === "/resource" ? " linkstyleactive" : "linkstyle"
                    }
                  >
                    Resource
                  </Link>
                </div>
                <div className="about-us-link-two">
                  <div className="link-about">
                    <Link
                      to="/services"
                      className={
                        url === "/services" ? " linkstyleactive" : "linkstyle"
                      }
                    >
                      Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="link-wrapper1">
            <button className="link16">
              <a
                href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="contact-designer">Contact Designer</div>
              </a>
            </button>
          </div>
        </div>
      </header>
      <div className="dnonenav">
        <div className={colorChange ? " group12121" : "group"}>
          <div className="d-flex justify-content-start">
            <img src={ddlogo} alt="ddlogo" className="ddlogostyle" />
          </div>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            // style={{ marginTop: "-1rem" }}
          >
            {menuOpen ? (
              <FaTimes className="fs-6" size={30} />
            ) : (
              <FaBars className="fs-6" size={30} />
            )}
            {menuOpen && (
              <>
                <div className={menuOpen ? "navpostion" : "bgnav"}>
                  <div className="rectangle-parent10">
                    <div className="link-about-us-parent">
                      <Link
                        to="/"
                        className={
                          url === "/" ? " linkstyle" : "linkstyleactive"
                        }
                      >
                        <div className="link-about">Home</div>
                      </Link>
                      <div className="link-about">
                        <Link to="/viewportfolio" className="linkstyle">
                          Our Works
                        </Link>
                      </div>
                      <div className="link-about">
                        <Link to="/resource" className="linkstyle">
                          Resource
                        </Link>
                      </div>
                      <div className="about-us-link-two">
                        <div className="link-about">
                          <Link to="/services" className="linkstyle">
                            Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="link-wrapper1">
                    <button className="link16">
                      <a
                        href={`tel:${phoneNumber}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="contact-designer">Contact Designer</div>
                      </a>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
