export const startGame = payload => ({
    type: 'START_GAME',
    payload: payload
});

export const setPlayersNames = payload => ({
    type: 'SET_PLAYERS_NAMES',
    payload: payload
});

export const addPoint = player => ({
    type: 'ADD_POINT',
    payload: player
});

