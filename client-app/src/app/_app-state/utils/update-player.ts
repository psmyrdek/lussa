import { AppState } from '../state';
import { Player } from 'src/app/_models/Player';

export function updatePlayer(state: AppState, playerToUpdate: Player): Player[] {

    const playerIndex = state.players.findIndex(p => p.id === playerToUpdate.id)

    return state.players.map((player, index) => {
        if (index !== playerIndex) {
            return player;
        }

        return {
            ...player,
            ...playerToUpdate
        }
    })
}