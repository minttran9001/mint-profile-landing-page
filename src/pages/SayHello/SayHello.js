import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../layout/Header/Header";
import PageTransition from "../../layout/PageTransition/PageTransition";
import "./SayHello.scss";
import coffee from "../../images/100ppi/lets-have-a-tea-769.png";
import gsap from "gsap";
export default class SayHello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWheeling: false,
      isActive: 0,
      top: -3,
    };
    this.handleOnWheel = this.handleOnWheel.bind(this);
    this.handleAnimateSlide = this.handleAnimateSlide.bind(this);
    this.handleHintClick = this.handleHintClick.bind(this);
  }
  componentDidMount() {
    const tl = gsap.timeline({ repeat: 0 });
    const unactiveSlide = document.querySelectorAll(".hello-slide");
    for (let i = 1; i <= 3; i++) {
      tl.to(unactiveSlide[i], {
        opacity: 0,
        duration: 0,
      });
    }
  }
  handleOnWheel(e) {
    if (!this.state.isWheeling) {
      const slide = document.querySelectorAll(".hello-slide");
      const circle = document.getElementById("circle-active");
      if (e.deltaY > 0) {
        if (this.state.isActive >= slide.length - 1) {
          circle.style.top = "-3px";
          this.handleAnimateSlide(0, slide);
          this.setState({
            isActive: 0,
            isWheeling: true,
            top: -3,
          });
        } else {
          circle.style.top = `${this.state.top + 26}px`;
          this.handleAnimateSlide(this.state.isActive + 1, slide);
          this.setState({
            isActive: this.state.isActive + 1,
            isWheeling: true,
            top: this.state.top + 26,
          });
        }
      } else {
        if (this.state.isActive <= 0) {
          circle.style.top = `${-3 + 26 * (slide.length - 1)}px`;
          this.handleAnimateSlide(slide.length - 1, slide);
          this.setState({
            isActive: slide.length - 1,
            isWheeling: true,
            top: -3 + 26 * (slide.length - 1),
          });
        } else {
          circle.style.top = `${this.state.top - 26}px`;
          this.handleAnimateSlide(this.state.isActive - 1, slide);
          this.setState({
            isActive: this.state.isActive - 1,
            isWheeling: true,
            top: this.state.top - 26,
          });
        }
      }
    }
  }
  handleAnimateSlide(index, slide) {
    const tl = gsap.timeline({ repeat: 0 });
    const curP = slide[this.state.isActive].querySelectorAll("p");
    const tl2 = gsap.timeline({ repeat: 0 });
    const nextP = slide[index].querySelectorAll("p");
    const image1 = slide[this.state.isActive].querySelector(".slide-image");

    const image2 = slide[index].querySelector(".slide-image");
    slide[this.state.isActive].classList.remove("is-active");
    slide[index].classList.add("is-active");

    tl.to(curP, 0.8, {
      y: "-150%",
      opacity: 0,
      stagger: 0.1,
      ease: "Power2.easeInOut",
    })
      .to(slide[index], {
        opacity: 1,
        duration: 0,
      })
      .fromTo(
        nextP,
        0.8,
        {
          y: "-150%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.1,
          ease: "Power2.easeInOut",
          onComplete: () => {
            this.setState({
              isWheeling: false,
            });
          },
        }
      );

    if (image1) {
      tl2.fromTo(
        image1,
        0.5,
        {
          y: 0,
          opacity: 1,
        },
        {
          opacity: 0,
          y: -50,
        }
      );
    }
    if (image2) {
      tl2.fromTo(
        image2,
        0.5,
        {
          opacity: 0,
          y: -50,
        },
        {
          y: 0,
          opacity: 1,
          delay: 1,
        }
      );
    }
  }
  handleHintClick(index) {
    
    if (!this.state.isWheeling) {
      const slide = document.querySelectorAll(".hello-slide");
      const circle = document.getElementById("circle-active");
      circle.style.top = `${-3 + 26 * index}px`;
      this.handleAnimateSlide(index, slide);
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
          <div className="sayhello-section section landing-page">
            <div className="sayhello-container container">
              <div className="scroll-hint">
                <div className="scroll-hint-wrap">
                  <div id="circle-active" className="circle-active"></div>
                  <div
                    onClick={() => this.handleHintClick(0)}
                    className="circle"
                  ></div>
                  <div
                    onClick={() => this.handleHintClick(1)}
                    className="circle"
                  ></div>
                  <div
                    onClick={() => this.handleHintClick(2)}
                    className="circle"
                  ></div>
                  <div
                    onClick={() => this.handleHintClick(3)}
                    className="circle"
                  ></div>
                  <div className="scroll-line"></div>
                  <div className="scroll-hint-text">
                    <p>scroll to discover</p>
                  </div>
                </div>
              </div>
              <div
                onWheel={this.handleOnWheel}
                className="say-hello-slider slider"
              >
                <div className="hello-slide slide">
                  <div className="slide-text-only">
                    <div className="text-wrap head">
                      <p className="text-first ">let's</p>
                    </div>
                    <div className="text-wrap">
                      <p className="text-second">create</p>
                    </div>
                    <div className="text-wrap">
                      <p className="text-third">something</p>
                    </div>
                  </div>
                </div>
                <div className="hello-slide slide">
                  <div className="slide-text-only">
                    <div className="text-wrap head">
                      <p className="text-first ">You can find me on</p>
                    </div>
                    <div className="text-wrap">
                      <p className="text-second">
                        <NavLink to="#">facebook</NavLink>
                      </p>
                    </div>
                    <div className="text-wrap">
                      <p className="text-third">
                        <NavLink to="#">instagram</NavLink>
                      </p>
                    </div>
                    <div className="text-wrap">
                      <p className="text-four">
                        <NavLink to="#">github</NavLink>
                      </p>
                    </div>
                    <div className="text-wrap">
                      <p className="text-fifth">
                        <NavLink to="#">gmail</NavLink>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hello-slide slide">
                  <div className="slide-text-only">
                    <div className="slide-image">
                      <img src={coffee} alt="cup of coffee" />
                    </div>
                    <div className="text-wrap">
                      <p className="text-first">Or we just have a</p>
                    </div>
                    <div className="text-wrap">
                      <p className="text-second">cup of tea together</p>
                    </div>
                    <div className="text-wrap">
                      <p className="text-third">and talk about</p>
                    </div>
                    <div className="text-wrap">
                      <p className="text-four">
                        <NavLink to="#">your project</NavLink>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hello-slide slide slide-full">
                  <div className="slide-text-only">
                    <div className="text-wrap">
                      <p className="text-four">
                        Feal free drop{" "}
                        <a target="black" href='https://mailto:minttran.9001@gmail.com'>
                          a line!
                        </a>
                      </p>
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
