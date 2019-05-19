import { Column } from 'src/app/_models/Column';
import { ColumnVariant } from 'src/app/_models/ColumnVariant';
import { Color } from 'src/app/_models/ColorEnum';
import { Supplier } from 'src/app/_models/Supplier';

export function getRandomColumn(column?: Column): Column {
    return Object.assign({
        isDisabled: false,
        isColumnCompleted: false,
        isVariantCompleted: false,
        variantA: getRandomVariant(),
        variantB: getRandomVariant(),
        value: 3
    }, column)
}

export function getRandomVariant(): ColumnVariant {
    return {
        fields: [
            { color: Color.Magenta, isFilled: false },
            { color: Color.Magenta, isFilled: false },
            { color: Color.Magenta, isFilled: false },
            { color: Color.Magenta, isFilled: false },
            { color: Color.Magenta, isFilled: false }
        ]
    }
}

export function getRandomSupplier(): Supplier {
    return {
        id: 0,
        colors: [
            Color.White,
            Color.Magenta,
            Color.Cyan,
            Color.Cyan
        ]
    }
}