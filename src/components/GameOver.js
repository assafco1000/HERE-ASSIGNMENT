import React from 'react';
import {WINNER_STATE} from '../utils/consts.js';
import './GameOver.css';

const getDisplayText =(winner, player) => {
    return (winner === WINNER_STATE.TIE) ? "It's a tie" : player +" is the winner";
};

export function GameOver(props) {
    return (
        <div className="overlay">
            <h2>{getDisplayText(props.winner, props.player)}</h2>
            <button className="btn btn-primary" onClick={props.onStartGame}>RESTART GAME</button>
        </div>
    );
}
export default GameOver;