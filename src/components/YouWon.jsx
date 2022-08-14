// src/components/YouWon.jsx
import React, { Component } from 'react';
import {WID, GRID} from '../utils/constants.js';
// This component expects the props:
//      cx = center x position
//      cy = center y position
//      cars = the game logic object
// <YouWon cx={0} cy={HGT*GRID/4} key={key++} cars={this.props.cars}/>
class YouWon extends Component
{
    render()
    {
        const bestStyle = {
            fontSize: "36pt",
            color: "#FFF700",
            zIndex: 3,
            top: this.props.cy,
            left: this.props.cx,
            position: "absolute",
            textAlign: "center",
            textShadow: "2px 2px #000000",
            backgroundColor: "#7F77007F",
            width: WID * GRID
        }
        const winStyle = {
            fontSize: "36pt",
            color: "#FFFFFF",
            zIndex: 3,
            top: this.props.cy,
            left: this.props.cx,
            position: "absolute",
            textAlign: "center",
            textShadow: "2px 2px #000000",
            backgroundColor: "#7F7F7F7F",
            width: WID * GRID
        }
        const cars = this.props.cars;
        if (cars.numMoves === cars.bestNumMoves) {
            return (<span style={bestStyle}>You got <br/>the best moves!</span> );
        } else {
            return (<span style={winStyle}>You Won!<br/>Go for best moves!</span> );
        }
        
    }
}
export default YouWon;