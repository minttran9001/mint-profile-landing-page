import React, { Component } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Header from "../../layout/Header/Header";
import "./Project.scss";
import {getAll} from "../../api/projectApi";
import PageTransition from "../../layout/PageTransition/PageTransition";
export default class Project extends Component {

    state = {
      projectArr: [],
      left: 0,
      isLoading: true,
    };
  
  async componentDidMount() {
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
  }

  render() {
    return (
      <PageTransition>
        <Header>
        <div className="project-section landing-page section">
          <div className="project-container container">
            <div className="section-heading font-sub">
              <p>Projects</p>
            </div>
            <div className="projects-wrap">
              <div id="slider" className="projects-box">
                {this.state.isLoading ? (
                  <div className="loading-icon">
                    <p>Loading ...</p>
                  </div>
                ) : (
                  <>
                    <div className="drag-notice">
                      <p>Click and drag</p>
                    </div>
                    {this.state.projectArr.map((item, index) => (
                      <ProjectCard
                        key={index}
                        projectId={item.id}
                        projectImage={item.image}
                        projectDescription={item.description}
                        projectName={item.name}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Header>
      </PageTransition>
    );
  }
}
