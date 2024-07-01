/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import "./CTA.css";
import { FaChevronDown } from "react-icons/fa";

const CTA = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const title = [
    {
      id: 1,
      title:
        "What makes Design Monks different from other leading UI UX design agencies?",
      description:
        "We follow a user-centered design process that includes research, prototyping, testing, and iteration to create intuitive and engaging user experiences.",
    },
    {
      id: 2,
      title: "How does your UX design process work?",
      description:
        "We follow a user-centered design process that includes research, prototyping, testing, and iteration to create intuitive and engaging user experiences.",
    },
    {
      id: 3,
      title: "How much does a design project at your agency cost?",
      description:
        "Our project costs vary based on scope and complexity. Contact us for a customized quote tailored to your specific needs.",
    },
    {
      id: 4,
      title: "How can Design Monks support my startup?",
      description:
        "Design Monks can help your startup by providing expert UX/UI design, branding, and digital strategy to ensure your product stands out in the market.",
    },
    {
      id: 5,
      title:
        "Can you help us redesign our app, website, or enterprise/B2B software?",
      description:
        "Yes, we specialize in redesigning apps, websites, and enterprise/B2B software to enhance usability, performance, and aesthetics.",
    },
    {
      id: 6,
      title: "How soon can I expect my designs from Design Monks?",
      description:
        "The timeline depends on the project's complexity, but we strive to deliver initial designs within 2-4 weeks after project commencement.",
    },
    {
      id: 7,
      title: "What design tools do the Design Monks use?",
      description:
        "Our team uses industry-standard tools such as Sketch, Figma, Adobe XD, and InVision to create high-quality designs.",
    },
    {
      id: 8,
      title: "What if the design isn't quite right for me?",
      description:
        "We offer revision rounds to ensure the final design meets your expectations. Your feedback is crucial to our process.",
    },
    {
      id: 9,
      title:
        "I've heard Design Monks are design wizards. But do you also work with WordPress, create eCommerce sites, and develop apps?",
      description:
        "Yes, in addition to design, we offer development services for WordPress, eCommerce sites, and mobile apps to provide a comprehensive solution.",
    },
  ];

  const [toggle, setToggle] = useState({});

  useEffect(() => {
    if (!toggle) {
      var val = {};
      title.map((v) => (val[v.id] = false));
      setToggle(!val);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  const handledropdown = (item) => {
    setToggle({ ...toggle, [item.id]: !toggle[item.id] });
  };

  return (
    toggle && (
      <section className="c-t-a">
        <div className="section5">
          <div className="divprimary-cta-deco-wrap8">
            <div className="divprimary-cta-deco-line8" />
          </div>
          <div className="divprimary-cta-deco-wrap9">
            <div className="divprimary-cta-deco-line9" />
          </div>
          <div className="divprimary-cta-gradient4" />
          <div className="eee9d27c1241a14134c1f4-primary8">
            <div className="my-name-is-aravind-your-desig-parent3">
              <div className="my-name-is-container14">
                <span className="my-name-is-container15">
                  <p className="my-name-is8">My name is Aravind,</p>
                  <p className="your-design-manager-will-ans8">
                    <span className="your8">{`Your  `}</span>
                    <b className="design-manager8">Design Manager</b>
                    <span className="will-answer-all8">
                      {" "}
                      will answer all your questions.
                    </span>
                  </p>
                </span>
              </div>
              <a
                href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask questions via WhatsApp"
                style={{ textDecoration: "none" }}
              >
                <button className="ask-button">
                  <div className="ask-questions-text">Ask Questions</div>
                  <img
                    className="whatsapp-icon"
                    alt="WhatsApp Icon"
                    src="/svg-2@2x.png"
                  />
                </button>
              </a>
              <img
                className="container-icon9"
                alt="container"
                src="/container-1@2x.png"
              />
            </div>
          </div>
          <div className="eee9d27c1241a14134c1f4-primary9">
            <img className="image-icon15" alt="container" src="/image-6@2x.png" />
            <div className="hero-content">
              <div className="hero-inner-container-parent">
                <div className="hero-inner-container">
                  <div className="container-frame">
                    <img
                      className="container-icon10"
                      alt="container"
                      src="/container-2@2x.png"
                    />
                  </div>
                  <div className="my-name-is-container16">
                    <p className="my-name-is9">My name is Aravind,</p>
                    <p className="your-design-manager-will-ans9">
                      <span className="your9">{`Your  `}</span>
                      <b className="design-manager9">Design Manager</b>
                      <span className="will-answer-all9">
                        {" "}
                        will answer all your questions.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="ask-button-container">
                    <a
                      href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ask questions via WhatsApp"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="link19">
                        <div className="ask-questions10">Ask Questions</div>
                        <div className="ask-button-icon-container">
                          <img
                            className="svg-icon15"
                            alt="container"
                            src="/svg-3@2x.png"
                          />
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img className="image-icon16" alt="logo" src="/image-7@2x.png" />
          </div>
        </div>
        <div className="faq-title">
          <h1 className="heading-2">Frequently asked question</h1>
          <div className="faq-container">
            <div className="faq-list">
              {title.map((item, index) => (
                <div key={index} className="background4 p-4">
                  <div className="faq-question-last">
                    <div className="what-makes-design">{item.title}</div>
                    <div className="faq-icon-last-container">
                      <div
                        className="symbol15"
                        onClick={() => handledropdown(item)}
                        style={{ cursor: "pointer" }}
                      >
                        <FaChevronDown />
                      </div>
                    </div>
                  </div>
                  {toggle[item.id] && (
                    <div className="at-design-monks-container">
                      <p className="at-design-monks">{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default CTA;
