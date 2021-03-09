import React, { Component } from "react";
import Header from "../../layout/Header/Header";
import "./Project.scss";
import { getAll } from "../../api/projectApi";
import PageTransition from "../../layout/PageTransition/PageTransition";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectArr: [],
      isLoading: true,
      isActive: 0,
      top: -3,
      isWheeling: false,
    };
    this.handleOnWheel = this.handleOnWheel.bind(this);
    this.handleHintClick = this.handleHintClick.bind(this);
  }

  async componentDidMount() {
    try {
      const arr = await getAll();
      if (arr.length > 0) {
        this.setState({
          projectArr: arr,
          isLoading: false,
        });
      }
    } catch (error) {
      console.log("Falied to fetch project api", error);
    }
    const tl = gsap.timeline({ repeat: 0 });
    const slideImage = document.querySelectorAll(".project-view-image-wrap");
    const slideName = document.querySelectorAll(".project-name");
    const slideDes = document.querySelectorAll(".project-description");
    const slideTech = document.querySelectorAll(".project-technology");
    const slideLink = document.querySelectorAll(".project-link");
    const slideButton = document.querySelectorAll(".project-button");
    if (this.state.projectArr.length > 0) {
      this.state.projectArr.forEach((item, index) => {
        if (index > 0) {
          tl.to(slideName[index], { opacity: 0, duration: 0 });
          tl.to(slideDes[index], { opacity: 0, duration: 0 });
          tl.to(slideTech[index], { opacity: 0, duration: 0 });
          tl.to(slideLink[index], { opacity: 0, duration: 0 });
          tl.to(slideButton[index], { opacity: 0, duration: 0 });

          tl.to(slideImage[index], { width: 0, duration: 0 });
        }
      });
    }
  }
  handleAnimateProject(index) {
    const tl = gsap.timeline({ repeat: 0 });
    const slideImage = document.querySelectorAll(".project-view-image-wrap");
    const slideName = document.querySelectorAll(".project-name");
    const slideDes = document.querySelectorAll(".project-description");
    const slideTech = document.querySelectorAll(".project-technology");
    const slideLink = document.querySelectorAll(".project-link");
    const slideButton = document.querySelectorAll(".project-button");

    gsap
      .timeline({ repeat: 0 })
      .fromTo(
        slideName[this.state.isActive],
        1,
        {
          x: 0,
        },
        {
          x: "100%",

          opacity: 0,
          ease: "Power2.easeInOut",
          delay: 0.2,
        }
      )
      .play();
    gsap
      .timeline({ repeat: 0 })
      .fromTo(
        slideDes[this.state.isActive],
        1,
        {
          x: 0,
        },
        {
          x: "100%",

          opacity: 0,
          ease: "Power2.easeInOut",
          delay: 0.4,
        }
      )
      .play();
    gsap
      .timeline({ repeat: 0 })
      .fromTo(
        slideTech[this.state.isActive],
        1,
        {
          x: 0,
        },
        {
          x: "100%",

          opacity: 0,
          ease: "Power2.easeInOut",
          delay: 0.6,
        }
      )
      .play();
    gsap
      .timeline({ repeat: 0 })
      .fromTo(
        slideLink[this.state.isActive],
        1,
        {
          x: 0,
        },
        {
          x: "100%",

          opacity: 0,
          ease: "Power2.easeInOut",
          delay: 0.8,
        }
      )
      .play();
    gsap
      .timeline({ repeat: 0 })
      .fromTo(
        slideButton[this.state.isActive],
        1,
        {
          x: 0,
        },
        {
          x: "100%",
          opacity: 0,
          ease: "Power2.easeInOut",
          delay: 1,
        }
      )
      .play();
    gsap
      .timeline({ repeat: 0 })
      .fromTo(
        slideName[index],
        1,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "Power2.easeInOut",
          delay: 0.2,
        }
      )
      .play();
    gsap
      .timeline({ repeat: 0 })
      .fromTo(
        slideDes[index],
        1,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "Power2.easeInOut",
          delay: 0.4,
          onComplete: () => {
            this.setState({
              isWheeling: false,
            });
          },
        }
      )
      .play();
    gsap
      .timeline({ repeat: 0 })
      .fromTo(
        slideTech[index],
        1,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "Power2.easeInOut",
          delay: 0.6,
        }
      )
      .play();
    gsap
      .timeline({ repeat: 0 })
      .fromTo(
        slideLink[index],
        1,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "Power2.easeInOut",
          delay: 0.8,
        }
      )
      .play();
    gsap
      .timeline({ repeat: 0 })
      .fromTo(
        slideButton[index],
        1,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "Power2.easeInOut",
          delay: 1,
        }
      )
      .play();

    tl.fromTo(
      slideImage[this.state.isActive],
      1,
      {
        width: "480px",
        ease: "Power2.easeInOut",
      },
      {
        width: 0,
        ease: "Power2.easeInOut",
      }
    )
      .fromTo(
        slideImage[index],
        1,
        {
          width: 0,
        },
        {
          width: "480px",
          ease: "Power2.easeInOut",
        }
      )
      .play();
  }
  handleOnWheel(e) {
    if (!this.state.isWheeling) {
      const circle = document.getElementById("circle-active");
      if (e.deltaY > 0) {
        if (this.state.isActive >= this.state.projectArr.length - 1) {
          this.handleAnimateProject(0);
          circle.style.top = "-3px";
          this.setState({
            isActive: 0,
            top: -3,
            isWheeling: true,
          });
        } else {
          circle.style.top = `${this.state.top + 26}px`;
          this.handleAnimateProject(this.state.isActive + 1);
          this.setState({
            isActive: this.state.isActive + 1,
            top: this.state.top + 26,
            isWheeling: true,
          });
        }
      } else {
        if (this.state.isActive <= 0) {
          this.handleAnimateProject(this.state.projectArr.length - 1);
          circle.style.top = `${
            -3 + 26 * (this.state.projectArr.length - 1)
          }px`;
          this.setState({
            isActive: this.state.projectArr.length - 1,
            top: -3 + 26 * (this.state.projectArr.length - 1),
            isWheeling: true,
          });
        } else {
          circle.style.top = `${this.state.top - 26}px`;

          this.handleAnimateProject(this.state.isActive - 1);
          this.setState({
            isActive: this.state.isActive - 1,
            top: this.state.top - 26,
            isWheeling: true,
          });
        }
      }
    }
  }
  handleHintClick(index) {
    if (!this.state.isWheeling) {
      const circle = document.getElementById("circle-active");
      this.handleAnimateProject(index);
      circle.style.top = `${-3 + 26 * index}px`;
      this.setState({
        isActive: index,
        top: this.state.top - 26,
        isWheeling: true,
      });
    }
  }
  render() {
    return (
      <PageTransition>
        <Header>
          <div className="project-section landing-page section">
            <div className="project-container container">
              <div onWheel={this.handleOnWheel} className="project-slider">
                {this.state.projectArr.map((item, index) => (
                  <div
                    key={item.id}
                    className={
                      index === this.state.isActive
                        ? "project-slide is-active"
                        : "project-slide"
                    }
                  >
                    <div className="project-view-detail">
                      <div className="project-name">
                        <p>{item.name}</p>
                      </div>

                      <div className="project-description">
                        <p>{item.description}</p>
                      </div>
                      <div className="project-technology">
                        <div className="tech-list">
                          {item.technologies.map((tech, index2) => (
                            <div key={index2}>
                              <p>
                                <img src={tech.image} alt="" />
                                <span>{tech.name}</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="project-link">
                        <i className="fas fa-link"></i>
                        <a target="blank" href={item.url}>
                          {item.url}
                        </a>
                      </div>
                      <div className="project-button">
                        <NavLink to={`project/${item.id}`}>Watch work</NavLink>
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </div>
                    </div>
                    <div className="project-view-image">
                      <div className="project-view-image-wrap">
                        <img src={item.image} alt="" />
                        <NavLink
                          className="view-button"
                          to={`project/${item.id}`}
                        >
                          <Button>Explore</Button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="scroll-hint">
                  <div className="scroll-hint-wrap">
                    <div id="circle-active" className="circle-active"></div>
                    {this.state.projectArr.map((item, index) => (
                      <div
                        className="circle"
                        onClick={() => this.handleHintClick(index)}
                        key={index}
                      ></div>
                    ))}
                    <div className="scroll-line"></div>
                    <div className="scroll-hint-text">
                      <p>scroll to discover</p>
                    </div>
                  </div>
                </div>
                <div className="slide-side-text">
                  <p>Website / UI Design</p>
                </div>
              </div>
            </div>
          </div>
        </Header>
      </PageTransition>
    );
  }
}
