import React, { Component } from "react";
import Header from "../../layout/Header/Header";
import "./About.scss";
import Fb from "../../images/100ppi/facebook.png";
import Ig from "../../images/100ppi/Instagram.png";
import Mint from "../../images/100ppi/mint.JPG";
import laptop from "../../images/100ppi/about1.JPG";
import gsap from "gsap";
import ReactIcon from "../../images/100ppi/icons8-react-native-240.png";
import FirebaseIcon from "../../images/100ppi/icons8-firebase-240 (1).png";
import SkillImage from "../../images/100ppi/IMG_1165.JPG";
import SassIcon from "../../images/100ppi/icons8-sass-240.png";

import ReduxIcon from "../../images/100ppi/icons8-redux-240.png";
import PageTransition from "../../layout/PageTransition/PageTransition";
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startY: 0,
      slideIndex: 0,
      top: -3,
      isWheeling: false,
    };
    this.handleOnWheel = this.handleOnWheel.bind(this);
  }
  handleOnWheel(e) {
    if (!this.state.isWheeling) {
      const circle = document.getElementById("circle-active");

      const wrapper = document.getElementById("about-slide-wrap");
      if (e.deltaY > 0) {
        if (this.state.startY > -200) {
          wrapper.style.transform = `translateY(${this.state.startY - 100}vh)`;
          circle.style.top = `${this.state.top + 26}px`;
          this.handleAnimateElement(this.state.slideIndex + 1);
          this.setState({
            startY: this.state.startY - 100,
            slideIndex: this.state.slideIndex + 1,
            top: this.state.top + 26,
            isWheeling: true,
          });
        }
      } else {
        if (this.state.startY < 0) {
          circle.style.top = `${this.state.top - 26}px`;

          this.handleAnimateElement(this.state.slideIndex - 1);
          wrapper.style.transform = `translateY(${this.state.startY + 100}vh)`;
          this.setState({
            startY: this.state.startY + 100,
            slideIndex: this.state.slideIndex - 1,
            top: this.state.top - 26,
            isWheeling: true,
          });
        }
      }
    }
  }

  handleAnimateElement(index) {
    const tl = gsap.timeline({ repeat: 0 });
    const tl2 = gsap.timeline({ repeat: 0 });
    const before = document.querySelectorAll(".before");
    const content = document.querySelectorAll(".about-content");
    const image = document.querySelectorAll(".about-image");
    const heading = document.querySelectorAll(".heading-about");
    const line = document.querySelectorAll(".bottom-line");
    tl2.fromTo(
      image[index],
      0.5,
      {
        y: "150%",
      },
      {
        y: "0%",
        delay: 1.4,
      }
    );

    tl.fromTo(
      content[this.state.slideIndex],
      0.5,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: 50,
        opacity: 0,
      }
    ).play();

    tl.fromTo(
      content[index],
      0.5,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
      }
    )
      .fromTo(
        before[index],
        0.5,
        {
          width: "100%",
        },
        {
          width: "0",
        }
      )
      .fromTo(heading[index], 1, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        line[index],
        0.5,
        {
          width: 0,
        },
        {
          width: "35%",
          onComplete: () => {
            this.setState({
              isWheeling: false,
            });
          },
        }
      )
      .play();
  }
  handleClickSlide(index) {
    if(!this.state.isWheeling)
    {
      const circle = document.getElementById("circle-active");

    const wrapper = document.getElementById("about-slide-wrap");

    this.handleAnimateElement(index);
    circle.style.top = `${-3 + 26 * index}px`;
    wrapper.style.transform = `translateY(${-index * 100}vh)`;
    this.setState({
      startY: -index * 100,
      slideIndex: index,
      isWheeling: true,

      top: -3 + 26 * index,
    });
    }
  }

  render() {
    return (
      <PageTransition>
        <Header mode="dark">
          <div
            onWheel={this.handleOnWheel}
            className="about-section section landing-page"
          >
            <div className="about-container container">
              <div className="scroll-hint">
                <div className="scroll-hint-wrap">
                  <div id="circle-active" className="circle-active"></div>
                  <div
                    onClick={() => this.handleClickSlide(0)}
                    className="circle"
                  ></div>
                  <div
                    onClick={() => this.handleClickSlide(1)}
                    className="circle"
                  ></div>

                  <div
                    onClick={() => this.handleClickSlide(2)}
                    className="circle"
                  ></div>

                  <div className="scroll-line"></div>
                  <div className="scroll-hint-text">
                    <p>scroll to discover</p>
                  </div>
                </div>
              </div>
              <div className="slide-side-text">
                <p>All about me / My resume</p>
              </div>

              <div className="about-profile-wrap" id="about-slide-wrap">
                <div className="about-profile slide " id="slide">
                  <div className="about-content-wrap ">
                    <div className="about-content">
                      <div className="profile-description">
                        <p>Me at a glance</p>
                      </div>
                      <div className="section-heading-about  font-sub">
                        <p className="heading-about" data-text="About">
                          About
                        </p>
                        <div className="before"></div>
                      </div>
                      <div className="bottom-line"></div>
                      <div className="profile-name">
                        <p>Tran Thanh Minh</p>
                      </div>
                      <div className="profile-role">
                        <p>React Developer</p>
                      </div>
                      <div className="profile-description">
                        <p>
                          I am a UI designer and developer, born and raised in
                          Kontum Province, VietNam.
                          <br />
                          I have a passion for developing sites with clean,
                          beautiful code.
                          <br />
                          My love for front-end web development makes me a great
                          asset that can take on front-end UI
                        </p>
                      </div>

                      <div className="profile-social">
                        <div className="get-in-touch">
                          <p>GET IN TOUCH</p>
                        </div>
                        <a
                          href="https://www.facebook.com/profile.php?id=100011400712236"
                          target="blank"
                        >
                          <img src={Fb} alt="" />
                        </a>
                        <a
                          href="https://www.instagram.com/mint_stillwalks/"
                          target="blank"
                        >
                          <img src={Ig} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="about-image-wrap">
                    <div className="about-image">
                      <img className="about-img" src={Mint} alt="" />
                    </div>
                  </div>
                </div>
                <div className="about-profile slide" id="slide">
                  <div className="about-content-wrap">
                    <div className="about-content">
                      <div className="profile-description">
                        <p>Get to know me</p>
                      </div>
                      <div className="section-heading-about font-sub">
                        <p className="heading-about">My Information</p>{" "}
                        <div className="before"></div>
                      </div>

                      <div className="bottom-line"></div>
                      <div className="profile-description">
                        <p>
                          <span>Birth</span> : 7th July 99
                        </p>
                      </div>
                      <div className="profile-description">
                        <p>
                          <span>Address</span> : Thu Duc District, Ho Chi Minh
                          city
                        </p>
                      </div>
                      <div className="profile-description">
                        <p>
                          <span>Email</span> :{" "}
                          <a target="blank" href="https://mailto:minttran.9001@gmail.com">
                            {" "}
                            minttran.9002@gmail.com
                          </a>
                        </p>
                      </div>
                      <div className="profile-description">
                        <p>
                          <span>Git</span> :{" "}
                          <a
                            target="blank"
                            href="https://github.com/minttran9001"
                          >
                            {" "}
                            https://github.com/minttran9001
                          </a>
                        </p>
                      </div>
                      <div className="profile-description">
                        <p>
                          I am studying at University Information of Technology
                          (UIT) since 2017 with major is Infomation System. And
                          get started programming since 2020
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-image-wrap">
                    <div className="about-image">
                      <img className="about-img" src={laptop} alt="" />
                    </div>
                  </div>
                </div>
                <div className="about-profile slide" id="slide">
                  <div className="about-content-wrap">
                    <div className="about-content">
                      <div className="section-heading-about  font-sub">
                        <p className="heading-about">My Skills</p>{" "}
                        <div className="before"></div>
                      </div>
                      <div className="bottom-line"></div>
                      <div className="skill-languages">
                        <div className="skill-item">
                          <img src={ReactIcon} alt="" />
                          <span>Reactjs + React Native</span>
                        </div>
                        <div className="skill-item">
                          <img src={FirebaseIcon} alt="" />
                          <span>Firebase</span>
                        </div>
                        <div className="skill-item">
                          <img src={ReduxIcon} alt="" />
                          <span>React Redux</span>
                        </div>
                        <div className="skill-item">
                          <img src={SassIcon} alt="" />
                          <span>Sass</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-image-wrap">
                    <div className="about-image">
                      <img className="about-img" src={SkillImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Header>
      </PageTransition>
    );
  }
}
