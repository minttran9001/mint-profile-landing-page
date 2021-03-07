import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import paint1 from "../../images/100ppi/paint-asset1.png";
import paint2 from "../../images/100ppi/paint-asset2.png";
import paint3 from "../../images/100ppi/paint-asset4.png";
import appchat from "../../images/100ppi/project-1.JPG";
import ceremony from "../../images/100ppi/project-2.JPG";
import mint from "../../images/100ppi/mint.JPG";
import logoRed from '../../images/100ppi/Logo red.png'
import arrowProject from "../../images/100ppi/arrow-red-asset3.png";
import gsap from "gsap";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(type) {
    const openBtn = document.querySelector(".open-menu");
    const closeBtn = document.querySelector(".close-menu");
    const menu = document.querySelector(".navigation");
    const navItem = document.querySelectorAll('.nav-item')
    
    const tl = gsap.timeline({repeat :0})

    

    if (type === "close") {
      closeBtn.classList.remove("is-active");
      openBtn.classList.add("is-active");
      menu.classList.remove("is-active");
      tl.to(navItem,1,{
        
        opacity : 0,
        stagger  : .5
      })
      
    } else {
      closeBtn.classList.add("is-active");
      openBtn.classList.remove("is-active");
      menu.classList.add("is-active");
      tl.fromTo(navItem,1,{
        opacity : 0,
      },{
        opacity : 1,
        stagger  : .2
      })
    }
  }
  render() {
    return (
      <>
        <header className="header">
          <div className="header-wrap">
          <NavLink to="/mint-profile-landing-page/exihibition" className="logo-area">
           <img src={logoRed} alt='logo'/>
          </NavLink>
          <div className="menu-button">
            <span
              onClick={() => this.toggleMenu("open")}
              className="menu-action open-menu is-active   "
            >
              Menu
            </span>
            <span
              onClick={() => this.toggleMenu("close")}
              className="menu-action close-menu "
            >
              Close
            </span>
          </div>
          <nav className="navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/mint-profile-landing-page/project" className="text-script">
                  <div className="nav-link">
                    <span>Projects</span>{" "}
                    <img className="arrow" src={arrowProject} alt="" />
                  </div>

                  <p>Projects</p>
                  <span>01</span>

                  <div className="project-preview preview-item">
                    <div className="image-wrap">
                      <img
                        className="project-image"
                        src={appchat}
                        alt="project"
                      />
                    </div>
                    <div className="image-wrap">
                      <img
                        className="project-image"
                        src={ceremony}
                        alt="project"
                      />
                    </div>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mint-profile-landing-page/about" className="text-script">
                  <div className="nav-link">
                    <span>About me</span>{" "}
                    <img className="arrow" src={arrowProject} alt="" />
                  </div>

                  <p>About me</p>
                  <span>02</span>
                  <div className="project-preview preview-item">
                    <div className="image-wrap">
                      <img src={mint} className="mint" alt="about-me" />
                    </div>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mint-profile-landing-page/say-hello" className="text-script">
                  <div className="nav-link">
                    <span>Say hello</span>{" "}
                    <img className="arrow" src={arrowProject} alt="" />
                  </div>

                  <p>Say hello</p>
                  <span>03</span>
                  <div className="project-preview preview-item">
                    <div className="image-wrap">
                      <img src={mint} className="mint" alt="about-me" />
                    </div>
                  </div>
                </NavLink>
              </li>
            </ul>
            <div className="paint-background">
              <img className="paint-1" src={paint1} alt="paint" />
              <img className="paint-2" src={paint2} alt="paint" />
              <img className="paint-3" src={paint3} alt="paint" />
            </div>
          </nav>
          </div>
        </header>
        {this.props.children}
      </>
    );
  }
}
