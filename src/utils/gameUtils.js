import {CONTENT_TYPES} from './consts.js';

const checkCells = (cell1, cell2, cell3,board) => {
    return board[cell1] !== CONTENT_TYPES.NONE &&
        (board[cell1] === board[cell2] &&
        board[cell2] === board[cell3]);
};

const checkRows = (board) => {
    return checkCells(0,1,2,board) || checkCells(3,4,5,board) || checkCells(6,7,8,board);
};

const checkCols =(board) =>{
    return checkCells(0,3,6,board) || checkCells(1,4,7,board) || checkCells(2,5,8,board);
};
const checkDiagoanls =(board) => {
    return checkCells(0,4,8,board) || checkCells(2,4,6,board);
};

export const isWinner = (board) => {
    const isWin = checkRows(board) || checkCols(board) || checkDiagoanls(board);
    return isWin;
};
export const checkIsBoardFull = (board) => {
    let boardFull = true;
    board.forEach(square => boardFull = boardFull && square !== CONTENT_TYPES.NONE);
    return boardFull;
};