import React, { Component } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Header from "../../layout/Header/Header";
import "./Project.scss";
import chatApp from "../../images/100ppi/appchat.PNG";
import coffeeShop from "../../images/100ppi/ceremony.PNG";
import paint1 from "../../images/100ppi/paint1.png";
import paint2 from "../../images/100ppi/paint2.png";
import paint3 from "../../images/100ppi/paint3.png";
import paint4 from "../../images/100ppi/paint4.png";
export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectArr: [
        {
          image: chatApp,
          name: "Realtime Chat Application",
          id: 1,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem",
        },
        {
          image: coffeeShop,
          id: 2,
          name: "Ceremony Coffee Website",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem",
        },
        {
          image: coffeeShop,
          id: 2,
          name: "Ceremony Coffee Website",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem",
        },
        {
          image: coffeeShop,
          id: 2,
          name: "Ceremony Coffee Website",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem",
        },
        {
          image: coffeeShop,
          id: 2,
          name: "Ceremony Coffee Website",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem",
        },
      ],
      left: 0,
    };
  }
  componentDidMount() {
    const slider = document.getElementById("slider");
    const cursor = document.querySelector(".cursor");
    slider.addEventListener("mousedown", (e) => {
      this.startX = e.pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
      this.isDown = true;

      cursor.classList.add("dragging");
    });
    slider.addEventListener("mouseleave", () => {
      cursor.classList.remove("dragging");
      this.isDown = false;
    });
    slider.addEventListener("mouseup", () => {
      cursor.classList.remove("dragging");
      this.isDown = false;
    });
    slider.addEventListener("mousemove", (e) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - this.startX) / 20;
      this.setState(
        { left: this.state.left + (this.scrollLeft - walk) },
        () => {
          const sliderClone = document.querySelector(".projects-wrap");
          sliderClone.scrollLeft = this.state.left;
        }
      );
    });
  }

  render() {
    return (
      <Header>
        <div className="project-section landing-page section">
          <div className="project-container container">
            <div className="section-heading font-sub">
              <p>Projects</p>
            </div>
            <div className="projects-wrap">
                
              <div id="slider" className="projects-box">

              <div className="drag-notice">
                    <p>Click and drag</p>
                </div>
                {this.state.projectArr.map((item, index) => (
                  <ProjectCard
                    key={index}
                    projectPath={`/project/${item.id}`}
                    projectImage={item.image}
                    projectDescription={item.description}
                    projectName={item.name}
                  />
                ))}
              </div>
            </div>
            <div className="paint-background">
              <img className="paint-2" src={paint2} alt="paint" />
              <img className="paint-3" src={paint3} alt="paint" />
              <img className="paint-4" src={paint4} alt="paint" />
            </div>
          </div>
        </div>
      </Header>
    );
  }
}
