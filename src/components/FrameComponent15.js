import { useCallback } from "react";
import "./FrameComponent15.css";

const FrameComponent15 = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://linear.app/mobile");
  }, []);

  return (
    <div className="image-parent1">
      <img className="image-icon23" alt="" src="/image-22@2x.png" />
      <img className="image-icon24" alt="" src="/image-31@2x.png" />
      <div className="background19">
        <div className="margin4">
          <div className="container18">
            <div className="container19">
              <div className="container20">
                <div className="link43" onClick={onLinkContainerClick}>
                  <div className="container21">
                    <a
                      className="linear-mobile-v012"
                      href="https://linear.app/mobile"
                      target="_blank"
                    >
                      Linear Mobile v0.1
                    </a>
                  </div>
                  <div className="imgmargin2">
                    <div className="img2">
                      <img className="frame-icon2" alt="" src="/frame.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-1margin2">
                <div className="heading-12">
                  <div className="linear-is-a-container2">
                    <span>
                      <p className="linear-is-a2">Linear is a better way</p>
                      <p className="to-build-products2">to build products</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="margin5">
                <div className="container22">
                  <div className="meet-the-new-container2">
                    <span>
                      <p className="meet-the-new2">
                        Meet the new standard for modern software development.
                      </p>
                      <p className="streamline-issues-sprints2">
                        Streamline issues, sprints, and product roadmaps.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section9">
          <img className="container-icon16" alt="" src="/container@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent15;
