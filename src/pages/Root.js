import { useState } from "react";
import Benefit from "../components/Benefit";
import "../components/Root.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
import logopakcge1 from "../Images/pagepackege/logopakcge1.png";
import logopakcge2 from "../Images/pagepackege/logopakcge2.png";
import logopakcge3 from "../Images/pagepackege/logopakcge3.png";
import logopakcge4 from "../Images/pagepackege/logopakcge4.png";
const items = [
  {
    src: "/layer-2.svg",
    altText: "Start-up",
    caption: "Design Essentials",
    list1: "Logo with 3 variations",
    list2: "Business cards (Front & Back)",
    list3: "Company letterhead",
    list4: "Bill book design",
    list5: "Digital thumbnails",
    key: 1,
  },
  {
    src: "/group.svg",
    altText: "Social Media",
    caption: "Graphic Design",
    list1: "30 Days Design service /Month",
    list2: "20 Graphic Design Post",
    list3: "10 Videos - Mp4, GIF",
    list4: "Digital Thumbnails, Logo",
    list5: "Content Writing for Post",
    list6: "Revisions Accepted",
    list7: "Brand Guidance",
    key: 2,
  },
  {
    src: "/group1.svg",
    altText: "Festival",
    caption: "Wishes Design",
    list1: "50 Festival Creative Designs",
    list2: "10 Festival GIF",
    list3: "Customised Names & Photos",
    list4: "Customised Content Writing",
    list5: "Monthly Newsletters",
    key: 3,
  },
];
const items1 = [
  {
    src: "logopakcge1.png",
    altText: "Figma Design &",
    caption: "Prototype",
    list1: "Figma website design",
    list2: "Animations & prototype",
    list3: "Premium Stock images",
    list4: "Premium Stock GIF",
    list5: "SEO Content Writing",
    list6: "Revisions Accepted",
    key: 1,
  },
  {
    src: "logopakcge1.png",
    altText: "Design + <Dev.> +",
    caption: "Domain + Hosting",
    list1: "Design + Development",
    list2: "Edit your site on your own",
    list3: "Premium images (upto 100 images)",
    list4: "Premium videos (upto 20 videos)",
    list5: "Revisions Accepted",
    list6: "1 Year Maintainance",
    key: 2,
  },
  {
    src: "logopakcge4.png",
    altText: "Coded Website",
    caption: "Design + <Dev.>",
    list1: "Full website development",
    list2: "Full Figma design",
    list3: "Futuristic animations",
    list4: "React, React native Technology",
    list5: "Next JS > Technology",
    list6: "Full Source code",
    key: 3,
  },
];
const items2 = [
  {
    src: "logopakcge1",
    altText: "Figma Design &",
    caption: "Prototype",
    list1: "Business research & analysis",
    list2: "User research Case study",
    list3: "High-end Figma design",
    list4: "Customised icons + graphics",
    list5: "Customised cards, UI",
    list6: "Revision until satisfied",
    list7: "1 Year design updates",
    list8: "Unique Style Designs",
    key: 1,
  },
  {
    src: "logopakcge1",
    altText: "App Design",
    caption: "+ <Development>",
    list1: "Business research & analysis",
    list2: "User research Case study",
    list3: "High-end Figma design",
    list4: "Customised icons + graphics",
    list5: "Android & IOS App",
    list6: "React native, React Js, Next Js Tech",
    list7: "1 Year maintenance",
    list8: "Revision until satisfied",
    key: 2,
  },
  {
    src: "logopakcge4.png",
    altText: "Coded Website",
    caption: "Design + <Dev.>",
    list1: "Full website development",
    list2: "Full Figma design",
    list3: "Futuristic animations",
    list4: "React, React native Technology",
    list5: "Next JS > Technology",
    list6: "Full Source code",
    key: 3,
  },
];

