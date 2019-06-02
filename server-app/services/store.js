const { actions } = require('./actions');
const { state } = require('./state');

const { getDefaultColors } = require('../utils/default-colors');
const { getBonusColors } = require('../utils/get-bonus-colors');
const { generatePlayer } = require('../utils/generate-player');
const { createSuppliers } = require('../utils/create-suppliers');
const { getSupplierColors } = require('../utils/get-supplier-colors.js');

function initGame(gameId) {
    
    const gameState = state();
    
    const [bonusColors, remainingColors] = getBonusColors(getDefaultColors());
    
    gameState.gameId = gameId;
    gameState.colors = remainingColors;
    gameState.bonusColors = bonusColors;

    return gameState;
}

function startNewRound(state) {
    state.roundNo++;

    let availableColors = state.colors;

    const filledSuppliers = state.suppliers.map(supplier => {
        const [toGet, toKeep] = getSupplierColors(availableColors);
        availableColors = toKeep
        return { ...supplier, colors: toGet }
    })

    state.colors = availableColors;
    state.suppliers = filledSuppliers;
}

function globalReducer(state, action) {
    switch (action.type) {
        case actions.initGame: {
            const gameId = action.payload;
            state[gameId] = initGame(gameId);
            return state;
        }
        default:
            return state;
    }
}

function gameStateReducer(state, action) {
    switch (action.type) {
        case actions.addPlayer: {

            const players = [...state.players, generatePlayer(action.payload.playerId)]

            return {
                ...state,
                players,
                suppliers: createSuppliers(players.length)
            }
        }
        case actions.markReadiness: {
            const playerId = action.payload.playerId;
            const player = state.players.find(p => p.id === playerId);
            player.isReady = true;

            if (state.players.every(player => player.isReady)) {
                startNewRound(state);
            }

            return state;
        }
        case actions.colorTakenFromSupplier: {
            //     const actionPayload = (action as TakeFromSupplierAction).payload;
            //     let playerTurnColors: Color[] = [];
            //     let rejectedSupplierColors: Color[] = [];

            //     const filteredSuppliers = state.suppliers.map((supplier) => {
            //         if (supplier.id !== actionPayload.supplierId) {
            //             return supplier;
            //         } else {
            //             playerTurnColors = supplier.colors.filter(c => c === actionPayload.color)
            //             rejectedSupplierColors = supplier.colors.filter(c => c !== actionPayload.color)

            //             return { ...supplier, colors: [] }
            //         }
            //     });

            //     return {
            //         ...state,
            //         suppliers: filteredSuppliers,
            //         playerTurnColors,
            //         rejectedSupplierColors: [...state.rejectedSupplierColors, ...rejectedSupplierColors]
            //     }

        }
        default:
            return state;
    }
}


module.exports.createStore = () => {

    let state = {};

    return {
        dispatchGlobalAction: (action) => {
            state = globalReducer(state, action);
        },
        dispatchGameAction: (gameId, action) => {
            state[gameId] = gameStateReducer(state[gameId], action);
        },
        getGameState: (gameId) => state[gameId]
    }
}