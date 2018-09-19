import React from 'react';
import {WINNER_STATE} from '../utils/consts.js';

const getDisplayText =(winner, player) => {
    return (winner === WINNER_STATE.TIE) ? "It's a tie" : player +" is the winner";
};

export function GameOver(props) {
    return (
        <div className="overlay">
            <h2>{getDisplayText(props.winner, props.player)}</h2>
            <button onClick={props.onStartGame}>RESTART GAME</button>
        </div>
    );
}
export default GameOver;