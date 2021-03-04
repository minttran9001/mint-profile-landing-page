import React, { Component } from "react";
import { motion } from "framer-motion";
import Logowhite from "../../images/100ppi/Logo white.png";
export default class PageTransition extends Component {
  render() {
    const blackBox = {
      initial: {
        height: "100vh",
      },
      animate: {
        height: 0,

        transition: {
          delay: 1,
          duration: 1.5,

          ease: [0.87, 0, 0.13, 1],
        },
      },
    };
    const animateSection = {
      initial: {
        opacity: 1,
        y: -100,
        overflow: "hidden",
      },
      animate: {
        y: 0,
        transition: {
          delay: 1,
          duration: 1.5,

          ease: [0.87, 0, 0.13, 1],
        },
      },
    };
    const animateText = {
      initial: {
        opacity: 0,
        x: "100%",
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: .8,
          ease: [0.87, 0, 0.13, 1],
        },
      },
      exit : {
        opacity : 0,
        x : '-100%',
        transition : {
          delay : 1,
          duration : .8,
          ease: [0.87, 0, 0.13, 1],
        }
      }
    };
    return (
      <>
        <motion.div
          style={{
            background: "#C74D4D",
            zIndex: 10000,
            position: "fixed",
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          initial="initial"
          animate="animate"
          exit="initial"
          variants={blackBox}
        >
          <motion.h1
            initial="initial"
            animate="animate"
            variants={animateText}
            exit="exit"
          >
            <img src={Logowhite} alt="logo" />
          </motion.h1>
        </motion.div>
        <motion.div
          variants={animateSection}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          {this.props.children}
        </motion.div>
      </>
    );
  }
}