const Root = () => {
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
        <div className="package-highlight11">
          <div className="service-card1">
            <div className="vector-parent">
              <img className="vector-icon" alt="" src="/vector-7467.svg" />
              <div className="title-and-body2" />
              <div className="frame-wrapper5">
                <div className="title-group">
                  <div className="title3">
                    <p className="festival">
                      {item.altText} {item.caption}
                    </p>
                    {/* <p className="wishes-design"></p> */}
                  </div>
                  <div className="group-wrapper">
                    <img className="group-icon2" alt="" src={item.src} />
                  </div>
                </div>
              </div>
              <div className="benefits1">
                <div className="benefit6">
                  <img className="check-icon11" alt="" src="/check.svg" />
                  <div className="benefit-child3" />
                  <div className="services-off11">{item.list1}</div>
                </div>
                <div className="benefit7">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="benefit-child4" />
                  <div className="services-off12">{item.list2}</div>
                </div>
                <div className="benefit8">
                  <img className="check-icon13" alt="" src="/check.svg" />
                  <div className="benefit-child5" />
                  <div className="services-off13">{item.list3}</div>
                </div>
                <div className="benefit9">
                  <img className="check-icon14" alt="" src="/check.svg" />
                  <div className="benefit-child6" />
                  <div className="services-off14">{item.list4}</div>
                </div>
                <div className="benefit10">
                  <img className="check-icon15" alt="" src="/check.svg" />
                  <div className="benefit-child7" />
                  <div className="services-off15">{item.list5}</div>
                </div>
                {item.key === 2 ? (
                  <>
                    <div className="benefit10">
                      <img className="check-icon15" alt="" src="/check.svg" />
                      <div className="benefit-child7" />
                      <div className="services-off15">{item.list6}</div>
                    </div>
                    <div className="benefit10">
                      <img className="check-icon15" alt="" src="/check.svg" />
                      <div className="benefit-child7" />
                      <div className="services-off15">{item.list7}</div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="enquire-now-container">
              <b className="enquire-now2">Enquire Now</b>
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
  const slides1 = items1.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="package-highlight11">
          <div className="service-card1">
            <div className="vector-parent">
              <img className="vector-icon" alt="" src="/vector-7467.svg" />
              <div className="title-and-body2" />
              <div className="frame-wrapper5">
                <div className="title-group">
                  <div className="title3">
                    <p className="festival">
                      {item.altText} {item.caption}
                    </p>
                    {/* <p className="wishes-design"></p> */}
                  </div>
                  <div className="group-wrapper">
                    {/* <img
                      className="group-icon2"
                      alt="logo"
                      src={require(`../Images/pagepackege/${item.src}`)}
                    /> */}
                  </div>
                </div>
              </div>
              <div className="benefits1">
                <div className="benefit6">
                  <img className="check-icon11" alt="" src="/check.svg" />
                  <div className="benefit-child3" />
                  <div className="services-off11">{item.list1}</div>
                </div>
                <div className="benefit7">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="benefit-child4" />
                  <div className="services-off12">{item.list2}</div>
                </div>
                <div className="benefit8">
                  <img className="check-icon13" alt="" src="/check.svg" />
                  <div className="benefit-child5" />
                  <div className="services-off13">{item.list3}</div>
                </div>
                <div className="benefit9">
                  <img className="check-icon14" alt="" src="/check.svg" />
                  <div className="benefit-child6" />
                  <div className="services-off14">{item.list4}</div>
                </div>
                <div className="benefit10">
                  <img className="check-icon15" alt="" src="/check.svg" />
                  <div className="benefit-child7" />
                  <div className="services-off15">{item.list5}</div>
                </div>
                {item.key === 2 ? (
                  <>
                    <div className="benefit10">
                      <img className="check-icon15" alt="" src="/check.svg" />
                      <div className="benefit-child7" />
                      <div className="services-off15">{item.list6}</div>
                    </div>
                    <div className="benefit10">
                      <img className="check-icon15" alt="" src="/check.svg" />
                      <div className="benefit-child7" />
                      <div className="services-off15">{item.list7}</div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="enquire-now-container">
              <b className="enquire-now2">Enquire Now</b>
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
  const slides2 = items2.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="package-highlight11">
          <div className="service-card1">
            <div className="vector-parent">
              <img className="vector-icon" alt="" src="/vector-7467.svg" />
              <div className="title-and-body2" />
              <div className="frame-wrapper5">
                <div className="title-group">
                  <div className="title3">
                    <p className="festival">
                      {item.altText} {item.caption}
                    </p>
                    {/* <p className="wishes-design"></p> */}
                  </div>
                  <div className="group-wrapper">
                    {/* <img
                      className="group-icon2"
                      alt="logo"
                      src={require(`../Images/pagepackege/${item.src}`)}
                    /> */}
                  </div>
                </div>
              </div>
              <div className="benefits1">
                <div className="benefit6">
                  <img className="check-icon11" alt="" src="/check.svg" />
                  <div className="benefit-child3" />
                  <div className="services-off11">{item.list1}</div>
                </div>
                <div className="benefit7">
                  <img className="check-icon12" alt="" src="/check.svg" />
                  <div className="benefit-child4" />
                  <div className="services-off12">{item.list2}</div>
                </div>
                <div className="benefit8">
                  <img className="check-icon13" alt="" src="/check.svg" />
                  <div className="benefit-child5" />
                  <div className="services-off13">{item.list3}</div>
                </div>
                <div className="benefit9">
                  <img className="check-icon14" alt="" src="/check.svg" />
                  <div className="benefit-child6" />
                  <div className="services-off14">{item.list4}</div>
                </div>
                <div className="benefit10">
                  <img className="check-icon15" alt="" src="/check.svg" />
                  <div className="benefit-child7" />
                  <div className="services-off15">{item.list5}</div>
                </div>
                {item.key === 2 ? (
                  <>
                    <div className="benefit10">
                      <img className="check-icon15" alt="" src="/check.svg" />
                      <div className="benefit-child7" />
                      <div className="services-off15">{item.list6}</div>
                    </div>
                    <div className="benefit10">
                      <img className="check-icon15" alt="" src="/check.svg" />
                      <div className="benefit-child7" />
                      <div className="services-off15">{item.list7}</div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="enquire-now-container">
              <b className="enquire-now2">Enquire Now</b>
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

  const [document1, setDocument1] = useState(true);
  const [document2, setDocument2] = useState(false);
  const [document3, setDocument3] = useState(false);
  const handleDocument1 = () => {
    setDocument1(true);
    setDocument2(false);
    setDocument3(false);
  };
  const handleDocument2 = () => {
    setDocument1(false);
    setDocument2(true);
    setDocument3(false);
  };
  const handleDocument3 = () => {
    setDocument1(false);
    setDocument2(false);
    setDocument3(true);
  };

  return (
    <div className="package">
      <div className="frame-parent10">
        <div className="our-creative-packages-have-sup-wrapper">
          <div className="our-creative-packages-container">
            <span className="our-creative-packages-container1">
              <p className="our-creative-packages">
                <b>Our Creative Packages</b>
              </p>
              <p className="have-supported-700">
                Have Supported 700+ Corporates
              </p>
            </span>
          </div>
        </div>
        <div className="frame-parent11">
          <div className="rectangle-parent4">
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <div className="rootflex">
                <div
                  className={document1 ? "service-icons" : "service-icons1"}
                  onClick={handleDocument1}
                >
                  <div className="development-name">
                    <img
                      className="design-icon"
                      alt=""
                      src="/design-icon.svg"
                    />
                  </div>
                  <div className="graphic-design1">{`Graphic Design `}</div>
                </div>
                <div
                  className={document2 ? "service-icons" : "service-icons1"}
                  onClick={handleDocument2}
                >
                  <div className="development-image-parent">
                    <div className="development-image">
                      <img className="image-icon3" alt="" src="/image.svg" />
                    </div>
                    <div className="website-development-service">
                      Website Development Service
                    </div>
                  </div>
                </div>
                <div
                  className={document3 ? "service-icons" : "service-icons1"}
                  onClick={handleDocument3}
                >
                  <div className="service-icons-inner">
                    <img
                      className="frame-child11"
                      alt=""
                      src="/group-1707478586.svg"
                    />
                  </div>
                  <div className="app-saas">APP / SAAS Development Service</div>
                </div>
              </div>
            </div>
            {document1 && (
              <>
                <div className="dflexclock">
                  <div className="package-highlight">
                    <Card className="service-detail">
                      <CardHeader className="border-0">
                        <div className="title-wrapper">
                          <div className="title">
                            <div className="title1">
                              <p className="start-up">Start-up</p>
                              <p className="design-essentials text-nowrap">
                                Design Essentials
                              </p>
                            </div>
                            <div className="layer-content">
                              <img
                                className="layer-2-icon"
                                alt=""
                                src="/layer-2.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <Benefit
                          check="/check.svg"
                          servicesOFF="Logo with 3 Variations"
                          check1="/check.svg"
                          servicesOFF1={`Business Cards (Front & Back)`}
                          check2="/check.svg"
                          servicesOFF2="Company letterhead"
                          check3="/check.svg"
                          servicesOFF3="Digital Thumbnails"
                          check4="/check.svg"
                          servicesOFF4="Bill book design"
                          check5="/check.svg"
                          servicesOFF5="Digital thumbnails"
                        />
                        <div
                          className="benefit-content1 mt-5"
                          style={{ visibility: "hidden" }}
                        >
                          <div className="check-parent">
                            <img
                              className="check-icon10"
                              alt=""
                              src="/check1.svg"
                            />
                            <b className="services-off10">Brand Guidance</b>
                          </div>
                        </div>
                      </CardBody>
                      <CardFooter className="border-0">
                        <div className="d-flex justify-content-center">
                          <div className="enquire-now-wrapper">
                            <b className="enquire-now">Enquire Now</b>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                    <Card className="service-detail">
                      <CardHeader className="border-0">
                        <div className="highlight-title">
                          <div className="highlight-title-content">
                            <div className="title-parent">
                              <b className="title2">
                                <p className="social-media">Social Media</p>
                                <p className="graphic-design">Graphic Design</p>
                              </b>
                              <div className="highlight-title-icon">
                                <img
                                  className="group-icon1"
                                  alt=""
                                  src="/group.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="highlight-title-child"
                            alt=""
                            src="/vector-7468.svg"
                          />
                        </div>
                      </CardHeader>
                      <CardBody>
                        <Benefit
                          check="/check1.svg"
                          servicesOFF="30 Days Design service /Month"
                          check1="/check1.svg"
                          servicesOFF1="20 Graphic Design Post"
                          check2="/check1.svg"
                          servicesOFF2="10 Videos - Mp4, GIF"
                          check3="/check1.svg"
                          servicesOFF3="Digital Thumbnails, Logo"
                          check4="/check1.svg"
                          servicesOFF4="Content Writing for Post"
                          servicesOFF5="Revisions Accepted"
                          propPadding="0px var(--padding-12xs) var(--padding-5xs-1) var(--padding-4xs)"
                          propPadding1="var(--padding-4xs-9) var(--padding-4xs) var(--padding-4xs) 0px"
                          propFontWeight="bold"
                          propFontWeight1="bold"
                          propFontWeight2="bold"
                          propFontWeight3="bold"
                          propPadding2="var(--padding-4xs-9) var(--padding-16xl) var(--padding-4xs) 0px"
                          propDisplay="unset"
                          propMinWidth="unset"
                          propFlex="1"
                          propFontWeight4="bold"
                        />
                        <div className="benefit-content1 mt-5">
                          <div className="check-parent">
                            <img
                              className="check-icon10"
                              alt=""
                              src="/check1.svg"
                            />
                            <b className="services-off10">Brand Guidance</b>
                          </div>
                        </div>
                      </CardBody>
                      <CardFooter className="border-0">
                        <div className="d-flex justify-content-center">
                          <div className="enquire-now-wrapperactive">
                            <b className="enquire-now">Enquire Now</b>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                    <Card className="service-detail">
                      <CardHeader className="border-0">
                        <div className="title-wrapper">
                          <div className="title">
                            <div className="title1">
                              <p className="start-up">Festival</p>
                              <p className="design-essentials text-nowrap">
                                Wishes Design
                              </p>
                            </div>
                            <div className="layer-content">
                              <img
                                className="layer-2-icon"
                                alt=""
                                src="/group1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <div className="benefits1">
                          <div className="benefit6">
                            <img
                              className="check-icon11"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child3" />
                            <div className="services-off11">
                              50 Festival Creative Designs
                            </div>
                          </div>
                          <div className="benefit7">
                            <img
                              className="check-icon12"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child4" />
                            <div className="services-off12">
                              10 Festival GIF
                            </div>
                          </div>
                          <div className="benefit8">
                            <img
                              className="check-icon13"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child5" />
                            <div className="services-off13">{`Customised Names & Photos`}</div>
                          </div>
                          <div className="benefit9">
                            <img
                              className="check-icon14"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child6" />
                            <div className="services-off14">
                              Content Writing for Design
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              Monthly Newsletters
                            </div>
                          </div>
                        </div>
                        <div
                          className="benefit-content1 mt-5 pt-3"
                          style={{ visibility: "hidden" }}
                        >
                          <div className="check-parent">
                            <img
                              className="check-icon10"
                              alt=""
                              src="/check1.svg"
                            />
                            <b className="services-off10">Brand Guidance</b>
                          </div>
                        </div>
                      </CardBody>
                      <CardFooter className="border-0">
                        <div className="d-flex justify-content-center">
                          <div className="enquire-now-wrapper">
                            <b className="enquire-now">Enquire Now</b>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </>
            )}
            {document2 && (
              <>
                <div className="dflexclock">
                  <div className="package-highlight">
                    <Card className="service-detail">
                      <CardHeader className="border-0">
                        <div className="title-wrapper">
                          <div className="title">
                            <div className="title1">
                              <p className="start-up">Figma Design &</p>
                              <p className="design-essentials text-nowrap">
                                Prototype
                              </p>
                            </div>
                            <div className="layer-content">
                              <img
                                className="layer-2-icon"
                                alt="logopakcge1"
                                src={logopakcge1}
                              />
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <div className="benefits1">
                          <div className="benefit7">
                            <div className="benefit-item1">
                              <img
                                className="check-icon5"
                                alt=""
                                src="/check.svg"
                              />
                              <div className="services-off5">
                                Figma website design
                              </div>
                            </div>
                          </div>
                          <div className="benefit7">
                            <div className="benefit-item1">
                              <img
                                className="check-icon5"
                                alt=""
                                src="/check.svg"
                              />
                              <div className="services-off5">
                                Animations & prototype
                              </div>
                            </div>
                          </div>
                          <div className="benefit7">
                            <div className="benefit-item1">
                              <img
                                className="check-icon5"
                                alt=""
                                src="/check.svg"
                              />
                              <div className="services-off5">
                                Premium Stock images
                              </div>
                            </div>
                          </div>
                          <div className="benefit7">
                            <div className="benefit-item1">
                              <img
                                className="check-icon5"
                                alt=""
                                src="/check.svg"
                              />
                              <div className="services-off5">
                                Premium Stock GIF
                              </div>
                            </div>
                          </div>
                          <div className="benefit7">
                            <div className="benefit-item1">
                              <img
                                className="check-icon5"
                                alt=""
                                src="/check.svg"
                              />
                              <div className="services-off5">
                                SEO Content Writing
                              </div>
                            </div>
                          </div>
                          <div className="benefit7">
                            <div className="benefit-item1">
                              <img
                                className="check-icon5"
                                alt=""
                                src="/check.svg"
                              />
                              <div className="services-off5">
                                Revisions Accepted
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                      <CardFooter className="border-0">
                        <div className="d-flex justify-content-center">
                          <div className="enquire-now-wrapper">
                            <b className="enquire-now">Enquire Now</b>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                    <Card className="service-detail">
                      <CardHeader className="border-0">
                        <div className="highlight-title">
                          <div className="highlight-title-content">
                            <div className="title-parent">
                              <b className="title2">
                                <p className="social-media">
                                  Design + {"<Dev.>"} +
                                </p>
                                <p className="graphic-design">
                                  Domain + Hosting
                                </p>
                              </b>
                              <div className="highlight-title-icon">
                                <img
                                  className="group-icon1"
                                  alt="logopakcge4"
                                  src={logopakcge4}
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="highlight-title-child"
                            alt=""
                            src="/vector-7468.svg"
                          />
                        </div>
                      </CardHeader>
                      <CardBody>
                        <Benefit
                          check="/check1.svg"
                          servicesOFF="Design + Development"
                          check1="/check1.svg"
                          servicesOFF1="Edit your site on your own"
                          check2="/check1.svg"
                          servicesOFF2="Premium images (upto 100 images)"
                          check3="/check1.svg"
                          servicesOFF3="Premium videos (upto 20 videos)"
                          check4="/check1.svg"
                          servicesOFF4="SEO content writing "
                          propPadding="0px var(--padding-12xs) var(--padding-5xs-1) var(--padding-4xs)"
                          propPadding1="var(--padding-4xs-9) var(--padding-4xs) var(--padding-4xs) 0px"
                          propFontWeight="bold"
                          propFontWeight1="bold"
                          propFontWeight2="bold"
                          propFontWeight3="bold"
                          propPadding2="var(--padding-4xs-9) var(--padding-16xl) var(--padding-4xs) 0px"
                          propDisplay="unset"
                          propMinWidth="unset"
                          propFlex="1"
                          propFontWeight4="bold"
                          check5="/check1.svg"
                          servicesOFF5="Revisions Accepted"
                        />
                        <div className="benefit-content mt-5">
                          <div className="highlight-benefit">
                            <img
                              className="check-icon9"
                              alt=""
                              src="/check1.svg"
                            />
                            <b className="services-off9">1 Year Maintainance</b>
                          </div>
                        </div>
                      </CardBody>
                      <CardFooter className="border-0">
                        <div className="d-flex justify-content-center">
                          <div className="enquire-now-wrapperactive">
                            <b className="enquire-now">Enquire Now</b>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>

                    <Card className="service-detail">
                      <CardHeader className="border-0">
                        <div className="title-wrapper">
                          <div className="title">
                            <div className="title1">
                              <p className="start-up">Coded Website</p>
                              <p className="design-essentials text-nowrap">
                                Design + {"<Dev.>"}
                              </p>
                            </div>
                            <div className="layer-content">
                              <img
                                className="layer-2-icon"
                                alt="logopakcge3"
                                src={logopakcge3}
                              />
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <div className="benefits1">
                          <div className="benefit6">
                            <img
                              className="check-icon11"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child3" />
                            <div className="services-off11">
                              Full website development
                            </div>
                          </div>
                          <div className="benefit7">
                            <img
                              className="check-icon12"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child4" />
                            <div className="services-off12">
                              Full Figma design
                            </div>
                          </div>
                          <div className="benefit8">
                            <img
                              className="check-icon13"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child5" />
                            <div className="services-off13">{`Futuristic animations`}</div>
                          </div>
                          <div className="benefit9">
                            <img
                              className="check-icon14"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child6" />
                            <div className="services-off14">
                              React, React native Technology
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              Next JS{">"} Technology
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              Full Source code
                            </div>
                          </div>
                        </div>
                      </CardBody>
                      <CardFooter className="border-0">
                        <div className="d-flex justify-content-center">
                          <div className="enquire-now-wrapper">
                            <b className="enquire-now">Enquire Now</b>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </>
            )}
            {document3 && (
              <>
                <div className="dflexclock">
                  <div className="package-highlight">
                    <Card className="service-detail">
                      <CardHeader className="border-0">
                        <div className="title-wrapper">
                          <div className="title">
                            <div className="title1">
                              <p className="start-up">Figma Design &</p>
                              <p className="design-essentials text-nowrap">
                                Prototype
                              </p>
                            </div>
                            <div className="layer-content">
                              <img
                                className="layer-2-icon"
                                alt="logopakcge1"
                                src={logopakcge1}
                              />
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <div className="benefits-container">
                          <div className="benefit-item1">
                            <img
                              className="check-icon5"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off5">
                              Business research & analysis
                            </div>
                          </div>
                          <div className="benefit-item2">
                            <img
                              className="check-icon6"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off6">
                              User research Case study
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              High-end Figma design
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              Customised icons + graphics
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              Customised cards, UI
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              Revision until satisfied
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              1 Year design updates
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              Unique Style Designs
                            </div>
                          </div>
                        </div>
                        <div
                          className="benefit-content1 mt-5"
                          style={{ visibility: "hidden" }}
                        >
                          <div className="check-parent">
                            <img
                              className="check-icon10"
                              alt=""
                              src="/check1.svg"
                            />
                            <b className="services-off10">Brand Guidance</b>
                          </div>
                        </div>
                      </CardBody>
                      <CardFooter className="border-0">
                        <div className="d-flex justify-content-center">
                          <div className="enquire-now-wrapper">
                            <b className="enquire-now">Enquire Now</b>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                    {/* <div className="service-card1">
                      <div className="vector-parent">
                        <img
                          className="service-detail-child"
                          alt=""
                          src="/vector-7462.svg"
                        />
                        <div className="title-and-body" />
                        <div className="title-wrapper">
                          <div className="title">
                            <div className="title1">
                              <p className="start-up"></p>
                              <p className="design-essentials"></p>
                            </div>
                            <div className="layer-content">
                              <img
                                className="layer-2-icon"
                                alt="logopakcge1"
                                src={logopakcge1}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="benefits-container">
                          <div className="benefit-item1">
                            <img
                              className="check-icon5"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off5">
                              Business research & analysis
                            </div>
                          </div>
                          <div className="benefit-item2">
                            <img
                              className="check-icon6"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off6">
                              User research Case study
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              High-end Figma design
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              Customised icons + graphics
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              Customised cards, UI
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              Revision until satisfied
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              1 Year design updates
                            </div>
                          </div>
                          <div className="benefit-item3">
                            <img
                              className="check-icon7"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="services-off7">
                              Unique Style Designs
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="enquire-now-wrapper">
                          <b className="enquire-now">Enquire Now</b>
                        </div>
                      </div>
                    </div> */}
                    <Card className="service-detail">
                      <CardHeader className="border-0">
                        <div className="title-wrapper">
                          <div className="title">
                            <div className="title1">
                              <p className="start-up">App Design</p>
                              <p className="design-essentials text-nowrap">
                                + {"<Development>"}
                              </p>
                            </div>
                            <div className="layer-content">
                              <img
                                className="layer-2-icon"
                                alt="logopakcge2"
                                src={logopakcge2}
                              />
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <div className="benefits1">
                          <div className="benefit6">
                            <img
                              className="check-icon11"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child3" />
                            <div className="services-off11">
                              Business research & analysis
                            </div>
                          </div>
                          <div className="benefit7">
                            <img
                              className="check-icon12"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child4" />
                            <div className="services-off12">
                              User research Case study
                            </div>
                          </div>
                          <div className="benefit9">
                            <img
                              className="check-icon14"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child6" />
                            <div className="services-off14">
                              High-end Figma design
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              Customised icons + graphics
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              Android & IOS App
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              React native, React Js, Next Js Tech
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              1 Year maintenance
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              Revision until satisfied
                            </div>
                          </div>
                        </div>
                        <div
                          className="benefit-content1 mt-5"
                          style={{ visibility: "hidden" }}
                        >
                          <div className="check-parent">
                            <img
                              className="check-icon10"
                              alt=""
                              src="/check1.svg"
                            />
                            <b className="services-off10">Brand Guidance</b>
                          </div>
                        </div>
                      </CardBody>
                      <CardFooter className="border-0">
                        <div className="d-flex justify-content-center">
                          <div className="enquire-now-wrapper">
                            <b className="enquire-now">Enquire Now</b>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                    {/* <div className="service-card1">
                      <div className="vector-parent">
                        <img
                          className="vector-icon"
                          alt=""
                          src="/vector-7467.svg"
                        />
                        <div className="frame-wrapper5">
                          <div className="title-group">
                            <div className="title3">
                              <p className="festival"></p>
                              <p className="wishes-design"></p>
                            </div>
                            <div className="group-wrapper">
                              <img
                                className="group-icon2"
                                alt="logopakcge2"
                                src={logopakcge2}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="benefits1">
                          <div className="benefit6">
                            <img
                              className="check-icon11"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child3" />
                            <div className="services-off11">
                              Business research & analysis
                            </div>
                          </div>
                          <div className="benefit7">
                            <img
                              className="check-icon12"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child4" />
                            <div className="services-off12">
                              User research Case study
                            </div>
                          </div>
                          <div className="benefit9">
                            <img
                              className="check-icon14"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child6" />
                            <div className="services-off14">
                              High-end Figma design
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              Customised icons + graphics
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              Android & IOS App
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              React native, React Js, Next Js Tech
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              1 Year maintenance
                            </div>
                          </div>
                          <div className="benefit10">
                            <img
                              className="check-icon15"
                              alt=""
                              src="/check.svg"
                            />
                            <div className="benefit-child7" />
                            <div className="services-off15">
                              Revision until satisfied
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="enquire-now-wrapper">
                          <b className="enquire-now">Enquire Now</b>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </>
            )}
            <div
              style={{ width: "100%", height: "100%" }}
              className="dflexnone"
            >
              {document1 && (
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
              )}
              {document2 && (
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
                  {slides1}

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
              )}
              {document3 && (
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
                  {slides2}

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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
