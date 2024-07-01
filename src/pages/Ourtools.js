import React from 'react'
import "./Ourtools.css"
import DevelopmentTechnologyIcons from '../components/DevelopmentTechnologyIcons'

const Ourtools = () => {
  return (
    <div className="vector-group">
      <img className="vector-icon1" alt="" src="/vectorside.svg" />
      <img className="vector-icon2" alt="" src="/vector1.svg" />
      <div className="specialization-title-container">
        <div className="our-specialization-container">
          <span>{`Our Specialization - `}</span>
          <b>Tools</b>
        </div>
        <div className="specialization-subtitle-contai">
          <div className="serving-customized-needs">
            Serving customized needs for start-ups
          </div>
        </div>
      </div>
      <div className="technologies-container">
        <div className="development-technologies-conta">
          <div className="development-technologies">
            <DevelopmentTechnologyIcons
              divgroup="/divgroup.svg"
              visualStudio="Visual Studio"
            />
            <DevelopmentTechnologyIcons
              divgroup="/divgroup1.svg"
              visualStudio="React"
              propFlex="1"
              
              propPadding="0px var(--padding-smi) 0px var(--padding-sm)"
            />
            <DevelopmentTechnologyIcons
              divgroup="/divgroup2.svg"
              visualStudio="Java Script"
              propFlex="1"
              
              propPadding="0px var(--padding-smi) 0px var(--padding-sm)"
            />
            <DevelopmentTechnologyIcons
              divgroup="/divgroup3.svg"
              visualStudio="HTML"
              propFlex="1"
              
              propPadding="0px var(--padding-sm) 0px var(--padding-smi)"
            />
            <div className="development-technology-icons1">
              <div className="divgroup-wrapper">
                <div className="divgroup">
                  <img
                    className="image-104215-icon"
                    alt=""
                    src="/image-104215@2x.png"
                  />
                </div>
              </div>
              <div className="next-js">Next JS</div>
            </div>
          </div>
          <div className="design-technologies-container">
            <div className="design-technologies">
              <DevelopmentTechnologyIcons
                divgroup="/divgroup4.svg"
                visualStudio="Figma"
                propFlex="unset"
                propMinWidth="unset"
                propPadding="0px var(--padding-smi) 0px var(--padding-sm)"
              />
              {/* <div className="design-technology-icons">
                <div className="divgroup-container">
                  <div className="divgroup1">
                    <img
                      className="divgroup-child"
                      alt=""
                      src="/group-1707478957.svg"
                    />
                  </div>
                </div>
                <div className="visual-studio1">Visual Studio</div>
              </div> */}
              <DevelopmentTechnologyIcons
                divgroup="/group-1707478957.svg"
                visualStudio="Visual Studio"
                propFlex="unset"
                propMinWidth="unset"
                propPadding="0px var(--padding-smi) 0px var(--padding-sm)"
              />
              <DevelopmentTechnologyIcons
                divgroup="/divgroup5.svg"
                visualStudio="Visual Studio"
                propFlex="unset"
                propMinWidth="unset"
                propPadding="0px var(--padding-smi) 0px var(--padding-sm)"
              />
              <DevelopmentTechnologyIcons
                divgroup="/divgroup6.svg"
                visualStudio="Visual Studio"
                propFlex="unset"
                propMinWidth="unset"
                propPadding="0px var(--padding-sm) 0px var(--padding-smi)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourtools