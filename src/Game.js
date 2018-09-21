import React from 'react';
import Board  from './Board.js';
import { connect } from 'react-redux';
import './App.css';
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

    playerToDisplayText(player) {
        return player.name + ":" + player.score;
    }

    render() {

        return (
            <div className="App row">
                <div className="jumbotron col-lg-2">
                    <h4>SCOREBOARD</h4>
                    <table className="col-sm-12">
                        <tbody>
                            <tr>
                                <td>{this.playerToDisplayText(this.props.player1)}</td>
                            </tr>
                            <tr>
                                <td>{this.playerToDisplayText(this.props.player2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={"padding-lg col-lg-8 " + (this.state.showWelcomeScreen? 'shown': 'hidden')}>
                    <div className="mb-4"><h5>Please insert the players' names:</h5></div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label" htmlFor="player1">PLYAER 1:</label>
                        <input className="col-sm-3 form-control" type="text" value={this.props.player1.name} name="player1" id="player1" onChange={this.handlePlayerName}/>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label" htmlFor="player2">PLYAER 2:</label>
                        <input className="col-sm-3 form-control" type="text" value={this.props.player2.name} name="player2" id="player2" onChange={this.handlePlayerName}/>
                    </div>
                    <button className="btn btn-success" onClick={() => this.startGame()}>Start Game</button>
                </div>
                <div className={"col-lg-8 " + (!this.state.showWelcomeScreen? 'shown': 'hidden')}>
                    {!this.state.showWelcomeScreen? <Board/> : null}
                </div>

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