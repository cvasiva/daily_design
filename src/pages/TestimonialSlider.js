import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialComponent = ({ testimonials }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  const nextPage = () => {
    if (
      currentPage <
      Math.ceil(testimonials.length / testimonialsPerPage) - 1
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderTestimonials = () => {
    const startIndex = currentPage * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    const currentTestimonials = testimonials.slice(startIndex, endIndex);

    return (
      <div className="testimonial-container d-flex gap-3">
        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
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
                    <img
                      className="image-icon"
                      alt=""
                      src={testimonial.images.profile}
                    />
                    <div className="fifth-layer">
                      <div className="sixth-layer">
                        <div className="container2">
                          <b className="abraham-john">{testimonial.name}</b>
                        </div>
                        <div className="verification">
                          <div className="link2">
                            <div className="div">·</div>
                            <div className="manager">{testimonial.role} @</div>
                          </div>
                          <img
                            className="image-104199-icon"
                            alt=""
                            src={testimonial.images.verification}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="image-104021-icon"
                  alt=""
                  src={testimonial.images.icon}
                />
              </div>
              <div className="frame-parent2">
                <div className="a-big-thank-you-for-dailydesi-wrapper">
                  <div className="a-big-thank-container">
                    <p className="a-big-thank-you-for-dailydesi">
                      <span className="a-big-thank">{`A big thank you for `}</span>
                      <span className="dailydesign-dd">{`@dailydesign_DD. `}</span>
                      <span>{testimonial.text}</span>
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
                            src={testimonial.images.project}
                          />
                        </div>
                      </div>
                      <div className="link-3121">{testimonial.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="testimonial-wrapper">
      {renderTestimonials()}
      <div className="pagination-controls">
        <FaArrowLeft
          className="left-arrow"
          onClick={prevPage}
          disabled={currentPage === 0}
        />

        <FaArrowRight
          className="right-arrow"
          onClick={nextPage}
          disabled={
            currentPage ===
            Math.ceil(testimonials.length / testimonialsPerPage) - 1
          }
        />
      </div>
    </div>
  );
};

export default TestimonialComponent;
