import { Action } from '@ngrx/store';
import { Color } from '../_models/ColorEnum';
import { Supplier } from '../_models/Supplier';
import { AppActionTypes, TurnActionTypes } from './app.actions';
import { getRandomColors, removePickedColors } from './utils/colors';

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
        Color.Magenta,
        Color.White,
        Color.White,
        Color.White,
        Color.Yellow,
        Color.Yellow,
        Color.Yellow
    ]
}

export function appReducer(state: AppState = defaultState, action: Action) {
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

            let availableColors = state.colors

            const filledSuppliers: Supplier[] = state.suppliers.map(() => {
                const colorsForSupplier = getRandomColors(availableColors)
                availableColors = removePickedColors(availableColors, colorsForSupplier)
                return { colors: colorsForSupplier }
            })

            return {
                ...state,
                colors: availableColors,
                suppliers: filledSuppliers
            }
        }
    }
}