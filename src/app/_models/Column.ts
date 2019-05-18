import { ColumnVariant } from './ColumnVariant';
import { ColumnVariantEnum } from './ColumnVariantEnum';

export interface Column {

    activeVariant: ColumnVariantEnum;

    variantA: ColumnVariant;
    variantB: ColumnVariant;

    isVariantCompleted: boolean;
    isColumnCompleted: boolean;

    value: number;
    
}