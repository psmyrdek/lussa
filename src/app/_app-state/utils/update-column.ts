import { Column } from 'src/app/_models/Column';
import { ColumnVariantEnum } from 'src/app/_models/ColumnVariantEnum';
import { ColumnVariant } from 'src/app/_models/ColumnVariant';

type ActionInfo = {
    columnIndex: number;
}

function updatedRecently(columnId: number, actionColumnId: number) {
    return columnId === actionColumnId;
}

// function checkVariantCompletion(column: Column): boolean {

//     if (column.isVariantCompleted) { return true; }

//     const variant = column.activeVariant === ColumnVariantEnum.A
//         ? column.variantA
//         : column.variantB;

//     return variant.fields.every(field => field.isFilled);

// }

function getNewVariant(column: Column): ColumnVariantEnum {
    return column.activeVariant === ColumnVariantEnum.A
        ? ColumnVariantEnum.B
        : ColumnVariantEnum.A;
}

function getActiveVariant(column: Column): ColumnVariant {
    return column.activeVariant === ColumnVariantEnum.A
        ? column.variantA
        : column.variantB;
}

export function getUpdatedColumn(column: Column, action: ActionInfo): Column {

    const isDisabled = column.id < action.columnIndex

    let isVariantCompleted = column.isVariantCompleted;
    let isColumnCompleted = column.isColumnCompleted;
    let activeVariant = column.activeVariant;

    if (updatedRecently(column.id, action.columnIndex)) {
        const allFiled = getActiveVariant(column).fields.every(f => f.isFilled)

        if (allFiled && !column.isVariantCompleted) {
            activeVariant = getNewVariant(column);
        }

        if (allFiled && isVariantCompleted && !column.isColumnCompleted) {
            isColumnCompleted = true;
        }

        if (allFiled && !column.isVariantCompleted) {
            isVariantCompleted = true;
        }
    }

    return {
        ...column,
        isDisabled,
        activeVariant,
        isVariantCompleted,
        isColumnCompleted
    }

    // const isVariantCompleted = updatedRecently(column.id, action.columnIndex)
    //     ? checkVariantCompletion(column)
    //     : column.isVariantCompleted

    // return {
    //     ...column,
    //     isDisabled: column.id < action.columnIndex,
    //     isVariantCompleted,
    //     activeVariant: isVariantCompleted ? getNewVariant(column) : column.activeVariant
    // }
}