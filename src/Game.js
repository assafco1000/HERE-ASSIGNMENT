import React from 'react';
import Board  from './Board.js';
import './Game.css';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player1: 'PLAYER1',
            player2: 'PLAYER2',
            showWelcomeScreen: true
        };
        this.handlePlayerName= this.handlePlayerName.bind(this);
    }

    handlePlayerName(evt) {
        this.setState({
            player1: evt.target.name==='player1'? evt.target.value: this.state.player1,
            player2: evt.target.name==='player2'? evt.target.value: this.state.player2
        })
    }

    startGame() {
        this.setState({
            showWelcomeScreen: false
        });
    }

    render() {
        return (
            <div className="App">
                <div className={this.state.showWelcomeScreen? 'shown': 'hidden'}>
                    <div className="form-group row">
                        <label className="col-sm-5 control-label" for="player1">PLYAER 1:</label>
                        <input className="col-sm-3 form-control" type="text" value={this.state.player1} name="player1" id="player1" onChange={this.handlePlayerName}/>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 control-label" for="player2">PLYAER 2:</label>
                        <input className="col-sm-3 form-control" type="text" value={this.state.player2} name="player2" id="player2" onChange={this.handlePlayerName}/>
                    </div>
                    <button className="btn btn-success" onClick={() => this.startGame()}>Start Game</button>
                </div>
                {!this.state.showWelcomeScreen? <Board player1={this.state.player1} player2={this.state.player2}/> : null}
            </div>
        );
    }
}

export default Game;