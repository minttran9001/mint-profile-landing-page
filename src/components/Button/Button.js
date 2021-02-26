import React, { Component } from 'react'
import eyeButton from '../../images/100ppi/eye button.png'
import './Button.scss'
export default class Button extends Component {
    render() {
        return (
            <button className='eye-button'>
                <img src={eyeButton} alt="eye-img"/>
                <p>{this.props.children}</p>
            </button>
        )
    }
}
