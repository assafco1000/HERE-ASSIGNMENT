const gameReducer = (state = {}, action={payload:null}) => {
    switch (action.type) {
        case 'START_GAME':
            return action.payload;
        case 'ADD_POINT':
            if (state.player1.name ===  action.payload) {
                return {
                    player1: {name: action.payload, score: ++state.player1.score},
                    player2: state.player2
                };
            }  else if (state.player2.name ===  action.payload) {
                return {
                    player1: state.player1,
                    player2: {name: action.payload, score: ++state.player2.score}
                };
            }
            return state;
        case 'SET_PLAYERS_NAMES': {
            return {
                player1: {name: action.payload.player1.name, score: state.player1.score},
                player2: {name: action.payload.player2.name, score: state.player2.score}
            };
        }
        default:
            return {
                player1: {name: 'player1', score: 0},
                player2: {name: 'player2', score: 0}
            }
    }
};

export default gameReducer