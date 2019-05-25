import { AppState } from '../state';

export function shouldProceedToNextRound(state: AppState): boolean {

    // Do not finish round - supplier colors not empty
    if (state.suppliers.some(sup => Boolean(sup.colors.length))) {
        return false;
    }

    // Do not finish round - rejected colors not empty
    if (state.rejectedSupplierColors.length) {
        return false;
    }

    // Do not finish round - there are players who can pass
    if (state.players.some(player => player.columns.some(c => c.isDisabled))) {
        return false;
    }

    // TODO - if last round

    return true;

}