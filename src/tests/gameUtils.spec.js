import {isWinner, checkIsBoardFull} from '../utils/gameUtils.js';

test('isWinner - expect winner in row 0', () => {
    const board = ['x', 'x','x','','','','','',''];
    expect(isWinner(board)).toBe(true);
});

test('isWinner - expect no winner', () => {
    const board = ['X', 'O','X','','','','','',''];
    expect(isWinner(board)).toBe(false);
});

test('checkIsBoardFull - expect board is full', () => {
    const board = ['x', 'o','x','o','x','o','o','x','x'];
    expect(checkIsBoardFull(board)).toBe(true);
});