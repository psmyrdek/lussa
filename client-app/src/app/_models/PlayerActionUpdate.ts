import { Color } from './ColorEnum';
import { Player } from './Player';
import { Supplier } from './Supplier';

export interface PlayerActionUpdate {
    suppliers: Supplier[];
    rejectedSupplierColors: Color[];
    brokenColors: Color[];
    player: Player;
}