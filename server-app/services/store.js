const { actions } = require('./actions');
const { state } = require('./state');
const { Color } = require('../models/color');
const { ColumnVariantEnum } = require('../models/column-variant-enum');

const { getDefaultColors } = require('../utils/default-colors');
const { getBonusColors } = require('../utils/get-bonus-colors');
const { generatePlayer } = require('../utils/generate-player');
const { createSuppliers } = require('../utils/create-suppliers');
const { getSupplierColors } = require('../utils/get-supplier-colors.js');
const { getUpdatedColumn } = require('../utils/get-updated-column');
const { calcTurnPenalty, updateScoreSteps } = require('../utils/broken-stones');

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
    });

    state.playerTurnIndex = state.firstPlayerId !== null
        ? state.players.findIndex(p => p.id === state.firstPlayerId)
        : 0;

    state.firstPlayerId = null;

    state.colors = availableColors;
    state.suppliers = filledSuppliers;
}

function checkEndRound(state) {

    if (state.rejectedSupplierColors.length > 0) {
        return false;
    }

    if (state.suppliers.some(s => s.colors.length > 0)) {
        return false;
    }

    return true;

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
                startNewRound(state); ``
            }

            return state;
        }
        case actions.takeFromSupplier: {

            const playerIndex = state.players.findIndex(p => p.id === action.payload.playerId);

            let playerTurnColors = [];
            let rejectedSupplierColors = [];

            const filteredSuppliers = state.suppliers.map((supplier) => {
                if (supplier.id !== action.payload.supplierId) {
                    return supplier;
                } else {
                    playerTurnColors = supplier.colors.filter(c => c === action.payload.color)
                    rejectedSupplierColors = supplier.colors.filter(c => c !== action.payload.color)

                    return { ...supplier, colors: [] }
                }
            });

            state.suppliers = filteredSuppliers
            state.rejectedSupplierColors = [...state.rejectedSupplierColors, ...rejectedSupplierColors]
            state.players[playerIndex].turnColors = playerTurnColors;

            return state;
        }
        case actions.fillColumn: {

            const actionPayload = action.payload;

            const player = state.players.find(p => p.id === actionPayload.playerId);
            const playerIndex = state.players.findIndex(p => p.id === actionPayload.playerId);

            const colorsInHand = state.players[playerIndex].turnColors;

            const columnId = actionPayload.columnId;

            // Block picking disabled column
            const column = player.columns.find(c => c.id === columnId)
            if (column.isDisabled || column.isColumnCompleted) {
                return state;
            }

            // Update variant and colors to break
            const variant = column.activeVariant === ColumnVariantEnum.A
                ? column.variantA : column.variantB;

            const toBreak = [];
            colorsInHand.forEach(color => {

                if (actionPayload.fillJokers) {
                    const jokerIndex = variant.fields.findIndex(f => f.color === Color.Joker && !f.isFilled);
                    variant.fields[jokerIndex].isFilled = true;
                    variant.fields[jokerIndex].color = color;
                } else {
                    const toFill = variant.fields.find(f => f.color === color && !f.isFilled)
                    if (toFill) {
                        toFill.isFilled = true;
                    } else {
                        toBreak.push(color)
                    }
                }

            });

            // Empty player turn colors
            player.turnColors = [];

            // Update column
            player.columns = player.columns.map((column, index) => getUpdatedColumn(column, {
                columnIndex: columnId
            }))

            // Add scores from column
            if (variant.fields.every(f => f.isFilled)) {
                player.score += player.columns
                    .filter(c => c.id >= columnId && c.isVariantCompleted)
                    .reduce((prev, current) => {
                        return prev + current.value;
                    }, 0);
            }

            // Update broken stones penalty
            player.score += calcTurnPenalty(toBreak.length, player.scoreSteps);
            player.scoreSteps = updateScoreSteps(toBreak.length, player.scoreSteps);

            state.brokenColors = [...state.brokenColors, ...toBreak];

            if (checkEndRound(state)) {
                startNewRound(state);
            } else {
                state.playerTurnIndex = ++state.playerTurnIndex % state.players.length;
            }

            return state;
        }
        case actions.skipTurn: {

            const actionPayload = action.payload;

            const player = state.players.find(p => p.id === actionPayload.playerId);

            player.columns.forEach(column => {
                column.isDisabled = false;
            })

            if (checkEndRound(state)) {
                startNewRound(state);
            } else {
                state.playerTurnIndex = ++state.playerTurnIndex % state.players.length;
            }

            return state;
        }
        case actions.takeFromRejectedColors: {

            const actionPayload = action.payload;
            const player = state.players.find(p => p.id === actionPayload.playerId);

            const playerTurnColors = state.rejectedSupplierColors.filter(c => c === actionPayload.color);
            const rejectedSupplierColors = state.rejectedSupplierColors.filter(c => c !== actionPayload.color);

            if (state.firstPlayerId === null) {
                state.firstPlayerId = player.id;
                player.score += calcTurnPenalty(1, player.scoreSteps);
                player.scoreSteps = updateScoreSteps(1, player.scoreSteps);
            }

            player.turnColors = playerTurnColors;
            state.rejectedSupplierColors = rejectedSupplierColors;

            return state;
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