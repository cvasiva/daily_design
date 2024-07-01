import { useCallback } from "react";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://linear.app/mobile");
  }, []);

  return (
    <div className="rectangle-parent14">
      <div className="frame-child38" />
      <div className="inner-content">
        <div className="background15">
          {/* <img className="image-icon17" alt="" src="/image@2x.png" /> */}
          {/* <img className="image-icon18" alt="" src="/image-11@2x.png" /> */}
          <div className="margin2">
            <div className="container13">
              <div className="container14">
                <div className="container15">
                  <div className="link30" onClick={onLinkContainerClick}>
                    <div className="container16">
                      <a
                        className="linear-mobile-v011"
                        href="https://linear.app/mobile"
                        target="_blank"
                      >
                        Linear Mobile v0.1
                      </a>
                    </div>
                    <div className="imgmargin1">
                      <div className="img1">
                        <img className="frame-icon1" alt="" src="/frame.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-1margin1">
                  <div className="heading-11">
                    <div className="linear-is-a-container1">
                      <span>
                        <p className="linear-is-a1">Linear is a better way</p>
                        <p className="to-build-products1">to build products</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="margin3">
                  <div className="container17">
                    <div className="meet-the-new-container1">
                      <span>
                        <p className="meet-the-new1">
                          Meet the new standard for modern software development.
                        </p>
                        <p className="streamline-issues-sprints1">
                          Streamline issues, sprints, and product roadmaps.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section6">
            <img className="container-icon11" alt="" src="/container@2x.png" />
          </div>
          <div className="lets-create-trend">Let’s Create Trend!</div>
          <div className="statistics-content">36</div>
          <div className="contracts-signed">Contracts Signed</div>
          <div className="statistics-content1">98.6%</div>
          <div className="customer-retention-rate">Customer Retention Rate</div>
          <div className="statistics-content2">100%</div>
          <div className="cost-effectiveness-parent">
            <div className="cost-effectiveness">Cost Effectiveness</div>
            <img className="vector-icon23" alt="" src="/vector1.svg" />
          </div>
          <div className="design-for-digital">{`Design  for Digital Presence `}</div>
        </div>
        <img className="inner-content-child" alt="" src="/vector-3067.svg" />
        <img className="inner-content-item" alt="" src="/vector-3068.svg" />
        <img
          className="inner-content-inner"
          loading="lazy"
          alt=""
          src="/group-1707478546.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent7;
