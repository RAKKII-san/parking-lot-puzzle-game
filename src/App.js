// src/App.js
import React, { Component } from 'react';
import BoardView from './components/BoardView.jsx';
// This component expects the props:
// cars = the game logic object
class App extends Component
{
  constructor(props)
    {
      super(props);
      this.state = { counter: 0 };
      this.onBoardUpdate = this.onBoardUpdate.bind(this);
      props.cars.setRedrawCallback(this.onBoardUpdate);
    }

  onBoardUpdate(counter) {
    this.setState({counter: counter});
  } 

  render()
  {
    return ( <div>
      <BoardView cars={this.props.cars}/>
    </div> );
  }
}
export default App;
