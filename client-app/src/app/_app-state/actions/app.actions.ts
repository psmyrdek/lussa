// import { Action } from '@ngrx/store';
// import { AppState } from '../state';
// import { StateUpdate } from 'src/app/_models/StateUpdate';

// export enum AppActionTypes {
//     InitState = '[App] Init State',
//     UpdateState = '[App] Update State',
//     InitSuppliers = '[App] Init Suppliers'
//     // AddPlayer = '[App] Add Player'
// }

// export class InitStateAction implements Action {
//     readonly type = AppActionTypes.InitState;

//     constructor(public payload: { state: AppState }) { }
// }

// export class InitSuppliersAction implements Action {
//     readonly type = AppActionTypes.InitSuppliers;

//     constructor(public payload: { noOfPlayers: number }) { }
// }

// // export class AddPlayerAction implements Action {
// //     readonly type = AppActionTypes.AddPlayer;

// //     constructor(public payload: { id: string }) { }
// // }

// export class UpdateStateAction implements Action {
//     readonly type = AppActionTypes.UpdateState;

//     constructor(public payload: { update: StateUpdate }) { }
// }