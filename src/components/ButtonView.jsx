// src/components/ButtonView.jsx
import React, { Component } from 'react';
// This allows audio playback
import {Howl} from 'howler';
// This component expects the props:
//      text = text for the button
//      x = horizontal position of button
//      y = vertical position of button
// <ButtonView text={"Reset Puzzle"} x={195} y={360} cars={this.props.cars}/>
class ButtonView extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    playResetSound() {
        var sound = new Howl({
            src: ['https://cdn.discordapp.com/attachments/915526516320899082/915526590895636520/reset.mp3'],
            volume: 1.0,
            html5: true
        });
        sound.play();
    }
    playNextSound() {
        var sound = new Howl({
            src: ['https://cdn.discordapp.com/attachments/915526516320899082/915526738426069032/next.mp3'],
            volume: 1.0,
            html5: true
        });
        sound.play();
    }
    handleClick() {
        if (this.props.text === "Reset Puzzle") {
            this.props.cars.resetPuzzle();
            this.playResetSound();
        } else if (this.props.text === "Next Puzzle") {
            this.props.cars.nextPuzzle();
            this.playNextSound();
        }
    }
    render() {
        const btnStyle = {
            background: "#DEE9EA",
            borderColor: "#A89B10",
            borderStyle: "solid",
            borderWidth: "4px",
            fontSize: "20pt",
            width: "150px",
            height: "40px",
            position: "absolute",
            left: this.props.x,
            top: this.props.y,
            textAlign: "center",
        }
        return (<div style={btnStyle} onClick={this.handleClick}>{this.props.text}</div>);
    }
}

export default ButtonView;