import React, { Component } from "react";
import Header from "../../layout/Header/Header";
import "./ProjectDetail.scss";
import videoTest from "../../images/100ppi/React App - Opera 2021-02-26 22-42-31.mp4";
import playBtnImg from "../../images/100ppi/play button1.png";
import stopBtnImg from "../../images/100ppi/stop button2.png";
import pauseBtnImg from "../../images/100ppi/pause.png";
import volBtnImg from "../../images/100ppi/volume 1.png";
import bigFrame from "../../images/100ppi/big frame2_1.png";
import exitBtnImg from "../../images/100ppi/exit5.png";
import projectApi from "../../api/projectApi";
export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      playing: false,
      currentTime: 0,
      project: {},
    };
    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.getProjectById = this.getProjectById.bind(this);
  }
  componentDidMount() {
    const video = document.getElementById("project-video");

    video.addEventListener("timeupdate", () => {
      if (video.readyState > 0) {
        this.setState({
          currentTime: video.currentTime,
          duration: video.duration,
        });
      }
      if (
        Math.round(this.state.currentTime) === Math.round(this.state.duration)
      ) {
        this.setState({
          playing: false,
        });
      }
    });
    this.getProjectById();
  }
  async getProjectById() {
    const project = await projectApi.getProjectById(this.props.match.params.id);
    this.setState({
      project,
    });
  }
  playVideo() {
    const video = document.getElementById("project-video");
    this.setState({
      playing: true,
    });
    video.play();
  }
  pauseVideo() {
    const video = document.getElementById("project-video");
    this.setState({
      playing: false,
    });
    video.pause();
  }

  openFull() {
    const i = document.querySelector(".project-detail-container");
    const video = document.getElementById("project-video");
    const tab = document.querySelector(".video-play-tab");
    let timeout = 0;
    i.classList.add("full-frame");
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      // Need this to support Safari
      document.webkitExitFullscreen();
    } else if (i.webkitRequestFullscreen) {
      // Need this to support Safari
      i.webkitRequestFullscreen();
    } else {
      i.requestFullscreen();
    }
    const showControls = () => {
      tab.classList.add("mouse-move");
      clearTimeout(timeout);
      hideControls();
    };
    const hideControls = () => {
      timeout = setInterval(() => {
        tab.classList.remove("mouse-move");
        clearInterval(timeout);
      }, 3000);
    };

    video.addEventListener("mouseenter", showControls);
    video.addEventListener("mouseleave", hideControls);
    video.addEventListener("mousemove", showControls);
  }

  closeFull() {
    const video = document.getElementById("project-video");
    const i = document.querySelector(".project-detail-container");
    i.classList.remove("full-frame");
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      // Need this to support Safari
      document.webkitExitFullscreen();
    } else if (video.webkitRequestFullscreen) {
      // Need this to support Safari
      video.webkitRequestFullscreen();
    } else {
      video.requestFullscreen();
    }
  }
  render() {
    console.log(this.state.project)
    return (
      <Header>
        <div className="project-detail-section landing-page">
          <div className="project-detail-container">
            <div className="project-preview-video">
              <img
                className="close-btn"
                onClick={this.closeFull}
                src={exitBtnImg}
                alt=""
              />
              <video
                id="project-video"
                className="project-video"
                src={this.state.project.video}
                autoPlay={false}
              ></video>
            </div>
            <div className="video-play-tab">
              <p className="title">{this.state.project.name}</p>
              <div className="control-tab">
                <div className="control-button">
                  <img src={stopBtnImg} alt="" />
                  <img
                    onClick={
                      this.state.playing ? this.pauseVideo : this.playVideo
                    }
                    src={this.state.playing ? pauseBtnImg : playBtnImg}
                    alt=""
                  />
                </div>
                <div className="track-line">
                  <div className="duration-line"></div>
                  <div
                    style={{
                      width:
                        (this.state.currentTime / this.state.duration) * 100 +
                        "%",
                    }}
                    className="current-line"
                  ></div>
                </div>
                <div id="demo" className="time-line">
                  <p>
                    {" "}
                    {new Date(Math.round(this.state.currentTime) * 1000)
                      .toISOString()
                      .substr(11, 8)}
                  </p>
                </div>
                <div className="vol-button">
                  <img src={volBtnImg} alt="" />
                  <img
                    onClick={this.openFull}
                    src={bigFrame}
                    alt="full frame btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}
