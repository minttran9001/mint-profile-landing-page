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
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(type) {
    const openBtn = document.querySelector(".open-menu");
    const closeBtn = document.querySelector(".close-menu");
    const menu = document.querySelector(".navigation");
    if (type === "close") {
      closeBtn.classList.remove("is-active");
      openBtn.classList.add("is-active");
      menu.classList.remove("is-active");
    } else {
      closeBtn.classList.add("is-active");
      openBtn.classList.remove("is-active");
      menu.classList.add("is-active");
    }
  }
  render() {
    return (
      <>
        <header className="header">
          <div className="header-wrap">
          <NavLink to="/" className="logo-area">
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
                <NavLink to="/project" className="text-script">
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
                <NavLink to="/about" className="text-script">
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
                <NavLink to="/all" className="text-script">
                  <div className="nav-link">
                    <span>All in this together</span>{" "}
                    <img className="arrow" src={arrowProject} alt="" />
                  </div>

                  <p>All in this together</p>
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
