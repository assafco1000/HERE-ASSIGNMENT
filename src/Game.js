import React from 'react';
import Board  from './Board.js';
import { connect } from 'react-redux'
import './Game.css';
import { startGame, setPlayersNames } from './actions';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showWelcomeScreen: true
        };
        this.handlePlayerName= this.handlePlayerName.bind(this);
    }

    handlePlayerName(evt) {
        this.props.setNames({
            player1: {name: (evt.target.name==='player1'? evt.target.value: this.props.player1.name), score: 0},
            player2: {name: (evt.target.name==='player2'? evt.target.value: this.props.player2.name), score: 0}
        })
    }

    startGame() {
        this.props.startGame(this.props);
        this.setState({
            showWelcomeScreen: false
        });
    }

    render() {
        return (
            <div className="App">
                <div className="jumbotron col-lg-2">
                    <table className="col-sm-12">
                        <tbody>
                            <h4>SCOREBOARD</h4>
                            <tr>{this.props.player1.name} : {this.props.player1.score}</tr>
                            <tr>{this.props.player2.name} : {this.props.player2.score}</tr>
                        </tbody>
                    </table>
                </div>

                <div className={"padding-lg " + (this.state.showWelcomeScreen? 'shown': 'hidden')}>
                    <div class="mb-4"><h5>Please insert the players' names:</h5></div>
                    <div className="form-group row">
                        <label className="col-sm-5 control-label" for="player1">PLYAER 1:</label>
                        <input className="col-sm-3 form-control" type="text" value={this.props.player1.name} name="player1" id="player1" onChange={this.handlePlayerName}/>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 control-label" for="player2">PLYAER 2:</label>
                        <input className="col-sm-3 form-control" type="text" value={this.props.player2.name} name="player2" id="player2" onChange={this.handlePlayerName}/>
                    </div>
                    <button className="btn btn-success" onClick={() => this.startGame()}>Start Game</button>
                </div>
                {!this.state.showWelcomeScreen? <Board player1={this.props.player1.name} player2={this.props.player2.name}/> : null}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startGame: (players) => dispatch(startGame(players)),
    setNames: (players) => dispatch(setPlayersNames(players))
});

export default connect(
        state => {
            return {player1: state.player1,
                    player2: state.player2}
        },
    mapDispatchToProps
)(Game)