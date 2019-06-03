const {ColumnVariantEnum} = require('../models/column-variant-enum');

function updatedRecently(columnId, actionColumnId) {
    return columnId === actionColumnId;
}

// function checkVariantCompletion(column: Column): boolean {

//     if (column.isVariantCompleted) { return true; }

//     const variant = column.activeVariant === ColumnVariantEnum.A
//         ? column.variantA
//         : column.variantB;

//     return variant.fields.every(field => field.isFilled);

// }

function getNewVariant(column) {
    return column.activeVariant === ColumnVariantEnum.A
        ? ColumnVariantEnum.B
        : ColumnVariantEnum.A;
}

function getActiveVariant(column) {
    return column.activeVariant === ColumnVariantEnum.A
        ? column.variantA
        : column.variantB;
}

module.exports.getUpdatedColumn = (column, action) => {

    const isDisabled = column.id < action.columnIndex;

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