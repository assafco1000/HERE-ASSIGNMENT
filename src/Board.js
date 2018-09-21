import React from 'react';
import { connect } from 'react-redux'
import {isWinner, checkIsBoardFull} from './utils/gameUtils.js';
import {CONTENT_TYPES, PLAYERS, WINNER_STATE} from './utils/consts.js';
import {GameOver} from './components/GameOver.js';
import { addPoint } from './actions';

class Board extends React.Component {

     createEmptyBoard () {
         let squares = [];
         for (let i=0;i<9;i++) {
             squares.push(
                CONTENT_TYPES.NONE
             );
         }
         return squares;
     }
     constructor(props) {
        super(props);
        this.state = {
            squares: this.createEmptyBoard(),
            isActive: true,
            turn: PLAYERS.PLAYER1,
            winner: WINNER_STATE.NONE
        }
    }

    getPlayerName() {
        return (this.state.turn === PLAYERS.PLAYER1)? this.props.player1 : this.props.player2;
    }

    handleCellClick (cell,index) {
        let board = this.state.squares;
        if (cell !== CONTENT_TYPES.NONE || this.state.winner !== WINNER_STATE.NONE ) {
            return false;
        } else {
            board[index] = this.state.turn === PLAYERS.PLAYER1 ? CONTENT_TYPES.X : CONTENT_TYPES.ZERO;

            //change game state
            let winner = isWinner(board);
            let nextTurn = this.state.turn;

            if (winner) {
                winner = this.state.turn === PLAYERS.PLAYER1 ? WINNER_STATE.PLAYER1WIN : WINNER_STATE.PLAYER2WIN;
                this.props.addPoint(this.getPlayerName());
            } else {
                winner = WINNER_STATE.NONE;
                if (checkIsBoardFull(board)) {
                    winner = WINNER_STATE.TIE;
                } else {
                    nextTurn = this.state.turn === PLAYERS.PLAYER1 ? PLAYERS.PLAYER2 : PLAYERS.PLAYER1;
                }
            }
            this.setState({
                squares: board,
                turn: nextTurn,
                winner: winner
            })
        }
    };

    startGame () {
        this.setState ({
            squares: this.createEmptyBoard(),
            turn: PLAYERS.PLAYER1,
            winner: WINNER_STATE.NONE
        });
    }

    render() {
        let rowElements = this.state.squares.map((cell, index) => {
            return <td key={index} onClick={() => this.handleCellClick(cell,index)} className="square">{cell}</td>
        });


        return (
            <div className="Game">
                {(this.state.winner !== WINNER_STATE.NONE)? <GameOver winner={this.state.winner} player={this.getPlayerName()} onStartGame={() => {this.startGame()}}/>: null}
                {this.state.winner === WINNER_STATE.NONE ? <h2>{this.getPlayerName()} turn</h2> : null}
                <div className="Board">
                    <table>
                        <tbody>
                            <tr>
                            {rowElements[0]}
                            {rowElements[1]}
                            {rowElements[2]}
                            </tr>
                            <tr>
                            {rowElements[3]}
                            {rowElements[4]}
                            {rowElements[5]}
                            </tr>
                            <tr>
                            {rowElements[6]}
                            {rowElements[7]}
                            {rowElements[8]}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    player1: state.player1.name,
    player2: state.player2.name
});

const mapDispatchToProps = dispatch => ({
    addPoint: (player) => dispatch(addPoint(player))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)
