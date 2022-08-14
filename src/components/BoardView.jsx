// src/components/BoardView.jsx
import React, {Component} from 'react';
import {WID, HGT, GRID, WALL} from '../utils/constants.js';
import Square from './Square.jsx';
import CarView from './CarView.jsx';
import YouWon from './YouWon.jsx';
import ButtonView from './ButtonView.jsx';
// This allows audio playback
import {Howl} from 'howler';
// This component expects the props:
//  cars = the game logic object
// <BoardView cars={this.props.cars}/>
class BoardView extends Component
{
    playWinSound() {
        var sound = new Howl({
            src: ['https://cdn.discordapp.com/attachments/915526516320899082/915526754997788712/clap.mp3'],
            volume: 0.5,
            html5: true
        });
        sound.play();
    }
    playBestWinSound() {
        var sound = new Howl({
            src: ['https://cdn.discordapp.com/attachments/915526516320899082/915527927976833034/best.mp3'],
            volume: 0.5,
            html5: true
        });
        sound.play();
    }
    render()
    {
        // Width and height of the board area, then the style
        const bWid = WID * GRID;
        const bHgt = HGT * GRID;
        const cars = this.props.cars;
        const num = cars.getNumCars();
        const bStyle =
        {
            top: WALL,
            left: WALL,
            width: bWid,
            height: bHgt,
            position: 'absolute',
            borderWidth: "3px",
            borderColor: "red",
            borderStyle: "solid"
        };
        const exitStyle = {
            backgroundColor: "#FFFFFF",
            top: WALL + 2 * GRID + 3,
            left: WALL + WID * GRID + 2,
            width: "10px",
            height: GRID,
            zIndex: 2,
            position: "absolute",
        }
        const textStyle = {
            top: "425px",
            left: "15px",
            position: "absolute",
            fontSize: "28pt",
        }
        // Make a list of things to fill the board:
        let list = [];
        let key = 1;
        for (let x = 0; x < WID; x++)
        {
            let cx = x * GRID;
            for (let y = 0; y < HGT; y++)
            {
                let cy = y * GRID;
                list.push(<Square key={key++} x={cx} y={cy} />);
            }
        }

        // This grabs the number of cars, then iterates through to add them to the board
        for (let i = 0; i < num; i++)
        {
            const { id, x, y, ncols, nrows, color } = cars.getCar(i);
            list.push(
            <CarView
                key={key++}
                x={x*GRID}
                y={y*GRID}
                wid={ncols*GRID}
                hgt={nrows*GRID}
                color={color}
                idNum={id}
                cars={this.props.cars}
            />);
        }
        if (cars.hasWon())
        {
            list.push(<YouWon cx={0} cy={HGT*GRID/4} key={key++} cars={this.props.cars}/>);
            if (cars.numMoves === cars.bestNumMoves) {
                this.playBestWinSound();
            } else {
                this.playWinSound();
            }
        }
        return (
            <div>
                <div style={textStyle}>
                    Current Level: {cars.puzzleNumber}/31<br/>
                    Moves: {cars.numMoves}<br/>
                    Best Moves: {cars.bestNumMoves}
                </div>
                <div style={exitStyle}/>
                <div style={bStyle}>
                    {list}
                    <table>
                        <tr>
                            <td><ButtonView text={"Next Puzzle"} x={-3} y={360} cars={this.props.cars}/></td>
                            <td><ButtonView text={"Reset Puzzle"} x={195} y={360} cars={this.props.cars}/></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    };
};
export default BoardView;