// src/components/CarView.jsx
import React, {Component} from 'react';
import {CAR_RAD, CAR_PAD} from '../utils/constants.js';
// This allows audio playback
import {Howl} from 'howler';
// This component expects the props:
//      x, y -- upper left corner of the component
//      wid, hgt -- size of the component
//      color -- color of the component
class CarView extends Component
{
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    playMoveSound() {
        var sound = new Howl({
            src: ['https://cdn.discordapp.com/attachments/915526516320899082/915530397251682324/move.mp3'],
            volume: 1.0,
            html5: true
        });
        sound.play();
    }
    handleClick(event) {
        // Get the coordinates of where the mouse was clicked.
        // This coordinates are relateve to the CarView itself.
        const mx = event.nativeEvent.offsetX;
        const my = event.nativeEvent.offsetY;
        let dir = 0;
        if (this.props.wid > this.props.hgt) {
            // This is a horizontal car
            dir = (mx >= this.props.wid / 2) ? 2 :
            3;
        } else {
            // This is a vertical car
            dir = (my >= this.props.hgt / 2) ? 1 :
            0;
        }
        this.props.cars.moveCar(this.props.idNum, dir);
        this.playMoveSound();
    }
    render()
    {
    // The style to use for the component
    const myStyle =
    {
        top: this.props.y + CAR_PAD,
        left: this.props.x + CAR_PAD,
        width: this.props.wid - 2 * CAR_PAD - 2,
        height: this.props.hgt - 2 * CAR_PAD - 2,
        background: this.props.color,
        borderWidth: 1,
        borderColor: '#666666',
        borderStyle: 'solid',
        borderRadius: CAR_RAD,
        position: 'absolute'
    };
    return ( <div 
        style={myStyle}
        onClick={this.handleClick}
        /> ) ;
    }
}
export default CarView;