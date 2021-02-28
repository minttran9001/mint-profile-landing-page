import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Exhibition from "./pages/Exhibition/Exhibition";
import Project from "./pages/Project/Project";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          path: "/",
          name: "Exhibition",
          Component: Exhibition,
        },
        {
          path: "/project",
          name: "Project",
          Component: Project,
        },
        {
          path: "/project/:id",
          name: "Project Detail",
          Component: ProjectDetail,
        },
      ],
    };
  }
  componentDidMount() {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top:" + (e.pageY - 25) + "px ; left :" + (e.pageX - 25) + "px"
      );
    });
    document.addEventListener("click", (e) => {
      cursor.classList.add("clicked");
      setTimeout(() => {
        cursor.classList.remove("clicked");
      }, 200);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="cursor"></div>
        <BrowserRouter>
          <Switch>
            {this.state.routes.map((item, index) => (
              <Route
                key={item.name}
                path={item.path}
                exact
                component={item.Component}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
