import React, { Component } from "react";
import Header from "../../layout/Header/Header";
import "./Exhibition.scss";
import paint1 from "../../images/100ppi/paint1.png";
import paint2 from "../../images/100ppi/paint2.png";
import paint3 from "../../images/100ppi/paint3.png";
import paint4 from "../../images/100ppi/paint4.png";
import Button from "../../components/Button/Button"
import { NavLink } from "react-router-dom";
import PageTransition from "../../layout/PageTransition/PageTransition";

export default class Exhibition extends Component {
  render() {
    return (
      <PageTransition>
        <Header>
        <div className="exhibition-section landing-page section">
          <div className="qoute-container container">
            <div className="exhibition-qoute">
                <div className="qoute">
                    <p>Many of life’s failures are people who did not realize how close they were to success when they gave up.</p>
                </div>
                <NavLink className='qoute-link' to='/about'><Button>Explore</Button></NavLink>
            </div>
            <div className="paint-background">
              <img className="paint-1" src={paint1} alt="paint" />
              <img className="paint-2" src={paint2} alt="paint" />
              <img className="paint-3" src={paint3} alt="paint" />
              <img className="paint-4" src={paint4} alt="paint" />
            </div>
          </div>
        </div>
      </Header>
      </PageTransition>
    );
  }
}
