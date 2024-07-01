import React, { useState } from "react";
import "./Nextforu.css";
import ScrollCarousel from "scroll-carousel-react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import TestimonialSlider from "./TestimonialSlider";
const items = [
  {
    title: "Abraham John",
    key: 1,
  },
  {
    title: "umesh",
    key: 2,
  },
  {
    title: "aravind",
    key: 3,
  },
];

const testimonials = [
  {
    name: "Abraham John",
    role: "Manager",
    date: "June 30, 2024",
    text: `A big thank you for @dailydesign_DD. Their professionalism, creativity, and attention to detail are unmatched. I was nervous about the project at first, but their team reassured me at every meeting, making sure I was happy with the progress. The final product exceeded all my expectations. It’s elegant, functional, and exactly what I needed.`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
  {
    name: "Jane Doe",
    role: "Designer",
    date: "May 15, 2024",
    text: `Working with @creative_design was a pleasure. They understood my vision perfectly and delivered a design that was both beautiful and functional. I highly recommend their services.`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
  {
    name: "John Smith",
    role: "Developer",
    date: "April 12, 2024",
    text: `@tech_gurus did an amazing job on our website. The team's technical expertise and innovative approach were evident throughout the project. Highly recommended!`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
  {
    name: "Emily Clarke",
    role: "Product Manager",
    date: "March 22, 2024",
    text: `The team at @design_hub was incredible to work with. They were attentive to our needs and delivered a product that exceeded our expectations. We will definitely work with them again.`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
  {
    name: "Michael Brown",
    role: "Entrepreneur",
    date: "February 18, 2024",
    text: `@startup_designs transformed our ideas into a reality. Their attention to detail and commitment to quality were outstanding. We couldn't be happier with the final product.`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
  {
    name: "Sarah Lee",
    role: "Marketing Specialist",
    date: "January 25, 2024",
    text: `I was blown away by the creativity and professionalism of @marketing_mavens. They took our brand to the next level with their innovative design solutions.`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
  {
    name: "David Wilson",
    role: "CEO",
    date: "December 10, 2023",
    text: `@biz_designs provided exceptional service and delivered a product that surpassed all our expectations. Their team was responsive, creative, and professional.`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
  {
    name: "Jessica Taylor",
    role: "Content Creator",
    date: "November 05, 2023",
    text: `@content_creators were fantastic to work with. They understood our vision and brought it to life with their amazing design skills. Highly recommended!`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
  {
    name: "Matthew Harris",
    role: "Graphic Designer",
    date: "October 15, 2023",
    text: `@graphic_gurus exceeded our expectations with their stunning designs. Their attention to detail and creative flair made our project a huge success.`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
  {
    name: "Linda Martinez",
    role: "Business Analyst",
    date: "September 30, 2023",
    text: `@business_designs delivered an outstanding product that perfectly matched our needs. Their team's professionalism and expertise were evident throughout the project.`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
  {
    name: "Daniel Thompson",
    role: "Freelancer",
    date: "August 25, 2023",
    text: `@freelance_designs provided excellent service and delivered a top-notch product. Their attention to detail and creativity were greatly appreciated.`,
    images: {
      profile: "/image@2x.png",
      verification: "/image-104199@2x.png",
      icon: "/image-104021@2x.png",
      project: "/group-1707478905.svg",
    },
  },
];

const Nextforu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="testimonial123">
          <div className="testimonial-one-content">
            <div className="img-verified-account" />
            <div className="container1" />
            <div className="link-x-ads-info-and-privacy" />
            <img
              className="testimonial-one-content-child"
              alt=""
              src="/vector-3071.svg"
            />
            <div className="second-layer">
              <div className="third-layer">
                <div className="fourth-layer">
                  <img className="image-icon" alt="" src="/image@2x.png" />
                  <div className="fifth-layer">
                    <div className="sixth-layer">
                      <div className="container2">
                        <b className="abraham-john">{item.title}</b>
                      </div>
                      <div className="verification">
                        <div className="link2">
                          <div className="div">·</div>
                          <div className="manager">{`Manager @ `}</div>
                        </div>
                        <img
                          className="image-104199-icon"
                          alt=""
                          src="/image-104199@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="image-104021-icon"
                alt=""
                src="/image-104021@2x.png"
              />
            </div>
            <div className="frame-parent2">
              <div className="a-big-thank-you-for-dailydesi-wrapper">
                <div className="a-big-thank-container">
                  <p className="a-big-thank-you-for-dailydesi">
                    <span className="a-big-thank">{`A big thank you for `}</span>
                    <span className="dailydesign-dd">{`@dailydesign_DD. `}</span>
                    <span>
                      Their professionalism, creativity, and attention to detail
                      are unmatched. I was nervous about the project at first,
                      but their team reassured me at meeting, making sure I was
                      happy with the progress. The final product exceeded all my
                      expectations. It’s elegant, functional, and exactly what I
                      needed.
                    </span>
                  </p>
                </div>
              </div>
              <div className="visit-link-parent">
                <div className="visit-link">
                  <div className="bottom-testimonial">
                    <img
                      className="visit-ui-2-icon"
                      alt=""
                      src="/visit-ui-2@2x.png"
                    />
                    <img
                      className="visit-ui-1-icon"
                      alt=""
                      src="/visit-ui-1@2x.png"
                    />
                  </div>
                  <img
                    className="visit-ui-3-icon"
                    alt=""
                    src="/visit-ui-3@2x.png"
                  />
                </div>
                <div className="fourth-testimonial">
                  <div className="five-testimonial-parent">
                    <div className="five-testimonial">
                      <div className="link-312">View Project</div>
                      <div className="seventh-testimonial">
                        <img
                          className="seventh-testimonial-child"
                          alt=""
                          src="/group-1707478905.svg"
                        />
                      </div>
                    </div>
                    <div className="link-3121">NOV 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <div>
      <div className="testimonial-content-parent">
        {/* <div className="testimonial-content">
          <div className="testimonial-items">
            <div className="design-icons" />
            <img
              className="image-102668-icon"
              alt=""
              src="/image-102668@2x.png"
            />
          </div>
        </div> */}
        <div className="frame-parent1">
          <div className="container-parent">
            <div className="container">
              <div className="header-container-parent">
                <div className="header-container">
                  <div className="we-delivered-our-container">
                    <span className="we-delivered-our-container1">
                      <p className="we-delivered-our">
                        <span>
                          <span>We Delivered our</span>
                        </span>
                      </p>
                      <p className="promises-next-for-you">
                        <span>
                          <span>Promises,</span>
                          <span className="span">{` `}</span>
                        </span>
                        <span className="next-for-you">
                          <span className="next-for-you1">Next For You?</span>
                        </span>
                      </p>
                    </span>
                  </div>
                  <div className="team-container">
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
                <div className="horizontal-divider1" />
              </div>
            </div>
            <div
              style={{ width: "100%", height: "100%" }}
              className="dflexnone"
            >
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </div>
            <div className="testimonial">
              {/* <div className="testimonial-one-content">
                <div className="img-verified-account" />
                <div className="container1" />
                <div className="link-x-ads-info-and-privacy" />
                <img
                  className="testimonial-one-content-child"
                  alt=""
                  src="/vector-3071.svg"
                />
                <div className="second-layer">
                  <div className="third-layer">
                    <div className="fourth-layer">
                      <img className="image-icon" alt="" src="/image@2x.png" />
                      <div className="fifth-layer">
                        <div className="sixth-layer">
                          <div className="container2">
                            <b className="abraham-john">{`Abraham John `}</b>
                          </div>
                          <div className="verification">
                            <div className="link2">
                              <div className="div">·</div>
                              <div className="manager">{`Manager @ `}</div>
                            </div>
                            <img
                              className="image-104199-icon"
                              alt=""
                              src="/image-104199@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="image-104021-icon"
                    alt=""
                    src="/image-104021@2x.png"
                  />
                </div>
                <div className="frame-parent2">
                  <div className="a-big-thank-you-for-dailydesi-wrapper">
                    <div className="a-big-thank-container">
                      <p className="a-big-thank-you-for-dailydesi">
                        <span className="a-big-thank">{`A big thank you for `}</span>
                        <span className="dailydesign-dd">{`@dailydesign_DD. `}</span>
                        <span>
                          Their professionalism, creativity, and attention to
                          detail are unmatched. I was nervous about the project
                          at first, but their team reassured me at meeting,
                          making sure I was happy with the progress. The final
                          product exceeded all my expectations. It’s elegant,
                          functional, and exactly what I needed.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="visit-link-parent">
                    <div className="visit-link">
                      <div className="bottom-testimonial">
                        <img
                          className="visit-ui-2-icon"
                          alt=""
                          src="/visit-ui-2@2x.png"
                        />
                        <img
                          className="visit-ui-1-icon"
                          alt=""
                          src="/visit-ui-1@2x.png"
                        />
                      </div>
                      <img
                        className="visit-ui-3-icon"
                        alt=""
                        src="/visit-ui-3@2x.png"
                      />
                    </div>
                    <div className="fourth-testimonial">
                      <div className="five-testimonial-parent">
                        <div className="five-testimonial">
                          <div className="link-312">View Project</div>
                          <div className="seventh-testimonial">
                            <img
                              className="seventh-testimonial-child"
                              alt=""
                              src="/group-1707478905.svg"
                            />
                          </div>
                        </div>
                        <div className="link-3121">NOV 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-one-content">
                <div className="img-verified-account" />
                <div className="container1" />
                <div className="link-x-ads-info-and-privacy" />
                <img
                  className="testimonial-one-content-child"
                  alt=""
                  src="/vector-3071.svg"
                />
                <div className="second-layer">
                  <div className="third-layer">
                    <div className="fourth-layer">
                      <img className="image-icon" alt="" src="/image@2x.png" />
                      <div className="fifth-layer">
                        <div className="sixth-layer">
                          <div className="container2">
                            <b className="abraham-john">{`Abraham John `}</b>
                          </div>
                          <div className="verification">
                            <div className="link2">
                              <div className="div">·</div>
                              <div className="manager">{`Manager @ `}</div>
                            </div>
                            <img
                              className="image-104199-icon"
                              alt=""
                              src="/image-104199@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="image-104021-icon"
                    alt=""
                    src="/image-104021@2x.png"
                  />
                </div>
                <div className="frame-parent2">
                  <div className="a-big-thank-you-for-dailydesi-wrapper">
                    <div className="a-big-thank-container">
                      <p className="a-big-thank-you-for-dailydesi">
                        <span className="a-big-thank">{`A big thank you for `}</span>
                        <span className="dailydesign-dd">{`@dailydesign_DD. `}</span>
                        <span>
                          Their professionalism, creativity, and attention to
                          detail are unmatched. I was nervous about the project
                          at first, but their team reassured me at meeting,
                          making sure I was happy with the progress. The final
                          product exceeded all my expectations. It’s elegant,
                          functional, and exactly what I needed.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="visit-link-parent">
                    <div className="visit-link">
                      <div className="bottom-testimonial">
                        <img
                          className="visit-ui-2-icon"
                          alt=""
                          src="/visit-ui-2@2x.png"
                        />
                        <img
                          className="visit-ui-1-icon"
                          alt=""
                          src="/visit-ui-1@2x.png"
                        />
                      </div>
                      <img
                        className="visit-ui-3-icon"
                        alt=""
                        src="/visit-ui-3@2x.png"
                      />
                    </div>
                    <div className="fourth-testimonial">
                      <div className="five-testimonial-parent">
                        <div className="five-testimonial">
                          <div className="link-312">View Project</div>
                          <div className="seventh-testimonial">
                            <img
                              className="seventh-testimonial-child"
                              alt=""
                              src="/group-1707478905.svg"
                            />
                          </div>
                        </div>
                        <div className="link-3121">NOV 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-one-content">
                <div className="img-verified-account" />
                <div className="container1" />
                <div className="link-x-ads-info-and-privacy" />
                <img
                  className="testimonial-one-content-child"
                  alt=""
                  src="/vector-3071.svg"
                />
                <div className="second-layer">
                  <div className="third-layer">
                    <div className="fourth-layer">
                      <img className="image-icon" alt="" src="/image@2x.png" />
                      <div className="fifth-layer">
                        <div className="sixth-layer">
                          <div className="container2">
                            <b className="abraham-john">{`Abraham John `}</b>
                          </div>
                          <div className="verification">
                            <div className="link2">
                              <div className="div">·</div>
                              <div className="manager">{`Manager @ `}</div>
                            </div>
                            <img
                              className="image-104199-icon"
                              alt=""
                              src="/image-104199@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="image-104021-icon"
                    alt=""
                    src="/image-104021@2x.png"
                  />
                </div>
                <div className="frame-parent2">
                  <div className="a-big-thank-you-for-dailydesi-wrapper">
                    <div className="a-big-thank-container">
                      <p className="a-big-thank-you-for-dailydesi">
                        <span className="a-big-thank">{`A big thank you for `}</span>
                        <span className="dailydesign-dd">{`@dailydesign_DD. `}</span>
                        <span>
                          Their professionalism, creativity, and attention to
                          detail are unmatched. I was nervous about the project
                          at first, but their team reassured me at meeting,
                          making sure I was happy with the progress. The final
                          product exceeded all my expectations. It’s elegant,
                          functional, and exactly what I needed.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="visit-link-parent">
                    <div className="visit-link">
                      <div className="bottom-testimonial">
                        <img
                          className="visit-ui-2-icon"
                          alt=""
                          src="/visit-ui-2@2x.png"
                        />
                        <img
                          className="visit-ui-1-icon"
                          alt=""
                          src="/visit-ui-1@2x.png"
                        />
                      </div>
                      <img
                        className="visit-ui-3-icon"
                        alt=""
                        src="/visit-ui-3@2x.png"
                      />
                    </div>
                    <div className="fourth-testimonial">
                      <div className="five-testimonial-parent">
                        <div className="five-testimonial">
                          <div className="link-312">View Project</div>
                          <div className="seventh-testimonial">
                            <img
                              className="seventh-testimonial-child"
                              alt=""
                              src="/group-1707478905.svg"
                            />
                          </div>
                        </div>
                        <div className="link-3121">NOV 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <TestimonialSlider testimonials={testimonials} />
            </div>
          </div>
          {/* <div className="experience">
            <div className="separator-four" />
            <img
              className="experience-child"
              alt=""
              src="/group-1707478906.svg"
            />
          </div> */}
        </div>
        <div className="experience-container py-5">
          <div className="year-parent">
            <div className="year">
              <div className="years-of-experience-container">
                <span className="years-of-experience-container1">
                  <span>{`10+Years of `}</span>
                  <span className="experience1">Experience</span>
                  <span> with Big Brands</span>
                </span>
              </div>
            </div>
            <div className="overlayshadow">
              <ScrollCarousel
                // smartSpeed={true}
                autoplay
                autoplaySpeed={80}
                speed={5}
                direction="ltr"
              >
                <div className="image-two">
                  <div className="rectangle-parent14">
                    <div className="frame-child36" />
                    <div className="logo-items">
                      <div className="first-logo">2019</div>
                    </div>
                    <img
                      className="image-102668-icon7"
                      alt=""
                      src="/image-102668@2x.png"
                    />
                  </div>
                </div>
                <div className="image-two">
                  <div className="rectangle-parent14">
                    <div className="frame-child36" />
                    <div className="logo-items">
                      <div className="first-logo">2019</div>
                    </div>
                    <img
                      className="image-102668-icon7"
                      alt=""
                      src="/image-102669@2x.png"
                    />
                  </div>
                </div>
                <div className="image-two">
                  <div className="rectangle-parent14">
                    <div className="frame-child36" />
                    <div className="logo-items">
                      <div className="first-logo">2020</div>
                    </div>
                    <img
                      className="image-102668-icon7"
                      alt=""
                      src="/image-102670@2x.png"
                    />
                  </div>
                </div>
                <div className="image-two">
                  <div className="rectangle-parent14">
                    <div className="frame-child36" />
                    <div className="logo-items">
                      <div className="first-logo">2020</div>
                    </div>
                    <img
                      className="image-102668-icon7"
                      alt=""
                      src="/image-103917@2x.png"
                    />
                  </div>
                </div>
                <div className="image-two">
                  <div className="rectangle-parent14">
                    <div className="frame-child36" />
                    <div className="logo-items">
                      <div className="first-logo">2021</div>
                    </div>
                    <img
                      className="image-102668-icon7"
                      alt=""
                      src="/image-103916@2x.png"
                    />
                  </div>
                </div>
                <div className="image-two">
                  <div className="rectangle-parent14">
                    <div className="frame-child36" />
                    <div className="logo-items">
                      <div className="first-logo">2022</div>
                    </div>
                    <img
                      className="image-102668-icon7"
                      alt=""
                      src="/image-102108@2x.png"
                    />
                  </div>
                </div>
                <div className="image-two">
                  <div className="rectangle-parent14">
                    <div className="frame-child36" />
                    <div className="logo-items">
                      <div className="first-logo">2021</div>
                    </div>
                    <img
                      className="image-102668-icon7"
                      alt=""
                      src="/image-102455@2x.png"
                    />
                  </div>
                </div>
                <div className="image-two">
                  <div className="rectangle-parent14">
                    <div className="frame-child36" />
                    <div className="logo-items">
                      <div className="first-logo">2022</div>
                    </div>
                    <img
                      className="image-102668-icon7"
                      alt=""
                      src="/kyndryl-logo-3@2x.png"
                    />
                  </div>
                </div>
                <div className="image-two">
                  <div className="rectangle-parent14">
                    <div className="frame-child36" />
                    <div className="logo-items">
                      <div className="first-logo">2021</div>
                    </div>
                    <img
                      className="image-102668-icon7"
                      alt=""
                      src="/image-103916@2x.png"
                    />
                  </div>
                </div>
              </ScrollCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nextforu;
