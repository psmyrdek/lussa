import { Supplier } from './Supplier';
import { Color } from './ColorEnum';
import { Player } from './Player';

export interface StateUpdate {
    suppliers: Supplier[];
    colors: Color[];
    rejectedSupplierColors: Color[];
    brokenColors: Color[];
    players: Player[];
}