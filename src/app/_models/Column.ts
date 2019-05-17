import { ColumnVariant } from './ColumnVariant';

export interface Column {

    activeVariant: ColumnVariant;

    variantA: ColumnVariant;
    variantB: ColumnVariant;

    isVariantCompleted: boolean;
    isColumnCompleted: boolean;

    value: number;
    
}