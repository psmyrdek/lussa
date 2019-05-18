import { Action } from '@ngrx/store';
import { Color } from '../_models/ColorEnum';
import { Supplier } from '../_models/Supplier';
import { AppActionTypes, TurnActionTypes } from './app.actions';

export interface AppState {
    suppliers: Supplier[];
    colors: Color[];
}

const defaultState: AppState = {
    suppliers: [],
    colors: [
        Color.Orange,
        Color.Orange,
        Color.Orange,
        Color.Cyan,
        Color.Cyan,
        Color.Cyan,
        Color.Magenta,
        Color.Magenta,
        Color.Magenta
    ]
}

export function appReducer(state: AppState = defaultState, action: Action) {
    console.log(state)
    switch (action.type) {
        case AppActionTypes.InitSuppliers: {
            return {
                ...state,
                suppliers: [
                    { colors: [] },
                    { colors: [] },
                    { colors: [] },
                    { colors: [] },
                    { colors: [] },
                    { colors: [] },
                    { colors: [] }
                ]
            }
        }
        case TurnActionTypes.InitSupplierColors: {

            const availableColors = state.colors;
            const filledSuppliers: Supplier[] = state.suppliers.map(supplier => ({
                colors: [Color.White, Color.Cyan, Color.Magenta, Color.Orange]
            }))

            return {
                ...state,
                suppliers: filledSuppliers
            }
        }
    }
}