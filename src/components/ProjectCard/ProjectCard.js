import React, { Component } from 'react'
import './ProjectCard.scss'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
export default class ProjectCard extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            classToggle : 'project-image'
        }
        this.hover = this.hover.bind(this)
        this.leave=this.leave.bind(this)
    }
    hover()
    {
            this.setState({classToggle : 'project-image hovered'})
        
       
    }
    leave(){
            this.setState({classToggle : 'project-image'})
        
    }
    render() {
        return (
            <div to={this.props.projectPath}  className='project-card'>
                <div  className={this.state.classToggle}>
                    <img src={this.props.projectImage} alt=""/>
                    <Button>Explore</Button>
                </div>
                <NavLink onMouseOver={this.hover} onMouseOut={this.leave} to={this.props.projectPath} className="project-name">
                    <p>
                        {this.props.projectName}
                    </p>
                </NavLink>
                <div className="project-description">
                    <p>
                        {this.props.projectDescription}
                    </p>
                </div>
            </div>
        )
    }
}
